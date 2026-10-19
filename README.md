# Faniel Yemane — Portfolio

Personal engineering and software portfolio hosted at [fyemane.github.io](https://fyemane.github.io).

The homepage highlights robotics perception, embedded vision, FPGA design, C++ applications, machine-learning coursework, and Python projects. Team projects are identified separately, with Faniel's GUI, ML, and detection contributions credited for ARMI Bot.

## Files

- `about.html`: background, interests, and the Winterfest caricature.
- `portfolio.js`: progressive enhancements and accessible image previews.
- `cpp-games.png`, `python-games.png`, `tensorflow.png`, `armi-markers.png`: original project screenshots.
- `faniel-caricature.jpg`: scanned Winterfest drawing, with artist signature retained.


- `index.html`: accessible, responsive homepage and project links.
- `portfolio.css`: layout, colours, typography, and responsive styles.
- `armi-perception.png`: program screenshot showing object selection and depth sensing.
- `colour-ball-sorter.jpeg`: Raspberry Pi sorting mechanism photograph.
- `_config.yml`: GitHub Pages metadata retained alongside the static homepage.

The site uses static HTML, CSS, and vanilla JavaScript with no build step or package dependencies. JavaScript adds project filtering, image previews, scroll reveals, and a reading-progress indicator. Motion respects the visitor's reduced-motion preference. Project content and links remain available without JavaScript. Google Fonts is optional; system fonts provide fallbacks.

## Local preview

From this folder, run `python -m http.server 8765`, then open `http://localhost:8765`.

## Updating projects

Edit the project cards in `index.html` and keep team contributions, source links, and project status accurate. Images should have descriptive alternative text. Layout changes can be made in `portfolio.css`.


The landing page is About Me (`index.html`). The project gallery is in `projects.html`; `about.html` preserves the earlier About URL. Credential cards link to public issuer verification pages or clearly labelled LinkedIn supporting documents.
