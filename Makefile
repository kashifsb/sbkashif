.PHONY: dev build clean ui server run

# Development
dev:
	cd ui && pnpm dev

# Build frontend
ui:
	cd ui && pnpm build

# Build Go server
server: ui
	go build -o build/sbkashif ./cmd/main.go

# Build everything
build: server

# Run production server (static files are embedded in the binary)
run: build
	PORT=8080 ./build/sbkashif

# Clean build artifacts
clean:
	rm -rf build/sbkashif static/*
