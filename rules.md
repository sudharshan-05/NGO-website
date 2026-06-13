# NGO WEBSITE PROJECT RULES & GUIDELINES

Version: 2.0

This document is the single source of truth for design, development, typography, animations, Git workflow, accessibility, and code quality.

Every contributor must follow these rules.

Failure to follow these standards may result in Pull Request rejection.

---

# PROJECT VISION

Build a premium NGO website that feels:

* Human-centered
* Elegant
* Modern
* Trustworthy
* Emotional
* Inspiring
* Professional

The website should feel similar to:

* Apple
* Stripe
* Linear
* Awwwards-winning NGO websites

Avoid:

* Dashboard appearance
* Generic templates
* College project aesthetics
* Outdated NGO designs

---

# TECH STACK

Mandatory:

* Next.js 15
* TypeScript
* Tailwind CSS
* Shadcn/UI
* Framer Motion
* Lucide React

Optional:

* React CountUp
* Lenis
* GSAP (approval required)

Forbidden:

* Bootstrap
* jQuery
* Material UI
* Inline CSS
* Random CSS frameworks

---

# GIT WORKFLOW

Never push directly to:

main

Every contributor must work in a feature branch.

Examples:

feature/hero-section

feature/about-section

feature/impact-map

feature/testimonials

feature/footer

Workflow:

Create Branch
↓
Develop
↓
Test
↓
Pull Request
↓
Review
↓
Merge

---

# PROJECT OWNERSHIP

Only the Project Integrator may edit:

src/app/page.tsx

Reason:

Avoid merge conflicts.

Every contributor only works inside their assigned section.

---

# FOLDER STRUCTURE

src/

app/

components/
ui/

sections/
HeroSection.tsx
AboutSection.tsx
ImpactMapSection.tsx
ProgramsSection.tsx
TestimonialsSection.tsx
FooterSection.tsx

hooks/

lib/

data/

fonts/

public/

No random folders allowed.

---

# BRAND COLOR SYSTEM

## Primary Color

Forest Green

#2E7D32

Usage:

* Primary Buttons
* NGO Branding
* Icons
* Highlights
* Impact Metrics

Meaning:

Growth, Nature, Trust

---

## Secondary Color

Warm Gold

#F4B400

Usage:

* CTA Buttons
* Statistics
* Important Highlights
* Hover States

Meaning:

Hope, Optimism, Positive Change

---

## Accent Color

Soft Blue

#4285F4

Usage:

* Active States
* Links
* Interactive Elements
* Selected Cards

Meaning:

Trust, Reliability, Communication

---

## Supporting Color

Light Green

#C8E6C9

Usage:

* Section Backgrounds
* Cards
* Decorative Elements

Meaning:

Balance, Healing, Sustainability

---

## Background

Ivory White

#FAFAF5

Usage:

* Entire Website Background
* Main Sections

Meaning:

Clean, Minimal, Peaceful

---

## Text

Charcoal

#1F2937

Usage:

* Headings
* Paragraphs
* Navigation
* Footer

Meaning:

Professional, Readable

---

# COLOR USAGE RATIO

Background → 60%

Primary Green → 20%

Secondary Gold → 10%

Accent Blue → 5%

Supporting Green → 5%

---

# TYPOGRAPHY SYSTEM

Typography should feel:

* Elegant
* Premium
* Human
* Modern
* Trustworthy

---

## Primary Display Font

Gondens Demo

Usage:

* Hero Headlines
* Section Titles
* Major Statistics
* Call-To-Action Headlines

Examples:

Creating Impact Across Chennai

Together We Create Change

Voices Of Impact

Never use Gondens Demo for paragraphs.

---

## Secondary Font

Citadel

Usage:

* Hero Subheadings
* Project Titles
* Card Titles
* Quotes
* Impact Stories

Never use Citadel for long-form content.

---

## Body Font

Inter

Fallback:

system-ui

Usage:

* Paragraphs
* Testimonials
* Forms
* Descriptions
* Footer
* Long Content

Inter is the only approved reading font.

---

# TYPOGRAPHY HIERARCHY

Hero Heading:
Gondens Demo

Hero Subtitle:
Citadel

Section Heading:
Gondens Demo

Card Title:
Citadel

Body Content:
Inter

Statistics:
Gondens Demo

Buttons:
Inter Medium

Footer:
Inter

Forms:
Inter

---

# FONT SCALE

Hero Title:
text-7xl

Section Title:
text-5xl

Card Title:
text-2xl

Body:
text-base

Small Text:
text-sm

Statistics:
text-4xl

Button:
text-base

---

# FONT RULES

Allowed Fonts:

* Gondens Demo
* Citadel
* Inter

Forbidden:

* Poppins
* Roboto
* Open Sans
* Montserrat
* Nunito
* Lato

Pull Request must be rejected if found.

---

# FONT LOADING

Store fonts:

src/fonts/

Load local fonts using:

next/font/local

Do not load fonts from external CDNs.

---

# LAYOUT SYSTEM

Max Width:

max-w-7xl

Section Padding:

py-24

Container Padding:

px-6 md:px-10

Grid Gap:

gap-8

Card Padding:

p-6

Large Cards:

p-8

---

# BORDER RADIUS

Buttons:

rounded-full

Cards:

rounded-3xl

Images:

rounded-2xl

Inputs:

rounded-xl

---

# SHADOW SYSTEM

Cards:

shadow-xl

Hero Elements:

shadow-2xl

Buttons:

shadow-lg

Avoid custom shadows.

---

# ANIMATION SYSTEM

Only use:

Framer Motion

---

Approved Animations:

* Fade Up
* Fade In
* Slide Up
* Slide In
* Scale Hover
* Floating Elements
* Count Up
* Stagger Children
* Parallax

---

Forbidden Animations:

* Infinite Spin
* Excessive Rotation
* Flashing Text
* Random Bounce
* Heavy Particle Systems

---

Animation Timing

Fast:
0.3s

Normal:
0.5s

Slow:
0.8s

Background Motion:
8s–15s

---

# TESTIMONIAL SECTION RULES

Must contain:

* Floating Avatar Ecosystem
* Active Testimonial Card
* Large Background Typography

Use:

Gondens Demo

Examples:

VOICES OF IMPACT

EVERY LIFE MATTERS

TOGETHER WE GROW

Opacity:

3%–5%

Background text should never affect readability.

---

# IMPACT MAP RULES

Must use:

Real Chennai SVG Map

Locations:

* Tharamani
* Guindy
* Besant Nagar
* Adyar
* Velachery
* Tambaram

Never generate fake polygons.

Never use dashboard-style maps.

---

# COMPONENT RULES

Use PascalCase.

Correct:

HeroSection.tsx

ImpactMapSection.tsx

TestimonialsSection.tsx

Wrong:

hero.tsx

impactmap.tsx

hero-section.tsx

---

# SHARED COMPONENTS

Always reuse:

* Button
* Card
* SectionTitle
* Badge

Do not recreate shared components.

---

# IMAGE RULES

Use:

next/image

Never use:

img

Every image requires:

alt text

---

# RESPONSIVENESS

Must support:

320px

768px

1024px

1440px

No horizontal scroll.

No broken layouts.

No overlapping content.

---

# ACCESSIBILITY

Required:

* Alt Text
* Keyboard Navigation
* Focus States
* Button Labels
* ARIA Labels

---

# PERFORMANCE

Animate only:

transform

opacity

Avoid animating:

width

height

top

left

Target:

60 FPS

---

# CODE QUALITY

Mandatory:

* TypeScript
* No any unless required
* No unused imports
* No console.log before merge
* No dead code

---

# PRE-MERGE REQUIREMENTS

Must pass:

npm install

npm run dev

npm run lint

npm run build

Responsive Test

Accessibility Test

Design Review

---

# PULL REQUEST CHECKLIST

Before creating a Pull Request:

[ ] Build Pass

[ ] Lint Pass

[ ] Responsive Pass

[ ] Accessibility Pass

[ ] Typography Pass

[ ] Color System Pass

[ ] Animation Pass

[ ] No Console Errors

[ ] No TypeScript Errors

[ ] Design System Pass

---

# FINAL RULE

Consistency is more important than personal preference.

If a design decision conflicts with this document:

FOLLOW THIS DOCUMENT.
