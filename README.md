# 🎂 Birthday Surprise

A small static website (no installs, no build step). Everything you edit lives in **`config.js`** and the **`images/`** folder.

## 1. Where to put it on your computer
Unzip this folder anywhere you like, e.g.
- Windows: `C:\Users\<you>\Documents\birthday-surprise`
- Mac/Linux: `~/Documents/birthday-surprise`

## 2. Change images & messages
1. Copy her photos into the `images/` folder (name them `1.jpg … 6.jpg`, or any names you like).
2. Optional: put a song in `music/` named `birthday.mp3`.
3. Open `config.js` in any editor (Notepad / VS Code) and change the name, message, captions and photo file names.

## 3. Preview locally
Easiest: double-click `index.html`.
Or, from inside the folder (needs Python): `python -m http.server 8000` → open http://localhost:8000
(Music autoplay needs the click on "Play Music", which the flow already has.)

## 4. Put it on GitHub (free hosting with GitHub Pages)
1. Create a free account at https://github.com and click **New repository** → name it `birthday` → **Public** → Create (don't add a README).
2. Install Git (https://git-scm.com/downloads), then open a terminal **inside your folder** and run:
```
git init
git add .
git commit -m "birthday surprise"
git branch -M main
git remote add origin https://github.com/<your-username>/birthday.git
git push -u origin main
```
3. On GitHub: repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → Save.
4. Wait ~1 minute. Your link will be `https://<your-username>.github.io/birthday/` → send her that. 💌

## 5. Updating later
Edit files, then in the terminal: `git add . && git commit -m "update" && git push` — the site refreshes in a minute.

> Tip: a public repo means anyone with the link can see the photos. For privacy, don't use real surnames/addresses in the text.
