# ANGELICA&ERJON

Sito React + TypeScript + Vite per una storia d'amore con libro digitale interattivo, animazioni 3D, sezioni narrative e deploy pronto per GitHub Pages.

## Installazione

```bash
npm install
```

## Sviluppo locale

```bash
npm run dev
```

## Build produzione

```bash
npm run build
```

Il build finale viene creato in `dist/`.

## Dove modificare la storia

Le pagine del libro sono in:

```text
src/data/storyPages.ts
```

Ogni pagina usa questa struttura:

```ts
{
  title: "Titolo pagina",
  date: "Data opzionale",
  text: "Testo della pagina",
  highlight: "Frase evidenziata opzionale"
}
```

Nello stesso file puoi modificare anche:

- `timelineMoments` per la sezione "I nostri momenti"
- `loveReasons` per la sezione "Perché sei speciale"
- `futureCards` per la sezione "Il nostro futuro"

## Dove cambiare colori e stile

La palette e tutto lo stile sono in:

```text
src/styles/global.css
```

I colori principali sono definiti in `:root`, quindi puoi cambiarli da un unico punto.

Palette principale attuale:

- nero: `#0D0D0D`
- verde scuro: `#123C2F`
- verde salvia: `#8FAF8F`
- bianco: `#FFFFFF`
- rosa antico: `#C08088`
- rosso: `#9E1F36`

## Dove aggiungere immagini

Metti nuove immagini in:

```text
src/assets/
```

Poi importale nei componenti React, per esempio:

```ts
import nuovaFoto from "../assets/nuova-foto.jpg";
```

La timeline contiene già spazi foto sostituibili nelle card.

## Logo

Il logo fornito è stato ritagliato e integrato in:

- `src/assets/brand-logo-dark.png` per la hero
- `src/assets/brand-mark-dark.png` per navbar e copertina del libro
- `public/favicon.png` per la favicon

Le versioni senza suffisso `-dark` sono i ritagli base dal file originale.

## Personalizzare il libro

Il libro è diviso in tre componenti:

- `src/components/Book/Book.tsx` gestisce stato, apertura, tastiera, touch e animazione.
- `src/components/Book/BookPage.tsx` disegna ogni pagina.
- `src/components/Book/BookControls.tsx` mostra frecce, indicatore e progresso.

Per aggiungere pagine basta aggiungere oggetti in `storyPages`.

## GitHub Pages

Il progetto è già configurato per GitHub Pages:

- `vite.config.ts` usa `base: "./"` per funzionare anche in repository come `username.github.io/nome-repo/`.
- `public/.nojekyll` evita problemi con asset statici.
- `.github/workflows/pages.yml` contiene il workflow GitHub Actions per pubblicare `dist/`.

Passaggi:

1. Crea un repository GitHub.
2. Carica questi file nel branch `main`.
3. In GitHub vai su `Settings > Pages`.
4. In `Build and deployment`, scegli `GitHub Actions`.
5. Fai push su `main` e attendi il workflow.

Il sito sarà raggiungibile all'URL GitHub Pages mostrato nella pagina `Settings > Pages`.

### Pubblicazione rapida con GitHub CLI

Se `gh` è autenticato:

```powershell
.\scripts\publish-github-pages.ps1
```

Lo script crea un repository pubblico chiamato `angelica-erjon`, fa push su `main`, abilita GitHub Pages con GitHub Actions e avvia il workflow.

Per usare un nome diverso:

```powershell
.\scripts\publish-github-pages.ps1 -RepoName "nome-repository"
```
