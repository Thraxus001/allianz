# Allianz Utilities — Website

React + TypeScript + Tailwind CSS v4 rebuild of the Allianz Utilities (EA) Ltd
brochure site. Fully static front-end — no backend/server required.

## Structure

- `Home` — hero carousel (dynamic heading/copy per slide), "Welcome to Allianz",
  mission/about, technology grid, stats, CTA.
- `What We Do` — process steps + support pillars.
- `Products & Services` — index grid + dynamic detail route
  `/products-and-services/:slug` for all 6 solutions (waste water treatment
  plant, reverse osmosis, ultrafiltration, effluent treatment plant, package
  MBBR, package waste water treatment). Edit `src/data/content.ts` to change
  copy/specs — pages update automatically.
- `Careers` — open roles, each "Apply" button opens the visitor's email app
  pre-filled (no server, no database).
- `Contact` — form + embedded map + office list. "Send Message" builds a
  `mailto:` link from the form fields and opens the visitor's default email
  client — nothing is transmitted or stored by this site.

## Signature design elements

- **Contour/waterline divider** (`ContourDivider.tsx`) — an animated
  topographic line used between sections, echoing plant elevation drawings.
- **Loading screen** — two overlapping blue/green spheres bobbing quickly,
  shown for ~1.4s on first load (`LoadingScreen.tsx`).
- Palette: deep water teal, engineered green/blue, foam off-white, leaf-green
  accent — see CSS variables in `src/index.css`.
- Type: "Big Shoulders Display" (condensed, industrial) for headings,
  "IBM Plex Sans" for body copy, "IBM Plex Mono" for specs/labels.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Notes

- Hero/product images are placeholder stock photography from Unsplash —
  swap the URLs in `src/data/content.ts` for real plant/site photography.
- The contact form's map is a plain Google Maps embed (no API key required);
  replace the query in `Contact.tsx` with your exact office address/coords.
- Fully responsive from mobile (375px) up, with a mobile nav drawer and a
  dropdown-style Products & Services submenu on both mobile and desktop.
