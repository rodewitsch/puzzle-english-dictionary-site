# Puzzle English Dictionary — Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

This is the official landing page for the **Puzzle English Dictionary** browser extension — an unofficial Chrome & Firefox extension that lets you quickly add words and phrases to your Puzzle English vocabulary without leaving the page you're browsing.

🌐 **Live site:** [pe-dictionary.rodevich.com](https://pe-dictionary.rodevich.com)

---

## ✨ About the Extension

The extension allows you to:

- **Add words via toolbar icon** — click the extension icon, type a word or phrase, and save it instantly.
- **Context menu** — highlight any word on a page, right-click, and choose "Add to Puzzle English".
- **Preview window** — see the translation, transcription, pronunciation, and alternative meanings before saving.
- **Choose a translation** — if a word has multiple meanings, pick the one you need.
- **Listen to pronunciation** — hear the word spoken at normal and slow speeds.
- **Bulk import** — add multiple words at once (one per line) with automatic translation.

> **Note:** This is an unofficial extension and is not affiliated with Puzzle English.

### 📦 Install

| Browser | Store |
|---------|-------|
| [Chrome](https://chromewebstore.google.com/detail/puzzle-english-dictionary/gjaleekpebchkichhnhjollkhhkhpcgp) | Chrome Web Store |
| [Firefox](https://addons.mozilla.org/en-CA/firefox/addon/puzzle-english-dict-unofficial/) | Firefox Add-ons |

---

## 🖥️ About This Repository

This repository contains the **landing page** website for the extension. It is a single-page static site built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools.

### Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, Flexbox, Grid, responsive design
- **Vanilla JS** — scroll effects, mobile navigation, browser detection
- **Google Fonts** — Inter typeface
- **GitHub Pages** — hosting

### Project Structure

```
├── CNAME                     # Custom domain for GitHub Pages
├── index.html                # Main landing page
├── styles.css                # All styles
├── script.js                 # JavaScript functionality
├── assets/
│   └── images/
│       └── icons/            # Extension icons (16px, 48px, 128px)
└── README.md
```

### Features of the Landing Page

- **Responsive design** — optimized for desktop and mobile
- **Browser detection** — automatically redirects install links to Chrome Web Store or Firefox Add-ons
- **Smooth scrolling** — navigation with scroll-based effects
- **Mobile hamburger menu** — collapsible navigation on small screens
- **Back-to-top button** — appears after scrolling down
- **SEO & Open Graph tags** — proper meta tags for social sharing
- **Google Search Console verification** — indexed on Google

---

## 🚀 Development

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/rodewitsch/puzzle-english-dictionary-site.git
   cd puzzle-english-dictionary-site
   ```

2. Open `index.html` in your browser (or use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for auto-reload).

No build steps required — just open and edit.

### Making Changes

- Edit `index.html` for content and structure
- Edit `styles.css` for styling
- Edit `script.js` for interactivity

---

## 📄 License

This project is open source under the [MIT License](LICENSE).
