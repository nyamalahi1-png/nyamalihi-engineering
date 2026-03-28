# 🏗️ Nyamalihi Engineering Ltd — Website

Official website for **Nyamalihi Engineering Ltd**, NCA-registered civil engineers based in Nairobi, Kenya.

**Live Site:** `https://[your-github-username].github.io/nyamalihi-engineering/`

---

## 📋 Table of Contents
- [How to Add a New Project](#-how-to-add-a-new-project-most-important)
- [How to Add a Photo](#-how-to-add-a-photo)
- [Update Company Info](#-update-company-info--stats)
- [File Structure](#-file-structure)
- [Initial GitHub Setup](#-initial-github-setup)
- [Troubleshooting](#-troubleshooting)

---

## 🆕 How to Add a New Project (Most Important)

This is the **only file you need to edit** to add projects: `data/projects.json`

### Step 1 — Open projects.json
Navigate to `data/projects.json` in your GitHub repository and click the **pencil (edit) icon**.

### Step 2 — Find the `"projects"` array and add your entry

Copy this template and fill in your details:

```json
{
  "id": "road-005",
  "category": "roads",
  "title": "Eldoret Bypass Road",
  "location": "Eldoret, Uasin Gishu County",
  "year": 2024,
  "description": "Construction of 22km bypass road to reduce congestion in Eldoret town centre.",
  "specs": "22km | Bitumen Surface | New Construction",
  "image": "images/roads/eldoret-bypass.jpg",
  "image_placeholder": "🛣️",
  "featured": true,
  "status": "Completed"
}
```

> **For buildings**, use `"category": "buildings"` and `"image_placeholder": "🏗️"`

### Step 3 — Commit your changes
Scroll down, write a commit message like `Add Eldoret Bypass project`, and click **Commit changes**.

**The website updates automatically in 2–3 minutes. ✅**

---

## 📸 How to Add a Photo

1. **Compress your photo** at https://squoosh.app (target: under 500KB, 1200×800px)
2. **Name it clearly**: `eldoret-bypass.jpg`
3. In GitHub, navigate to `images/roads/` (or `images/buildings/`)
4. Click **Add file → Upload files**
5. Drag your photo and click **Commit changes**
6. In `data/projects.json`, set the `"image"` field: `"image": "images/roads/eldoret-bypass.jpg"`
7. Commit. Website updates automatically ✅

> If no photo is available yet, set `"image": ""` — a placeholder emoji shows instead.

---

## 📊 Update Company Info & Stats

Open `data/projects.json`, find the `"company"` section at the top:

```json
"company": {
  "stats": {
    "projects_completed": 120,    ← Update this number
    "km_roads_built": 450,        ← Update this number
    "buildings_constructed": 85,  ← Update this number
    "years_experience": 14        ← Updates automatically with time
  },
  "phone": "+254 700 000 000",    ← Update your phone
  "email": "info@nyamalihi-engineering.co.ke"
}
```

---

## 📁 File Structure

```
nyamalihi-engineering/
│
├── index.html                  ← Main homepage
├── pages/
│   ├── projects.html           ← Full projects portfolio page
│   ├── services.html           ← Services page
│   ├── about.html              ← About the company
│   └── contact.html            ← Contact page
│
├── data/
│   └── projects.json           ⭐ THE KEY FILE — edit this to update content
│
├── images/
│   ├── roads/                  ← Put road project photos here
│   ├── buildings/              ← Put building project photos here
│   ├── team/                   ← Put team member photos here
│   └── HOW-TO-ADD-PHOTOS.md   ← Photo guide
│
├── css/
│   └── styles.css              ← Website styling (rarely needs editing)
│
├── js/
│   └── main.js                 ← Loads data/projects.json dynamically
│
└── .github/
    └── workflows/
        └── deploy.yml          ← Auto-deploys to GitHub Pages on every push
```

---

## 🚀 Initial GitHub Setup

### Step 1 — Create a GitHub Account
Go to https://github.com and sign up (free).

### Step 2 — Create the Repository
1. Click **New repository** (green button)
2. Name it: `nyamalihi-engineering`
3. Set to **Public** ← IMPORTANT for free GitHub Pages
4. Click **Create repository**

### Step 3 — Upload the Website Files
1. On the repository page, click **Add file → Upload files**
2. Drag the entire unzipped `nyamalihi-engineering` folder
3. Write commit message: `Initial website upload`
4. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to **Settings** tab of the repository
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. The workflow will run automatically and your site will be live!

### Step 5 — Find Your URL
Your site URL will be:
`https://[your-github-username].github.io/nyamalihi-engineering/`

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Site shows "404 Not Found" | Make sure `index.html` is in the root folder, not inside a subfolder |
| Photos not showing | Check the file path in `projects.json` matches exactly (case-sensitive!) |
| Changes not appearing | Wait 3–5 minutes after committing; check Actions tab for errors |
| Projects not loading | Make sure `data/projects.json` has valid JSON (use https://jsonlint.com to check) |
| Mobile menu not working | Hard-refresh the page (Ctrl+Shift+R) |

### Validate your JSON
Before committing `projects.json`, paste its contents at https://jsonlint.com to check for errors.

---

## 👷 Who Maintains This Site?

Any team member with GitHub access can update the site by editing `data/projects.json` and uploading photos. No coding knowledge required for routine updates.

For design changes to the website layout, contact the web developer.

---

*Nyamalihi Engineering Ltd · Upperhill, Nairobi · info@nyamalihi-engineering.co.ke*
