# أسماء سعيد — تعليم السواقة للسيدات

Arabic, RTL, mobile-first single-page website built with React and Vite.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy `dist/` to any static hosting provider. No backend or environment variables are required.

Business information is transcribed from `photos/main_source.PNG`. The contact number is `01221092927`. Prices, locations and schedules are intentionally left for direct enquiry. The driving scene is an original SVG illustration, not a photo of the instructor or a claim about the training vehicle.

## Template and contact links

The React layout follows `Test.html`, which is preserved as the reference. Tailwind CSS and the Cairo Arabic font are bundled locally. WhatsApp buttons open a chat with `201221092927` and a prefilled Arabic enquiry for the visitor to send. Facebook remains available in its dedicated section and footer; telephone links retain direct calling. Customer ratings and testimonial cards are restored from the previously supplied template. The favicon and brand marks use a steering wheel.

## GitHub Pages

The Vite base path is `/asmaa-driving/` for https://gadm12.github.io/asmaa-driving/.
In the GitHub repository, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source.
Commit and push the deployment files to `main` when ready. The workflow builds the app and publishes `dist/`.
Do not publish the raw source from the root of `main`: browsers cannot run the unbuilt JSX entry point.
If the repository is renamed or a custom domain is added, update `base` in `vite.config.js` accordingly.
