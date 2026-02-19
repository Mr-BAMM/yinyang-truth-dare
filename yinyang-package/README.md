# Yin-Yang Truth or Dare - Standalone Edition

Zwei eigenständige HTML-Dateien für das Partyspiel "Wahrheit oder Pflicht" mit eleganter Yin-Yang Ästhetik und chinesischen Drachen-Dekoration.

## 📦 Paketinhalt

```
├── wahrheit.html          ← Wahrheitsseite (Truth)
├── pflicht.html           ← Pflichtseite (Dare)
├── wahrheit.json          ← Wahrheitsfragen (bearbeitbar)
├── pflicht.json           ← Pflichtaufgaben (bearbeitbar)
├── dragon-light.png       ← Goldener Drachen für Wahrheit
├── dragon-dark.png        ← Dunkler Drachen für Pflicht
└── README.md              ← Diese Datei
```

## 🚀 Schnelleinstieg

### Option 1: Direkt öffnen
1. Entpacke die ZIP-Datei
2. Doppelklick auf `wahrheit.html` oder `pflicht.html`
3. Fertig! Die Seite öffnet sich im Browser

### Option 2: Auf einem Server hosten
1. Lade alle Dateien auf deinen Webserver
2. Öffne `https://dein-server.com/wahrheit.html` oder `https://dein-server.com/pflicht.html`

### Option 3: Mit NFC-Chips
1. Nutze eine NFC-Writer App (z.B. "NFC Tools" oder "TagWriter")
2. Programmiere die URLs in die Chips:
   - **Weißer Chip**: `wahrheit.html` oder `https://dein-server.com/wahrheit.html`
   - **Schwarzer Chip**: `pflicht.html` oder `https://dein-server.com/pflicht.html`
3. Scanne die Chips mit deinem Smartphone

## 📝 Aufgaben anpassen

### Wahrheitsfragen ändern
Öffne `wahrheit.json` mit einem Texteditor:

```json
[
  { "id": 1, "text": "Deine Frage hier?" },
  { "id": 2, "text": "Nächste Frage?" },
  ...
]
```

**Wichtig**: 
- `id` muss eindeutig sein (1, 2, 3, ...)
- `text` ist die Frage
- Kommas nicht vergessen!

### Pflichtaufgaben ändern
Öffne `pflicht.json` mit einem Texteditor und folge dem gleichen Schema.

## 🎨 Design anpassen

### Farben ändern
Öffne die HTML-Datei mit einem Texteditor und suche nach `<style>`:

**Für Wahrheit (wahrheit.html)**:
- `#8b6914` = Braun (Text)
- `#ffd700` = Gold (Akzente)
- `#f5e6d3` = Creme (Hintergrund)

**Für Pflicht (pflicht.html)**:
- `#b88fdb` = Lila (Text)
- `#7c3aed` = Dunkelviolett (Button)
- `#1a1a2e` = Dunkelblau (Hintergrund)

Ersetze die Hex-Codes mit deinen Lieblingsfarben.

### Drachen-Bilder ersetzen
1. Ersetze `dragon-light.png` mit deinem Bild für die Wahrheitsseite
2. Ersetze `dragon-dark.png` mit deinem Bild für die Pflichtseite
3. Die Bilder sollten transparent sein (PNG mit Alpha-Kanal)

## 🔧 Technische Details

### Dateistruktur
- **HTML**: Vollständig eigenständig, keine externen Abhängigkeiten
- **JSON**: Wird beim Laden der Seite asynchron geladen
- **Bilder**: PNG-Format mit Transparenz
- **Responsive**: Optimiert für Mobile, Tablet und Desktop

### Browser-Kompatibilität
- Chrome/Chromium ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile Browser ✅

### Lokale Datei-Einschränkung
Wenn du die HTML-Dateien lokal öffnest (mit `file://`), können die JSON-Dateien möglicherweise nicht geladen werden (CORS-Sicherheit). Nutze in diesem Fall einen lokalen Server:

```bash
# Python 3
python -m http.server 8000

# Node.js (mit http-server)
npx http-server

# Dann öffne: http://localhost:8000/wahrheit.html
```

## 📱 Mobile-Optimierung

Beide Seiten sind vollständig für Smartphones optimiert:
- Responsive Design
- Touch-freundliche Buttons
- Große, lesbare Schrift
- Optimierte Bilder

## 🎯 NFC-Chip Programmierung

### Schritt-für-Schritt:
1. **NFC-Writer App installieren**
   - Android: "NFC Tools" oder "TagWriter by NXP"
   - iOS: "TagWriter by NXP"

2. **App öffnen und "Write" wählen**

3. **URL eingeben**
   - Für lokale Datei: `file:///path/to/wahrheit.html`
   - Für Server: `https://dein-server.com/wahrheit.html`

4. **NFC-Chip scannen und speichern**

5. **Testen**: Chip mit Smartphone scannen

## ⚠️ Häufige Probleme

### JSON-Dateien werden nicht geladen
**Problem**: "Fehler beim Laden der Fragen"

**Lösung**:
- Stelle sicher, dass die JSON-Dateien im gleichen Ordner wie die HTML-Dateien sind
- Nutze einen lokalen Server (siehe oben)
- Überprüfe die Browser-Konsole (F12) auf Fehlermeldungen

### Bilder werden nicht angezeigt
**Problem**: Drachen-Bilder fehlen

**Lösung**:
- Stelle sicher, dass `dragon-light.png` und `dragon-dark.png` im gleichen Ordner sind
- Überprüfe die Dateinamen (Groß-/Kleinschreibung!)
- Nutze absolute URLs, wenn auf einem Server gehostet

### NFC-Chip funktioniert nicht
**Problem**: Chip wird nicht erkannt oder öffnet falsche Seite

**Lösung**:
- Stelle sicher, dass dein Smartphone NFC unterstützt
- Aktiviere NFC in den Einstellungen
- Nutze eine zuverlässige NFC-Writer App
- Teste die URL manuell im Browser

## 🎉 Viel Spaß!

Dieses Spiel ist perfekt für Partys, Team-Building oder einfach zum Spaß mit Freunden. Die Aufgaben sind leicht anpassbar, sodass du sie für verschiedene Gruppen und Anlässe personalisieren kannst.

---

**Version**: 1.0  
**Lizenz**: MIT - Frei nutzbar und anpassbar  
**Letztes Update**: Februar 2026
