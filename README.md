# PGConfig Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/60fc8549-1b40-4bbd-98b7-1a3586477dc8/deploy-status)](https://app.netlify.com/sites/pgconfig-docs/deploys)

## Prerequisites

Install dependencies using [mise](https://mise.jdx.dev/):

```bash
mise install
```

## Local development

```bash
npm run dev
```

## Build

```bash
npm run build
```

Output is generated in `src/.vitepress/dist`.

## Docker

Build and run the docs container on port 80:

```bash
docker build -t pgconfig-docs .
docker run -p 80:80 pgconfig-docs
```
