# seanjungbluth.me

Source code for [seanjungbluth.me](https://seanjungbluth.me). [seanj.me](https://seanj.me) redirects here.

Vite + React + TypeScript + Tailwind. Routes: `/` (home), `/cv`.

## Develop

```sh
npm install
npm run dev       # http://localhost:3000
npm run build     # type-check + Vite build → dist/
npm run preview   # serve dist/ locally
```

## Deploy

Deployed from AWS S3 + CloudFront (bucket `seanjungbluth.me`, distribution `E2HFE46FCTXR`).

```sh
npm run deploy
```

This runs `npm run build`, `aws s3 sync dist/ s3://seanjungbluth.me --delete`, then a `/*` CloudFront invalidation. Requires `aws` CLI configured with credentials that can write to the bucket and create invalidations on the distribution.

### CloudFront SPA fallback (one-time setup)

The site uses client-side routing, so `/cv` is not a real S3 object. Without a fallback, a refresh or direct visit to `https://seanjungbluth.me/cv` returns 404.

In the CloudFront distribution, add **Custom Error Responses** for both `403` and `404`:

- Response page path: `/index.html`
- HTTP response code: `200`

(Alternative: a CloudFront Function on viewer-request that rewrites missing-object paths to `/index.html` — slightly cleaner but more setup.)
