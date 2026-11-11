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

## Contact analytics

GoatCounter is loaded once in `index.html`, using `https://gadm12.goatcounter.com/count`.
All telephone and WhatsApp links send `call-click` or `whatsapp-click` events. View these in the GoatCounter dashboard alongside page views. `no_session: true` counts repeated clicks too.
These events measure link clicks, not completed calls or messages. No message text or phone number is added to the event payload.
Clicks made before the analytics script loads are queued until it is ready. Blocked analytics never prevents contacting the business.
GoatCounter skips localhost by default. For local testing only, set `window.goatcounter = { allow_local: true }` before the counter script loads; keep this out of production to avoid mixing test traffic into your statistics.
