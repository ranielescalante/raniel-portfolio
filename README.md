# Raniel Escalante — Portfolio Website

A lightweight professional portfolio for **Raniel Escalante**, Digital QA Analyst / Creative QA / Advertising Technology.

Built with plain HTML, CSS, and JavaScript so it works without installing Node.js, a framework, or any paid service.

## What's included

- `index.html` — all site content. This is the homepage.
- `assets/styles.css` — colors, typography, cards, layout, and responsive design.
- `assets/main.js` — functional mobile navigation and automatic copyright year.
- `assets/favicon.svg` — original R. website icon.
- `DEPLOY-ON-RENDER.md` — easy GitHub-to-Render instructions.
- `.nojekyll` — allows straightforward GitHub Pages deployment.

## Preview the site on your Mac

Unzip the downloaded file. Double-click **`index.html`**. It will open in your browser.

No installation or terminal is required.

## Deployment

**Recommended:** Upload this folder's **contents** to a new GitHub repository and connect the repository to Render as a **Static Site**.

On Render, enter:

| Field | Value |
|---|---|
| Service type | Static Site |
| Branch | `main` |
| Root Directory | leave empty |
| Build Command | `mkdir -p dist && cp index.html dist/ && cp -R assets dist/` |
| Publish Directory | `dist` |

See **[DEPLOY-ON-RENDER.md](DEPLOY-ON-RENDER.md)** for detailed click-by-click instructions.

You can alternatively deploy the same repository using **GitHub Pages** with branch `main` and folder `/ (root)`.

## How to edit your portfolio

Use GitHub's website if you don't want to install an editor:

1. Open the repository on GitHub.
2. Click `index.html`, then the pencil **Edit this file** icon.
3. Search for the text you want to change, and edit only that text.
4. Click **Commit changes**.
5. Render will automatically redeploy from the connected branch (assuming auto-deploy is enabled).

**Common customizations**

- Edit your introduction in `index.html` near `<h1 id="hero-title">`.
- Edit the QA focus cards under the `id="work"` section.
- Update your work history under the `id="experience"` section.
- Update contact links by searching for `raniel.escalante@gmail.com` in `index.html`.
- Change colors under `:root` at the top of `assets/styles.css`.

## Important professional accuracy notes

This site is intentionally written to avoid unverified claims, invented numbers, fake case studies, or client screenshots. The project descriptions clearly label independent experiments as **in progress**, not fully production-ready products. All work-sample graphics are **original illustrative examples**.

Please review all employment dates, titles, training, and project descriptions before sharing with recruiters. If you haven't published a project's code, no individual project repository link is claimed.

No contact form or analytics software has been added, so there is no backend, tracking script, or data collection by the website itself. The email button opens the visitor's email application.

## Technical notes

- Responsive: desktop, tablet, and mobile.
- Keyboard navigable, with visible focus indicators and a skip link.
- Works without third-party CDN calls or external image assets.
- Relative asset paths also work on GitHub Pages project URLs.
- Does not require a start command or environment variables on Render.
