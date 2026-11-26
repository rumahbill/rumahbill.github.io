RUMAHBILL SEBAGAI APP (PWA) - cara letak online

Folder ini ialah website penuh + tetapan app (manifest, service worker, icon).
Ia mesti diletak di alamat HTTPS sendiri supaya boleh "Add to Home Screen" / "Install".

CARA PALING MUDAH (2 minit, percuma): Netlify Drop
1. Pergi https://app.netlify.com/drop
2. Seret SELURUH folder ini (bukan zip) ke halaman tu.
3. Dapat link seperti https://nama-random.netlify.app  -> itu link untuk landlord.
   (Boleh tukar nama dalam Site settings > Change site name.)

ALTERNATIF: GitHub Pages / Cloudflare Pages / Vercel - upload semua fail di root folder.

INSTALL PADA TELEFON
iPhone (mesti Safari):  Share  >  Add to Home Screen  >  Add
Android (Chrome):       butang "Install app" atau menu (3 titik) > Install app / Add to Home screen

PENTING UNTUK LANDLORD
- Pasang app DAHULU, kemudian buka RumahBill dari skrin utama dan mula guna di situ.
  (Pada iPhone, data dalam Safari dan data dalam app di skrin utama adalah berasingan.)
- Data (penyewa, bayaran) disimpan pada telefon itu sahaja. Guna "Backup and restore" bila tukar telefon.

KEMASKINI SITE
- Ganti index.html, kemudian tukar VERSION dalam sw.js (cth rb-v2) dan upload semula.
- App akan tunjuk versi baru selepas dibuka dua kali.
