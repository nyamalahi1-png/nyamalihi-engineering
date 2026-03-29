# 📸 How to Add New Projects & Photos

## EASIEST METHOD: Edit directly on GitHub

### Step 1 — Go to your repository on github.com
e.g. `https://github.com/nyamalahi1-png/nyamalihi-engineering`

### Step 2 — Open `index.html`
Click on the file name, then click the **✏️ pencil icon** (top right of the file view).

### Step 3 — Find the PROJECTS array
Press **Ctrl+F** and search for: `const PROJECTS = [`

You will see entries like this:
```javascript
{
  cat:'roads',                                          // 'roads', 'buildings', or 'paving'
  title:'Road Construction',
  loc:'Kenya', year:2024,
  desc:'Description of the project.',
  specs:'What was done | Materials used | Key feature',
  img:'images/your-photo.jpg',                          // path to your uploaded photo
  status:'Completed'                                    // 'Completed' or 'Ongoing'
},
```

### Step 4 — Add your new project entry

Copy the template above and add it at the TOP of the array (after the `[`). Fill in your details.

### Step 5 — Upload your photo
- Go back to the repo root
- Click **Add file → Upload files**
- Create/navigate into the `images/` folder
- Upload your photo (JPG recommended, under 500KB)
- Use squoosh.app to compress if needed

### Step 6 — Commit
Write a commit message like `Add Meru road project` and click **Commit changes**.

**✅ Website updates automatically in 2–3 minutes!**

---

## ALTERNATIVE: Embed photo directly in HTML (no image folder needed)

1. Go to https://base64.guru/converter/encode/image
2. Upload your photo → copy the "Data URI" output
3. Paste it as the `img:` value: `img:'data:image/jpeg;base64,/9j/4AA...'`

This method keeps everything in one file. Good for a few photos, but makes the file large.

---

## Update Stats (Number of Projects etc.)
Search for `data-target=` in index.html and change the numbers.

---

## Update Contact Info
Search for `254746368826` and `nyamalahi1@gmail.com` and change them.
