# Degree College of Physical Education — Mahesana

Static, responsive college website.

## Files
- `index.html` — website structure/content
- `css/style.css` — complete styling and responsive layout
- `js/script.js` — mobile navigation
- `assets/college-logo.jpeg` — supplied college logo

## College photos
The four college photos are in `assets/gallery/` (`college-1.jpg` ... `college-4.jpg`).
The gallery adapts automatically: 4 columns on desktop, 2 on tablet, 1 on phones; every photo is cropped to a uniform
4:3 frame without stretching, and clicking a photo opens the full image in a viewer.
To replace a photo, save a new one with the same name. Edit captions in `index.html` (`<figcaption>`).

## Staff photos
No individual staff photographs were supplied, so the Photo column currently shows initials placeholders. Replace each placeholder with the appropriate staff photo when available.

## Hosting
Upload the complete folder to GitHub and enable GitHub Pages. The site is static and does not require a server or database.

## Courses Offered
Edit the course, eligibility and admission text in the `#courses` section of `index.html`.

## Event photos
Copy event photos into `assets/gallery/` named `1.jpg` ... `41.jpg`. They appear automatically in the Event Photos section
(responsive grid, click to enlarge, arrow keys / buttons to move between photos). Missing numbers are skipped.

## Location map
The map is in the `#location` block at the bottom of the Contact section. For an exact pin, open your Google Maps link,
choose Share > Embed a map, copy the iframe `src` value and paste it over the existing `src` in `index.html`.
