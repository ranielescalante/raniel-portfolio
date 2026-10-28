# Update your existing portfolio on GitHub and Render (step by step)

Use this guide if your current portfolio is already live at `https://raniel-portfolio.onrender.com/` and your GitHub repository is `https://github.com/ranielescalante/raniel-portfolio`.

**Do not create another GitHub repository or Render site.**

## Part 1: Update GitHub

1. Download `Raniel_Portfolio_Modern_RFE.zip` and double-click it in Finder to unzip.
2. Open the extracted `Raniel_Portfolio_Modern_RFE` folder.
3. Open https://github.com/ranielescalante/raniel-portfolio in your browser.
4. Click the small `+` next to **Go to file**, then choose **Upload files** (or **Add file → Upload files** if your GitHub layout differs).
5. From the extracted folder, drag **`index.html` and the entire `assets` folder** to GitHub's upload box. **Do not upload the outer folder or ZIP.**
6. Check the upload list: it should include `index.html`, `assets/styles.css`, `assets/main.js`, `assets/favicon.svg`, `assets/Raniel_Escalante_Resume.pdf`. The existing files with those names are intentionally updated.
7. Leave **Commit directly to main branch** selected, then click **Commit changes**.

## Part 2: Publish on Render

8. Open https://dashboard.render.com/ and choose the existing **raniel-portfolio** static site.
9. Go to **Deploys**.
10. Select **Manual Deploy → Deploy latest commit**. The site's initial setup used a public repository URL, so manual deployment is the reliable update step.
11. When the status becomes **Live**, open https://raniel-portfolio.onrender.com/.
12. If it still looks old, force-refresh your browser: **Command + Shift + R** on Mac Chrome.

## Part 3: Test

13. Check the hero layout and responsive navigation.
14. Under the featured QA project, find the new **RFE Chrome Tools** section. Click **Explore the RFE Tools site** — it should open `https://rfe-tools-website.onrender.com/index.html` in a new tab.
15. Click **Download résumé (PDF)** and check the file opens correctly.
16. Check email link opens a new message and GitHub link opens your profile.

If the Render build fails, check the original static-site configuration:
- **Root Directory**: blank
- **Build Command**: `mkdir -p dist && cp index.html dist/ && cp -R assets dist/`
- **Publish Directory**: `dist`

If only some styles or downloads are missing, ensure the `assets` directory was uploaded at repository top-level (next to `index.html`).
