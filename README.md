# Portfolio Draft

Standalone static portfolio for Krishna Reddy Syamala. This lives in its own
folder so you can move it into a separate repo later without touching the
existing application code.

## Files

- `index.html` - structure
- `styles.css` - design and responsive layout
- `app.js` - editable content and rendered cards

## Why this shape

This site is intentionally not a resume clone. It focuses on:

- projects and what they demonstrate
- why those projects exist
- AI and prompt-engineering workflow thinking
- product and systems signals visible from the work

## Quick edits

Most of the text you will want to update later is in `app.js`:

- `profile`
- `projects`
- `signals`
- `approach`
- `footprint`

## Local preview

Because this is a static site, you can preview it by opening `index.html`
directly in a browser.

## Free hosting options

### GitHub Pages

Best if you want this under a GitHub repo quickly.

1. Create a new repo, for example `portfolio`.
2. Copy the contents of this folder into that repo root.
3. Push to GitHub.
4. In `Settings -> Pages`, deploy from the `main` branch and the root folder.

### Cloudflare Pages

Good if you want a nicer deployment UI and custom domain controls later.

1. Create a new GitHub repo with these files.
2. Connect it to Cloudflare Pages.
3. Use the repo root as the output since there is no build step.

### Netlify

Very easy for static sites.

1. Create a new repo with these files.
2. Import the repo into Netlify.
3. Leave build command empty.
4. Set publish directory to `/`.

### Vercel

Also works fine for static content.

1. Create a new repo with these files.
2. Import to Vercel.
3. No framework preset is required.
4. Use the root directory as the output.

## Suggested next steps

- replace the GitHub avatar if you want a personal photo
- add live demo links for any private project you later make public
- customize the copy in `projects` so it sounds exactly like you
