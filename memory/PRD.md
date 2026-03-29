# Kali Dham Guest House — Project PRD

## Overview
Complete 7-page static HTML website for "Kali Dham Guest House", a family-owned guest house in Puri, Odisha, India, established in 1977.

## Architecture
- **Frontend**: 7 standalone static HTML pages in `/app/frontend/public/`
- **Shared Assets**: `/app/frontend/public/css/style.css` + `/app/frontend/public/js/main.js`
- **CDNs Used**: Bootstrap 5.3, Font Awesome 6, Google Fonts (Playfair Display + Inter), Swiper.js v11, Lightbox2, AOS.js
- **React Shell**: `src/index.js` is empty — no React bundle active; CRA serves static HTML as-is
- **Backend**: FastAPI (port 8001) — not used for website content

## Pages Implemented
| Page | File | Status |
|---|---|---|
| Homepage | /public/index.html | ✅ PASS |
| Rooms & Rates | /public/rooms.html | ✅ PASS |
| Amenities | /public/amenities.html | ✅ PASS |
| Photo Gallery | /public/gallery.html | ✅ PASS |
| About Us | /public/about.html | ✅ PASS |
| Booking | /public/booking.html | ✅ PASS |
| Contact | /public/contact.html | ✅ PASS |

## Core Requirements Implemented
- [x] Top bar (navy, 40px) with address, email, phone numbers on every page
- [x] Sticky navbar with logo, 6 nav links + gold "Book Now" CTA pill
- [x] Mobile hamburger menu (Bootstrap collapse)
- [x] Floating WhatsApp button (bottom-right, 60px, pulse animation) on ALL 7 pages
- [x] 3-column footer with logo, quick links, contact info + dynamic JS year
- [x] Hero Swiper slider (5 slides, fade, autoplay 5s) on homepage
- [x] Quick Booking Strip (navy background, form with date pickers + dropdowns)
- [x] Why Choose Us (4 icon cards with hover lift)
- [x] Featured Rooms (3 cards with hover lift, badges)
- [x] Amenities Strip (8 icons, 4-per-row)
- [x] About Snippet (2-col: image + text + stats)
- [x] Testimonials (3 gold-border cards with star ratings)
- [x] Location section (Google Maps + contact card with WhatsApp/Call buttons)
- [x] CTA Banner (navy gradient) on every page
- [x] Rooms page: 5 room type detail cards (AC, Non-AC Deluxe, Standard, Sea View, Side View)
- [x] 6-step booking stepper with icons
- [x] Amenities page: 12 icon cards + location distances table
- [x] Gallery page: 91 images (JS-generated) with Lightbox2 + 5 filter tabs
- [x] Gallery category assignments: 1-25 Rooms, 26-50 Sea View, 51-75 Facilities, 76-91 Puri
- [x] About page: Origin story, property details, 3 team cards, future plans callout, Kolkata office
- [x] Booking form: 12 fields + JS validation + success message (no backend)
- [x] Contact page: Google Maps + 2 address cards (Puri + Kolkata) + short form
- [x] JSON-LD LodgingBusiness schema on homepage
- [x] Open Graph meta tags on all pages
- [x] Unique SEO title on every page
- [x] AOS scroll animations throughout
- [x] All phone numbers as clickable `tel:` links
- [x] `loading="lazy"` on all images (eager on hero slide 1)
- [x] Dynamic copyright year via JS

## Design System
- **Primary Navy**: #1A3A5C
- **Gold Accent**: #C9A84C  
- **Background**: #F7F4EF
- **WhatsApp Green**: #25D366
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## Key Technical Notes
- CRA's `src/index.js` is intentionally empty to prevent React bundle from overriding static HTML
- The `public/index.html` is served as the React template but since src/index.js is empty, no React runs
- All other pages are pure static HTML served from the public folder

## Deployment
- **Status**: ✅ Ready — verified by deployment_agent (no hardcoded values, all env vars correct)
- **URL**: https://puri-guest-house.preview.emergentagent.com

## Backlog (P1 — Future Enhancements)
- [ ] Add actual room tariff pricing (currently "Call for Tariff")
- [ ] Connect booking form to email backend (currently JS success only)
- [ ] Add social media links (Facebook, Instagram, YouTube — currently #)
- [ ] Add online payment integration (Razorpay/PayPal)
- [ ] WhatsApp Business API integration for auto-replies
- [ ] Add guest reviews/ratings integration (Google Reviews widget)
- [ ] Add a blog section for Puri travel tips (SEO boost)

## Test Results
- **Test Run**: iteration_1 — 95% pass rate (29 Mar 2026)
- All 7 pages PASS, WhatsApp button on all pages, Gallery 91 images + filters working, Booking/Contact forms working
