# 📸 Project Images — HOW TO ADD PHOTOS

## Folder Structure
```
images/
  roads/          ← Photos of road projects
  buildings/      ← Photos of building projects
  team/           ← Team member headshots
```

## How to Add a New Project Photo

1. **Name your image** clearly, e.g. `mombasa-port-road.jpg`
2. **Place it** in the correct folder (`roads/` or `buildings/`)
3. **Open** `data/projects.json`
4. **Set the `"image"` field** in the matching project entry:
   ```json
   "image": "images/roads/mombasa-port-road.jpg"
   ```
5. **Commit and push** to GitHub — the website updates automatically!

## Recommended Image Specifications
- **Format:** JPG or WebP (preferred for smaller file size)
- **Size:** 1200 × 800 pixels minimum
- **File size:** Under 500KB per image (use https://squoosh.app to compress)
- **Orientation:** Landscape (horizontal)

## If No Image Is Available
Leave the `"image"` field as an empty string `""` or remove it. 
The website will show a placeholder emoji automatically.

## Tips
- Take photos during construction AND after completion
- Show wide shots of the full structure
- Include a sign or nameplate in at least one photo per project
- Drone shots work great for roads!
