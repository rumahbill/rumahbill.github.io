# RumahBill

RumahBill helps landlords remind tenants about rent and bills on WhatsApp, and keep a record of who has paid. It is a student-led trial from Universiti Kuala Lumpur.

The live site is served by GitHub Pages from this repository.

## How it works

- Everything is in `index.html`: the page, the styles and the scripts. There is no build step.
- Anyone can open the app with the "Open RumahBill" button. There is no sign-up or key.
- Tenants, payments and reminders are saved in the browser on that phone only. Nothing is sent to a server. Landlords can save a backup file under "Backup and restore".
- Messages open in the landlord's own WhatsApp. Nothing is sent from the page.
- The page works in English and Bahasa Malaysia. Malay text lives in the `RB.D` dictionaries near the end of `index.html`.
- `manifest.webmanifest`, `sw.js` and the icons let it be installed as an app and work offline.

## Settings you may want to change

- **WhatsApp contact:** `CONTACT` near the top of the main script in `index.html`, and the link in the "Who's behind RumahBill" section. The "Want help getting set up?" form opens WhatsApp to this number.

## Updating the site

1. Edit `index.html` (or the other files).
2. Change `VERSION` in `sw.js` (for example `rb-v4` to `rb-v5`), so installed apps pick up the new version.
3. Commit and push. The new version shows after the app is opened twice.

Deployment and phone-install notes in Bahasa Malaysia are in `README-DEPLOY.txt`.

---

## Ringkasan (BM)

RumahBill membantu tuan rumah mengingatkan penyewa tentang sewa dan bil di WhatsApp, dan menyimpan rekod siapa yang sudah bayar. Semua kod ada dalam `index.html`. Data disimpan pada telefon itu sahaja. Selepas menukar `index.html`, tukar `VERSION` dalam `sw.js` supaya app yang sudah dipasang mendapat versi baru. Panduan penuh untuk letak online dan pasang pada telefon ada dalam `README-DEPLOY.txt`.
