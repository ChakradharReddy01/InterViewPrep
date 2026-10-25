# Interview A-Z: Senior Engineering & Architecture Handbook

A static, responsive, in-depth knowledge base built for technical interview preparation, focusing on deep architectural mechanisms, production post-mortems, real-time war stories, and code walk-throughs.

## 🚀 GitHub Pages Deployment

This repository is built with pure static HTML, modern CSS, and lightweight vanilla JavaScript, with zero build steps or dependencies.

To enable GitHub Pages:
1. Go to your repository on GitHub: **Settings > Pages**.
2. Under **Build and deployment > Source**, select **Deploy from a branch**.
3. Choose the branch `main` and folder `/ (root)`.
4. Click **Save**. Your site will be live within seconds!

## 📁 Repository Structure

```text
InterViewA-Z/
├── index.html              # Main landing page & searchable topic directory
├── assets/
│   ├── css/
│   │   └── style.css       # Clean, modern responsive stylesheet (dark theme)
│   └── js/
│       └── main.js         # Interactive search, tag filter, dynamic TOC & copy buttons
├── topics/                 # Detailed topic pages grouped by domain
│   └── template.html       # Standard structure & template for new topics
└── README.md
```

## 📝 Format for Each Topic

Every topic page is crafted with:
1. **Under-the-Hood Mechanisms & Architectural Flow** (internals, concurrency, memory models)
2. **Production-Grade Configurations & Code Patterns**
3. **Real-Time Production Incidents & Post-Mortems** (Symptom, Root Cause Analysis, Resolution)
4. **L3/L4 Diagnostic & Triage Commands** (CLI tools, metrics, profiling)
5. **Senior/Staff Interview Questions & Trade-Offs**
