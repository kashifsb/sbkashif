package main

import (
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"strings"

	sbkashif "github.com/kashifsb/sbkashif"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Unwrap embedded FS to strip the "static" prefix
	staticFS, err := fs.Sub(sbkashif.StaticFS, "static")
	if err != nil {
		log.Fatalf("failed to load embedded static files: %v", err)
	}

	// Read index.html into memory for SPA fallback
	indexHTML, err := fs.ReadFile(staticFS, "index.html")
	if err != nil {
		log.Fatalf("failed to read embedded index.html: %v", err)
	}

	mux := http.NewServeMux()

	// API health check
	mux.HandleFunc("GET /api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(`{"status":"ok"}`))
	})

	// Block direct browsing of /assets/ directory
	mux.HandleFunc("GET /assets/", func(w http.ResponseWriter, r *http.Request) {
		// Allow requests for actual files (have an extension like .js, .css)
		if strings.Contains(r.URL.Path, ".") {
			http.FileServerFS(staticFS).ServeHTTP(w, r)
			return
		}
		// Directory listing blocked — SPA fallback renders the 403 page
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		w.Write(indexHTML)
	})

	// Resume download
	mux.HandleFunc("GET /resume/download", func(w http.ResponseWriter, r *http.Request) {
		data, err := fs.ReadFile(staticFS, "cv/baleeghuddin_europass_cv.pdf")
		if err != nil {
			http.Error(w, "resume not found", http.StatusNotFound)
			return
		}
		w.Header().Set("Content-Disposition", `attachment; filename="Shaik_Baleeghuddin_Kashif_CV.pdf"`)
		w.Header().Set("Content-Type", "application/pdf")
		w.Write(data)
	})

	// Serve embedded static files with SPA fallback
	fileServer := http.FileServerFS(staticFS)
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := strings.TrimPrefix(r.URL.Path, "/")

		// Try to serve the file if it exists in the embedded FS
		if path != "" {
			if f, err := staticFS.(fs.ReadFileFS).ReadFile(path); err == nil {
				_ = f
				fileServer.ServeHTTP(w, r)
				return
			}
		}

		// SPA fallback: serve index.html for all other routes
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		w.Write(indexHTML)
	})

	addr := fmt.Sprintf(":%s", port)
	log.Printf("listening on %s (embedded static files)", addr)
	log.Fatal(http.ListenAndServe(addr, mux))
}
