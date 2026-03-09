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

const forbidden403HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>403 Forbidden</title>
<link rel="icon" type="image/svg+xml" href="/logo/favicon.svg"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#020617;color:#f8fafc;font-family:'Inter',system-ui,sans-serif;
background-image:radial-gradient(circle,rgba(148,163,184,.08) 1px,transparent 1px);background-size:32px 32px}
.c{text-align:center;max-width:28rem;padding:1.5rem}
.icon{width:4rem;height:4rem;margin:0 auto 1.5rem;display:flex;align-items:center;justify-content:center;border-radius:1rem;border:1px solid rgba(30,41,59,.5);background:rgba(15,23,42,.5)}
.icon svg{color:#22d3ee}
h1{font-size:clamp(4rem,12vw,6rem);font-weight:700;background:linear-gradient(135deg,#22d3ee,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1rem}
.cmd{font-family:'JetBrains Mono',monospace;color:#94a3b8;font-size:.875rem;margin-bottom:.5rem}
.msg{font-family:'JetBrains Mono',monospace;color:#475569;font-size:.8rem;margin-bottom:2rem}
a{display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;border-radius:.5rem;background:linear-gradient(135deg,#22d3ee,#3b82f6);color:#020617;font-size:.875rem;font-weight:500;text-decoration:none;transition:opacity .2s}
a:hover{opacity:.9}
a svg{width:1rem;height:1rem}
</style>
</head>
<body>
<div class="c">
<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
<h1>403</h1>
<p class="cmd">$ access /assets/</p>
<p class="msg">Forbidden — you don't have permission to access this resource.</p>
<a href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>Back to Home</a>
</div>
</body>
</html>`

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
		// Block directory listing — serve a styled 403 page
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		w.WriteHeader(http.StatusForbidden)
		w.Write([]byte(forbidden403HTML))
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
				_ = f // file exists, let the file server handle it
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
