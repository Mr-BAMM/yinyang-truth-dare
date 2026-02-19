# Truth or Dare - Yin Yang Edition

Eine elegante, mobile-optimierte Web-App für das klassische Partyspiel "Wahrheit oder Pflicht" mit Yin-Yang Design und NFC-Chip-Integration.

## Features

- 🎮 **Zwei separate Seiten**: Truth (Wahrheit) und Dare (Pflicht)
- 🎨 **Komplementäres Design**: Hell für Truth, Dunkel für Dare
- 🐉 **Chinesische Drachen-Dekoration**: Elegante Illustrationen mit transparentem Hintergrund
- 📱 **Vollständig Mobile-Optimiert**: Perfekt für Smartphones und Tablets
- 🔧 **Einfache Verwaltung**: Aufgaben über JSON-Dateien bearbeitbar
- 🌐 **GitHub Pages Ready**: Sofort als statische Website hostbar

## Installation & Setup

### 1. Repository klonen oder forken

```bash
git clone https://github.com/dein-username/yinyang-truth-dare.git
cd yinyang-truth-dare
```

### 2. Abhängigkeiten installieren

```bash
pnpm install
```

### 3. Lokal testen

```bash
pnpm run dev
```

Die App läuft dann unter `http://localhost:5173`

### 4. Für GitHub Pages bauen

```bash
pnpm run build
```

Dies erstellt einen `dist/` Ordner mit der produktiven Version.

## Aufgaben anpassen

Die Aufgaben sind in zwei separaten JSON-Dateien gespeichert:

### `client/public/wahrheit.json` - Truth Fragen

```json
[
  { "id": 1, "text": "Was ist deine größte Angst?" },
  { "id": 2, "text": "Hast du jemals gelogen, um jemanden zu schützen?" },
  ...
]
```

### `client/public/pflicht.json` - Dare Challenges

```json
[
  { "id": 1, "text": "Singe eine Strophe deines Lieblingssongs" },
  { "id": 2, "text": "Mache 10 Liegestütze" },
  ...
]
```

**Hinweis**: Die `id` muss eindeutig sein und wird für die Anzeige verwendet. Die Anzahl der Einträge ist unbegrenzt.

## GitHub Pages Hosting

### Option 1: Automatisches Deployment mit GitHub Actions

1. **Repository auf GitHub erstellen** (wenn noch nicht geschehen)
2. **GitHub Actions aktivieren**:
   - Gehe zu deinem Repository → Settings → Pages
   - Wähle "GitHub Actions" als Source
3. **Datei `.github/workflows/deploy.yml` erstellen**:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. **Commit und Push**:
```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

5. **Fertig!** Deine App ist jetzt unter `https://dein-username.github.io/yinyang-truth-dare` erreichbar

### Option 2: Manuelles Deployment

1. **Build erstellen**:
```bash
pnpm run build
```

2. **`dist/` Ordner auf GitHub Pages deployen**:
   - Gehe zu Settings → Pages
   - Wähle "Deploy from a branch"
   - Wähle `main` Branch und `/root` Ordner

3. **Oder nutze `gh-pages` Package**:
```bash
npm install --save-dev gh-pages
```

Dann in `package.json` hinzufügen:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

Und ausführen:
```bash
pnpm run build
pnpm run deploy
```

## NFC-Chip Integration

### URLs für NFC-Chips

- **White Chip (Truth)**: `https://dein-username.github.io/yinyang-truth-dare/truth`
- **Black Chip (Dare)**: `https://dein-username.github.io/yinyang-truth-dare/dare`

### NFC-Chip programmieren

1. **NFC-Writer App** (z.B. "NFC Tools" oder "TagWriter") auf dein Smartphone laden
2. **NFC-Chip scannen** und "Write" wählen
3. **URL eingeben** und speichern
4. **Fertig!** Der Chip leitet jetzt zur entsprechenden Seite weiter

## Struktur

```
yinyang-truth-dare/
├── client/
│   ├── public/
│   │   ├── wahrheit.json      ← Truth Fragen bearbeiten
│   │   ├── pflicht.json       ← Dare Challenges bearbeiten
│   │   └── index.html
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Truth.tsx
│   │   │   └── Dare.tsx
│   │   ├── App.tsx
│   │   └── index.css
│   └── index.html
├── package.json
└── README.md
```

## Anpassungen

### Farben ändern

Bearbeite `client/src/index.css` und ändere die CSS-Variablen:

```css
:root {
  --primary: oklch(0.623 0.214 259.815);
  /* weitere Farben... */
}
```

### Hintergrundbilder ändern

In `client/src/pages/Truth.tsx` und `Dare.tsx` die `backgroundImage` URLs ersetzen.

### Fonts ändern

In `client/index.html` Google Fonts hinzufügen:

```html
<link href="https://fonts.googleapis.com/css2?family=DeinFont:wght@400;700&display=swap" rel="stylesheet">
```

Dann in `client/src/index.css`:

```css
body {
  font-family: 'DeinFont', sans-serif;
}
```

## Troubleshooting

### App lädt nicht auf GitHub Pages

- Stelle sicher, dass der Build erfolgreich war: `pnpm run build`
- Überprüfe, dass der `dist/` Ordner hochgeladen wurde
- Warte 1-2 Minuten, bis GitHub Pages aktualisiert wurde

### JSON-Dateien werden nicht geladen

- Stelle sicher, dass die Dateien in `client/public/` sind
- Überprüfe die Dateinamen: `wahrheit.json` und `pflicht.json` (Kleinschreibung!)
- Browser-Konsole öffnen (F12) und auf Fehler prüfen

### NFC-Chip funktioniert nicht

- Stelle sicher, dass die URL korrekt ist
- Teste die URL manuell im Browser
- Verwende eine NFC-Writer App, die URLs unterstützt

## Lizenz

MIT - Frei nutzbar und anpassbar

## Support

Bei Fragen oder Problemen:
1. Überprüfe die Konsole (F12 → Console)
2. Stelle sicher, dass alle Dateien vorhanden sind
3. Teste lokal mit `pnpm run dev`

---

**Viel Spaß beim Spielen! 🎉**
