# Kávégép Szerviz – Baja

Egyoldalas, React + Vite alapú weboldal egy bajai háztartási kávégép-szervizhez. Sima CSS-t használ (nincs Tailwind vagy PostCSS), backend nélkül.

## Technológia
React 18, Vite 5, JavaScript, sima CSS (`src/styles.css`). Egyetlen külső erőforrás a Google Fonts (Playfair Display, Inter).

## Fájlok
- `src/data.js` – telefonszám, cím, térkép link, menü, szolgáltatások és „miért mi” szövegek.
- `src/App.jsx` – az oldal szekciói (hero, szolgáltatások, miért mi, CTA, kapcsolat, lábléc).
- `src/components/` – `Header` (menü + mobilmenü), `Cards` (szolgáltatás- és előnykártya), `Icon` (SVG ikonok), `Illustration` (hero illusztráció).
- `src/styles.css` – a teljes megjelenés; a színek a `:root` változókban vannak.
- `index.html` – magyar cím, meta leírás, Open Graph adatok.

## Futtatás
```bash
npm install
npm run dev      # fejlesztői szerver
npm run build    # éles build a dist/ mappába
npm run preview  # a build helyi megnézése
```

## Telepítés
- **Netlify:** build parancs `npm run build`, publish directory: `dist`.
- **Vercel:** framework: Vite, build: `npm run build`, kimenet: `dist`.

## Szerkesztés
- Szövegek, telefonszám, cím: `src/data.js` (az „Üdvözlő” hero szöveg az `App.jsx`-ben van).
- Színek: `src/styles.css` → `:root`.
- Valódi fotó: tegyen fájlt a `public/` mappába, és az `App.jsx`-ben cserélje az `<Illustration />` elemet `<img src="/foto.jpg" alt="…" />`-re.

## Ellenőrzendő
Az oldalon csak a megadott adatok szerepelnek (név, cím, telefonszám, szlogenek). Nyitvatartás, árak, e-mail, referencia, garancia szándékosan nincs feltüntetve; ha szükséges, az üzemeltetőtől kérendő.
