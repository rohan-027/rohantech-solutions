# RohanTech Solutions website

Plain HTML, CSS and JavaScript. No build step, no paid tools.

## Folder layout
- `index.html` - all page content (one page with sections)
- `style.css` - colours (top of file), fonts and layout
- `main.js` - mobile menu and the WhatsApp contact form
- `favicon.png`, `rohantech-logo.png` - logo files. Put any photos you add in the same place
- `robots.txt` - tells search engines they may index the site

## 1. Preview on your computer
1. Unzip the folder to your Desktop.
2. Double-click `index.html`. It opens in your browser.
   (Fonts need internet; without it the site uses Arial/Segoe UI.)
3. Optional: in VS Code, install the free "Live Server" extension, right-click `index.html`, choose "Open with Live Server".

## 2. Publish free on GitHub Pages
1. Create a free account at github.com.
2. Click **New repository**. Name it `rohantech` (or anything). Set it to **Public**. Create it.
3. Click **uploading an existing file**, drag in everything inside the unzipped folder (index.html, css, js, images, robots.txt), then **Commit changes**.
4. Open **Settings > Pages**. Under "Branch" choose `main` and `/ (root)`, then **Save**.
5. Wait 1-2 minutes. Your site appears at `https://YOURUSERNAME.github.io/rohantech/`.

Cloudflare Pages is an equally free alternative (pages.cloudflare.com > Create project > Upload assets).

## 3. Connect your own domain (if you own one)
1. In GitHub: **Settings > Pages > Custom domain**, enter e.g. `www.yourdomain.com`, Save.
2. At your domain registrar's DNS settings add a **CNAME** record: name `www`, value `YOURUSERNAME.github.io`.
3. Wait up to a few hours, then tick **Enforce HTTPS**.
The domain itself is paid (registrar's yearly fee, often Rs 500-1,000+). Hosting and HTTPS are free.

## 4. Updating the site later
- **Text, phone, email:** open `index.html` in any text editor and use Find (Ctrl+F). The phone number appears in several places (`917396345795` and `+91 73963 45795`) and also in `main.js`. Change all of them.
- **FAQ:** each question is one `<details>` block inside the FAQ section. Copy one to add another.
- **Services:** each service is one `<li>` inside `<ul class="svc-list">`. Copy one to add another.
- **Photos:** put images in the main folder, then follow the comment in the "Our work" section. Always fill in the `alt` text. Keep photos under about 300 KB (resize first).
- **Reviews:** replace the placeholder `<blockquote>` with a real review only with the customer's permission.
- **Colours:** change the values at the top of `style.css`.
- **Social links:** add them in the footer where the comment says EDIT.
- After editing, upload the changed files to GitHub again (Add file > Upload files > Commit). The site updates in a minute or two.

## Free plan limits
- GitHub Pages is static: no server code, so the contact form cannot email you. This site's form opens WhatsApp with the message ready instead. For a real email form later, a free service such as Formspree has a small monthly limit.
- Site size limit about 1 GB; soft traffic limit about 100 GB/month. Plenty for a business site.
- The GitHub Pages address contains your GitHub username unless you add a paid custom domain.
- Google Business Profile (free) is separate and the best way to appear on Google Maps for "computer repair Hyderabad".
