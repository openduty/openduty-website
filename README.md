# OpenDuty website

Marketing site for OpenDuty, built with Next.js and Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Docker

```sh
docker build -t openduty-website .
docker run -p 3000:3000 openduty-website
```

Pushes to `main` build and publish the image to Harbor and GHCR via `.github/workflows/docker.yml`
(uses the org secrets `HARBOR_REGISTRY`, `HARBOR_USERNAME`, `HARBOR_PASSWORD`, `HARBOR_PROJECT`).
