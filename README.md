# RumahBill

RumahBill helps landlords remind tenants about rent and bills on WhatsApp, and keep a record of who has paid. It is a student-led trial from Universiti Kuala Lumpur.

The live site is served by GitHub Pages from this repository.

## How it works

- Everything is in `index.html`: the page, the styles and the scripts. There is no build step.
- Landlords unlock the app with a trial key. Each key lasts 30 days from first use, and no key works after the end date in the `EXP` list in `index.html`.
- Tenants, payments and reminders are saved in the browser on that phone only. Nothing is sent to a server. Landlords can copy a backup under "Backup and restore".
- Messages open in the landlord's own WhatsApp. Nothing is sent from the page.
- The page works in English and Bahasa Malaysia. Malay text lives in the `RB.D` dictionaries near the end of `index.html`.
- `manifest.webmanifest`, `sw.js` and the icons let it be installed as an app and work offline.

## Settings you may want to change

- **Contact for trial requests:** `CONTACT` near the top of the main script in `index.html`. With a WhatsApp number set, the request form offers an "Open WhatsApp" button.
- **Trial end date:** the `EXP` list in `index.html`.

## Updating the site

1. Edit `index.html` (or the other files).
2. Change `VERSION` in `sw.js` (for example `rb-v4` to `rb-v5`), so installed apps pick up the new version.
3. Commit and push. The new version shows after the app is opened twice.

Deployment and phone-install notes in Bahasa Malaysia are in `README-DEPLOY.txt`.

---

## Ringkasan (BM)

RumahBill membantu tuan rumah mengingatkan penyewa tentang sewa dan bil di WhatsApp, dan menyimpan rekod siapa yang sudah bayar. Semua kod ada dalam `index.html`. Data disimpan pada telefon itu sahaja. Selepas menukar `index.html`, tukar `VERSION` dalam `sw.js` supaya app yang sudah dipasang mendapat versi baru. Panduan penuh untuk letak online dan pasang pada telefon ada dalam `README-DEPLOY.txt`.
