# Cartier Service Auto — Business Website

**HTML | CSS | JavaScript | SEO | Netlify**

A fully responsive, production-deployed business website for Cartier Service Auto, an auto repair shop in Piatra Neamț, Romania. The site is live at [cartierserviceauto.ro](https://cartierserviceauto.ro) and serves as the primary digital presence of the business — handling service discovery, client education, and direct contact conversion.

---

## Live Site

[https://cartierserviceauto.ro](https://cartierserviceauto.ro)

Deployed via **Netlify** with a custom domain and continuous deployment from the main branch.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Pages](#pages)
- [Features](#features)
- [SEO & Structured Data](#seo--structured-data)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)

---

## Project Overview

This project was built end-to-end for a real client — from design and copywriting to deployment and SEO configuration. The goal was to create a site that ranks locally for automotive service queries, builds trust with new visitors, and converts them into bookings through clear calls to action.

The site targets Romanian-language users searching for auto repair services in the Piatra Neamț area and is structured to perform well in local Google search results.

---

## Pages

### Main Page (`index.html`)

A single-page application layout covering:

- **Hero section** with direct phone CTA and service overview
- **About section** with workshop photos and trust signals
- **Services section** with interactive modals for all 9 offered services
- **Reviews section** with a slider displaying real Google reviews
- **Resources / Blog section** linking to educational articles
- **FAQ section** addressing the most common client questions
- **Contact section** with phone, email, and embedded map
- **Business hours** with real-time open/closed status indicator

### Resource Articles

Three standalone SEO-optimized articles targeting high-intent local search queries:

| File | Topic | Target Query |
|---|---|---|
| `resursa-checklist-itp.html` | Pre-ITP inspection checklist | *"checklist ITP Piatra Neamț"* |
| `resursa-intretinere-ac.html` | Air conditioning maintenance guide | *"întreținere AC auto"* |
| `resursa-schimb-ulei-cutie-automata.html` | Automatic gearbox oil change guide | *"schimb ulei cutie automată"* |

Each article includes: proper heading hierarchy, internal linking back to the main page, a contextual CTA section, and canonical tags.

---

## Features

### UI & Interactivity
- Fully responsive layout (mobile, tablet, desktop) with a hamburger navigation menu
- Service detail modals triggered from the services section, populated dynamically from a JavaScript data object
- Reviews carousel / slider with touch support
- Smooth scroll navigation between sections
- Back-to-top button with scroll-triggered visibility
- Sticky header with scroll-aware styling
- Skip-to-content link for accessibility

### Business Logic
- Real-time open/closed status based on Romanian business hours (Monday–Friday, 08:00–18:00, with lunch break)
- Dynamic service descriptions loaded via JavaScript — no content duplication in HTML
- Scroll-triggered entrance animations for sections

---

## SEO & Structured Data

The site was built with local SEO as a core requirement, not an afterthought.

### On-Page SEO
- Unique `<title>` and `<meta name="description">` on every page
- Canonical tags on all pages to prevent duplicate content issues
- Semantic HTML5 structure with proper heading hierarchy (one `<h1>` per page)
- `alt` attributes on all images
- `loading="lazy"` on non-critical images
- `rel="preconnect"` and `dns-prefetch` for Google Fonts performance

### Local SEO
- Geographic meta tags (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) targeting Piatra Neamț
- `robots` meta set to `index, follow`
- Open Graph and Twitter Card tags for social sharing

### Schema Markup
Structured data implemented using `application/ld+json` with the `AutoRepair` schema type, including:
- Business name, address, phone number, and coordinates
- Opening hours specification
- Service catalog with all 9 offered services
- Area served
- Social profile links (`sameAs`)

This markup enables Google to surface the business directly in local search results and knowledge panels.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom, no framework) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Icons | Font Awesome 6 |
| Typography | Google Fonts — Montserrat |
| Deployment | Netlify |
| Domain | Custom domain via DNS configuration |

No frameworks, no build tools, no dependencies beyond CDN-hosted libraries. The entire site loads from static files, which contributes to fast load times and simple deployment.

---

## Project Structure

```
cartier-service-auto/
│
├── index.html                              # Main single-page site
├── resursa-checklist-itp.html              # Article: ITP checklist
├── resursa-intretinere-ac.html             # Article: AC maintenance
├── resursa-schimb-ulei-cutie-automata.html # Article: Gearbox oil change
│
├── style.css                               # All site styles
├── app.js                                  # All interactivity and dynamic content
│
├── logo.png                                # Main logo
├── iconita.png                             # Favicon
├── banner.jpg                              # Desktop hero banner (Ravenol partnership)
├── banner_mobil.jpg                        # Mobile hero banner
├── imagine2.png                            # Workshop interior photo
└── rec1.png                                # Review screenshot asset
```

---

*Built and deployed by Maria-Erika Pleșca*  
*Client: Cartier Service Auto, Piatra Neamț — [cartierserviceauto.ro](https://cartierserviceauto.ro)*
