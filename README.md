# Accredian Enterprise - Landing Page Clone

## Overview
I designed and developed this project as part of the Full Stack Developer Intern assignment for Accredian. It is a full landing page clone of [Accredian Enterprise](https://enterprise.accredian.com/), built to replicate the original website's user interface, responsive section layouts, exact brand color palette (`#1d72f3`), and interactive user flows.

---

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React & Custom Inline SVGs
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Backend API:** Next.js Server Route Handler (`/api/leads`)

---

## Project Structure

```text
Accredian-Enterprise/
├── public/
│   ├── accredian/             # Official brand images, partner logos & vector SVGs
│   └── favicon.ico            # Site favicon
├── src/
│   ├── app/
│   │   ├── api/leads/         # Enquiry form submission route handler
│   │   ├── globals.css        # Tailwind styling & global styles
│   │   ├── layout.tsx         # Root layout with site metadata & favicon
│   │   └── page.tsx           # Main landing page entry point
│   ├── components/            # Modular UI components
│   │   ├── Header.tsx         # Sticky navigation with scroll spy
│   │   ├── Hero.tsx           # Hero section with CTA modal trigger
│   │   ├── TrackRecordSection.tsx # Stats counters & partner logos
│   │   ├── AccredianEdgeSection.tsx # Vector diagram section
│   │   ├── DomainSection.tsx  # Domain grid & course segmentation
│   │   ├── ProcessSection.tsx # CAT framework & 3-step delivery
│   │   ├── FAQSection.tsx     # Accordion Q&A with single-open state
│   │   ├── TestimonialsSection.tsx # Quote slider & review controls
│   │   ├── Footer.tsx         # Social links & company footer
│   │   └── LeadModal.tsx      # Modal popup form with delivery options
│   └── data/
│       └── enterpriseData.ts  # Structured mock data & interfaces
├── README.md
├── package.json
└── tsconfig.json
```

---

## Key Features & Components

1. **Sticky Header & Mobile Navigation**
   - Official Accredian logo with active scroll-spy navigation links (`Home`, `Stats`, `Clients`, `Accredian Edge`, `CAT`, `How It Works`, `FAQs`, `Testimonials`).
   - Fully responsive mobile drawer toggle.

2. **Hero Section**
   - High-impact hero banner, feature checkmark badges (*Tailored Solutions*, *Industry Insights*, *Expert Guidance*), and "Enquire Now" modal trigger.

3. **Track Record & Corporate Partnerships**
   - Capsule stat counters (*10K+ Trained*, *200+ Sessions*, *5K+ Active Learners*).
   - Clean, borderless partner logo showcase featuring *Reliance*, *HCL*, *IBM*, *CRIF*, *ADP*, and *Bayer*.

4. **Accredian Edge & CAT Framework**
   - Embedded official vector diagrams for Accredian Edge and the 3-phase CAT Framework (*Concept*, *Application*, *Tools*).

5. **Domain Expertise & Course Segmentation**
   - 3-3-1 structured grid for 7 Domain Expertise areas.
   - 4 Course Segmentation cards (*Program*, *Industry*, *Topic*, and *Level Specific*).
   - *Strategic Skill Enhancement* blue banner with professional visual cutouts.

6. **Structured 3-Step Delivery**
   - Clean step cards featuring *Skill Gap Analysis*, *Customized Training Plan*, and *Flexible Program Delivery*.

7. **FAQ Accordion & Category Tabs**
   - Tabbed category filter (*About the Course*, *About the Delivery*, *Miscellaneous*).
   - Custom accordion logic ensuring that opening one question automatically closes all others.

8. **Testimonials & Footer**
   - Partner quote carousel with previous/next controls.
   - Footer containing official company links, social media handles, contact address, and copyright details.

9. **Lead Capture Modal & API Handler**
   - Full Enquiry form integrated with `/api/leads` backend endpoint.
   - Select dropdown for *Online* / *Offline* delivery modes and complete field validation.

---

## Development Approach & AI Usage

### Core Engineering (Done Manually):
- **Architecture & Layout:** Designed and built the full Next.js App Router project structure, component hierarchy, responsive Tailwind CSS layouts, and color palette (`#1d72f3`).
- **Interactive State & Logic:** Wrote the state management for modal popups, header scroll spy, testimonial slider, and single-open FAQ accordion behavior.
- **Asset & Data Integration:** Configured all official brand assets, site favicon, company social media links, form inputs, and backend API route.
- **Optimization:** Tested and optimized the production build (`npm run build`) ensuring zero TypeScript or Turbopack errors.

### Minor AI Assistance:
- **Syntax Reference & Interfaces:** Used AI occasionally as a quick reference tool for Next.js 15 metadata configuration syntax and drafting initial TypeScript data interfaces.

---

## How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```
