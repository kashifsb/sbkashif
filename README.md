# sbkashif.com

Personal portfolio website for Shaik Baleeghuddin Kashif — Technology Specialist at D. E. Shaw India.

Built with a Go backend serving an embedded React frontend. The entire site compiles into a single self-contained binary.

## Tech Stack

**Frontend:** React 19, TypeScript, Tailwind CSS v4, Framer Motion, Vite

**Backend:** Go (net/http, embed)

**Icons:** Lucide React

## Project Structure

```
sbkashif/
├── cmd/main.go          # Go server entry point
├── static.go            # Embeds static/ into the binary
├── go.mod
├── Makefile
├── static/              # Vite build output (generated)
└── ui/                  # React frontend source
    ├── index.html
    ├── package.json
    ├── vite.config.ts
    └── src/
        ├── App.tsx
        ├── main.tsx
        ├── index.css
        ├── components/
        │   ├── Navbar.tsx
        │   ├── Hero.tsx
        │   ├── About.tsx
        │   ├── Experience.tsx
        │   ├── Education.tsx
        │   ├── Projects.tsx
        │   ├── Skills.tsx
        │   ├── Publications.tsx
        │   ├── Contact.tsx
        │   ├── Resume.tsx
        │   ├── NotFound.tsx
        │   └── Footer.tsx
        └── data/
            └── content.ts
```

## Prerequisites

- Go 1.22+
- Node.js 20+
- pnpm

## Development

Start the Vite dev server with hot reload:

```bash
make dev
```

This runs at `http://localhost:5173`.

## Build

Build the frontend and compile the Go binary:

```bash
make build
```

This will:
1. Build the React app into `static/`
2. Compile the Go server with all static files embedded into a single binary at `build/sbkashif`

## Run

Build and start the production server:

```bash
make run
```

Or run the binary directly:

```bash
PORT=8080 ./build/sbkashif
```

The server starts at `http://localhost:8080`.

## Routes

| Route | Description |
|---|---|
| `/` | Portfolio home page |
| `/resume` | PDF viewer for CV |
| `/resume/download` | CV file download |
| `/api/health` | Health check endpoint |
| `/assets/` | Blocked (403 Forbidden) |
| `/*` | 404 Not Found (SPA fallback) |

## Deployment

The output of `make build` is a single binary (`build/sbkashif`) with all static assets embedded. No external files needed at runtime.

```bash
# Build for Linux (typical server target)
GOOS=linux GOARCH=amd64 go build -o build/sbkashif ./cmd/main.go

# Run on server
PORT=8080 ./sbkashif
```

## Clean

Remove build artifacts:

```bash
make clean
```
