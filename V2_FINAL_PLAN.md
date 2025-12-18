# Paklijst Pro V2 — Geconsolideerd Implementatieplan

## Executive Summary

Dit plan combineert:
- ✅ Oorspronkelijk V2 Design Plan (Red Dot principes)
- ✅ Kritische Analyse feedback (4 perspectieven)
- ✅ UX/UI Design Brief (comprehensive feature set)

**Doel**: Een award-level travel packing app die emotioneel delightful, simpel, en intelligent aanvoelt.

---

## 1. Vergelijking: Wat We Hebben vs. Wat We Nodig Hebben

### Features Overlap Matrix

| Feature | Huidige App | V2 Plan | Design Brief | Status |
|---------|-------------|---------|--------------|--------|
| **Destination input** | ✅ Autocomplete | ✅ Map preview | ✅ Map autocomplete | Uitbreiden |
| **Weather integration** | ✅ Basic | ✅ Widget | ✅ API-driven | Behouden |
| **Smart suggestions** | ✅ Activity-based | ✅ AI suggestions | ✅ Context-aware | Behouden |
| **Trip types** | ✅ 9 types | ✅ Behouden | ✅ Multiple types | Behouden |
| **Category lists** | ✅ 11 categorieën | ✅ Expandable | ✅ Collapsible | Upgrade |
| **Checkboxes** | ✅ Basic | ✅ Animated | ✅ Bounce/glow | Upgrade |
| **Progress indicator** | ✅ Linear bar | ⚠️ Circular | ✅ Bar + % | Upgrade |
| **Themes** | ✅ 7 thema's | ✅ Behouden | ✅ Dark/Light | Behouden |
| **LocalStorage** | ✅ Ja | ✅ Behouden | ✅ Backup/sync | Behouden |
| **Templates** | ❌ Geen | ❌ Niet gepland | ✅ Cruciaal | **NIEUW** |
| **Multiple trips** | ❌ 1 sessie | ❌ Niet gepland | ✅ Trip management | **NIEUW** |
| **Export/Share** | ❌ Geen | ✅ Gepland | ✅ PDF/Email/Share | **NIEUW** |
| **Swipe actions** | ❌ Geen | ✅ Gepland | ✅ Archive/delete | **NIEUW** |
| **Drag reorder** | ❌ Geen | ✅ Gepland | ✅ Physics-based | **NIEUW** |
| **Item notes** | ❌ Geen | ❌ Niet gepland | ✅ Optional notes | **NIEUW** |
| **Quantity selector** | ❌ Hardcoded | ❌ Niet gepland | ✅ Per item | **NIEUW** |
| **Celebrations** | ❌ Geen | ✅ Gepland | ✅ Confetti/glow | **NIEUW** |
| **Bottom navigation** | ❌ Geen | ❌ Niet gepland | ✅ Tabs | **NIEUW** |
| **Onboarding** | ❌ Geen | ⚠️ Genoemd | ✅ Required | **NIEUW** |

### Kritische Analyse Correcties

| Origineel V2 Plan | Correctie | Reden |
|-------------------|-----------|-------|
| Dark mode first | **Light mode default** | 75% gebruik overdag |
| Glassmorphism + Neumorphism | **Alleen glassmorphism lite** | Te druk samen |
| Circular progress | **Enhanced linear bar** | Sneller te scannen |
| 1 vraag per scherm | **Hybrid flow** | Snelheid belangrijk |
| 4px spacing | **8px spacing** | Design brief standaard |
| AI features V2 | **V3 stretch goal** | Te complex nu |

---

## 2. Herziene App Architectuur

### Information Architecture (IA)

```
PAKLIJST PRO V2
│
├── 🏠 HOME (Trips Overview)
│   ├── Active trips
│   ├── Past trips
│   ├── Quick actions
│   └── + New Trip button
│
├── 📝 TRIP FLOW (Creation)
│   ├── Step 1: Destination (autocomplete + map)
│   ├── Step 2: Dates (calendar picker)
│   ├── Step 3: Trip type (grid selection)
│   ├── Step 4: Travelers (solo/group)
│   ├── Step 5: Accommodation
│   ├── Step 6: Transport
│   ├── Step 7: Activities
│   └── Step 8: Generate list → Packing screen
│
├── ✅ PACKING LIST
│   ├── Progress header (% packed)
│   ├── Category sections (collapsible)
│   ├── Items with checkboxes
│   ├── Add custom item
│   ├── Swipe actions
│   └── Completion celebration
│
├── 📋 TEMPLATES
│   ├── Preset templates
│   ├── My templates
│   └── Save current as template
│
├── 💡 SUGGESTIONS (Future)
│   ├── Weather alerts
│   ├── Travel tips
│   └── Gear recommendations
│
└── ⚙️ SETTINGS
    ├── Theme (Light/Dark/Auto)
    ├── Default preferences
    ├── Frequently used items
    ├── Export/Backup
    └── About
```

### Screen Flow Diagram

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   SPLASH    │────▶│    HOME     │────▶│  NEW TRIP   │
│  (Theme?)   │     │  (Trips)    │     │   (Flow)    │
└─────────────┘     └─────────────┘     └─────────────┘
                           │                    │
                           │                    ▼
                           │            ┌─────────────┐
                           │            │   PACKING   │
                           │            │    LIST     │
                           │            └─────────────┘
                           │                    │
                           ▼                    ▼
                    ┌─────────────┐     ┌─────────────┐
                    │  TEMPLATES  │     │  COMPLETE   │
                    │             │     │ Celebration │
                    └─────────────┘     └─────────────┘
```

---

## 3. Design System V2

### 3.1 Color Palette

```css
/* ═══════════════════════════════════════════════════
   LIGHT MODE (DEFAULT)
   ═══════════════════════════════════════════════════ */

:root {
  /* Backgrounds */
  --bg-primary: #FAFBFC;          /* Main background */
  --bg-secondary: #FFFFFF;         /* Cards */
  --bg-tertiary: #F3F4F6;          /* Elevated/muted */

  /* Brand - Calming teal/blue */
  --brand-primary: #0D9488;        /* Teal 600 */
  --brand-secondary: #14B8A6;      /* Teal 500 */
  --brand-light: #CCFBF1;          /* Teal 100 */
  --brand-dark: #0F766E;           /* Teal 700 */

  /* Accent - Warm coral for CTAs */
  --accent: #F97316;               /* Orange 500 */
  --accent-light: #FFEDD5;         /* Orange 100 */

  /* Text */
  --text-primary: #111827;         /* Gray 900 */
  --text-secondary: #4B5563;       /* Gray 600 */
  --text-muted: #9CA3AF;           /* Gray 400 */
  --text-inverse: #FFFFFF;

  /* Semantic */
  --success: #10B981;              /* Emerald 500 */
  --success-light: #D1FAE5;        /* Emerald 100 */
  --warning: #F59E0B;              /* Amber 500 */
  --error: #EF4444;                /* Red 500 */
  --info: #3B82F6;                 /* Blue 500 */

  /* Borders & Shadows */
  --border-light: #E5E7EB;         /* Gray 200 */
  --border-medium: #D1D5DB;        /* Gray 300 */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
  --shadow-glow: 0 0 20px rgba(13,148,136,0.15);
}

/* ═══════════════════════════════════════════════════
   DARK MODE (OPTIONAL)
   ═══════════════════════════════════════════════════ */

[data-theme="dark"] {
  --bg-primary: #0F172A;           /* Slate 900 */
  --bg-secondary: #1E293B;         /* Slate 800 */
  --bg-tertiary: #334155;          /* Slate 700 */

  --text-primary: #F8FAFC;
  --text-secondary: #CBD5E1;
  --text-muted: #64748B;

  --border-light: #334155;
  --border-medium: #475569;

  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.4);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.5);
}
```

### 3.2 Typography

```css
/* Font Stack */
--font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Type Scale (Major Third - 1.25) */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### 3.3 Spacing System (8pt Grid)

```css
--space-0: 0;
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */

/* Container */
--container-max: 428px;
--container-padding: 16px;

/* Border Radius */
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### 3.4 Component Specifications

#### Card Component
```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-sm);
  transition: all 200ms ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.card.selected {
  border-color: var(--brand-primary);
  box-shadow: var(--shadow-glow);
}
```

#### Button Component
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  min-height: 48px;  /* Touch target */
  transition: all 150ms ease;
}

.btn-primary {
  background: var(--brand-primary);
  color: var(--text-inverse);
}

.btn-primary:hover {
  background: var(--brand-dark);
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-secondary {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-medium);
}
```

#### Checkbox Component (Animated)
```css
.checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid var(--border-medium);
  border-radius: var(--radius-sm);
  position: relative;
  cursor: pointer;
  transition: all 200ms ease;
}

.checkbox.checked {
  background: var(--success);
  border-color: var(--success);
  animation: checkBounce 400ms ease;
}

.checkbox.checked::after {
  content: '✓';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  animation: checkmarkIn 300ms ease 100ms both;
}

@keyframes checkBounce {
  0% { transform: scale(1); }
  30% { transform: scale(0.85); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes checkmarkIn {
  0% { opacity: 0; transform: scale(0) rotate(-45deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
}
```

#### Progress Bar
```css
.progress-container {
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  height: 8px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--brand-primary), var(--brand-secondary));
  border-radius: var(--radius-full);
  transition: width 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-label {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--text-secondary);
}
```

---

## 4. Animation System

### Timing Functions
```css
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### Core Animations
```css
/* Page Transition */
@keyframes fadeSlideIn {
  0% { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Card Selection */
@keyframes selectPop {
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}

/* Completion Celebration */
@keyframes celebrate {
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); opacity: 1; }
}

/* Confetti Particle */
@keyframes confettiFall {
  0% { transform: translateY(-100%) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}

/* Progress Pulse */
@keyframes progressPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(13, 148, 136, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(13, 148, 136, 0); }
}
```

### Interaction Specs
| Action | Duration | Easing | Effect |
|--------|----------|--------|--------|
| Button press | 150ms | ease-out | scale(0.98) |
| Card hover | 200ms | ease-out | translateY(-2px) + shadow |
| Card select | 300ms | bounce | scale pop + border glow |
| Checkbox | 400ms | spring | bounce + checkmark slide |
| Page transition | 300ms | ease-out | fade + slide up |
| Category expand | 250ms | ease-out | height + opacity |
| Celebration | 500ms | spring | scale + confetti |

---

## 5. Screen Specifications

### 5.1 Home Screen (Trips)

```
┌─────────────────────────────────────────┐
│ ≡  Paklijst Pro              [profile] │  Header
├─────────────────────────────────────────┤
│                                         │
│  Goedemiddag! 👋                       │  Greeting
│  Waar gaat de reis naartoe?            │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  + Nieuwe reis plannen          │   │  Primary CTA
│  │    Maak een slimme paklijst     │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Actieve reizen                        │  Section
│  ┌─────────────────────────────────┐   │
│  │ 🏖️ Bali, Indonesië              │   │  Trip Card
│  │    12-19 dec · 65% ingepakt     │   │
│  │    ████████░░░░                 │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 📋 Templates                    │   │  Quick Link
│  │ ⚙️ Instellingen                 │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

### 5.2 Trip Creation Flow

**Hybrid Approach** (per kritische analyse):
- Steps 1-2: Full screen (destination + dates)
- Steps 3-7: Grid selection (quick multi-select)
- Step 8: Review + generate

```
┌─────────────────────────────────────────┐
│ ←  Stap 1 van 3                   45%  │
│     ●───●───○───○                      │
├─────────────────────────────────────────┤
│                                         │
│  Waar ga je naartoe?                   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 🔍 Zoek bestemming...           │   │  Search Input
│  └─────────────────────────────────┘   │
│                                         │
│  Populaire bestemmingen                │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
│  │ 🇪🇸   │ │ 🇮🇩   │ │ 🇫🇷   │ │ 🇮🇹   │  │  Chips
│  │Spanje│ │ Bali │ │Paris │ │Rome  │  │
│  └──────┘ └──────┘ └──────┘ └──────┘  │
│                                         │
│  Recente bestemmingen                  │
│  • Barcelona, Spanje                   │
│  • Amsterdam, Nederland                │
│                                         │
├─────────────────────────────────────────┤
│         [ Volgende → ]                 │  Floating CTA
└─────────────────────────────────────────┘
```

### 5.3 Packing List Screen

```
┌─────────────────────────────────────────┐
│ ←  Bali, Indonesië           [share]   │
│     12-19 december 2024                │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  🎉 65% ingepakt                │   │  Progress Card
│  │  ████████████░░░░░░             │   │
│  │  26 van 40 items                │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌ ✨ Essentials ─────────────── ▼ ┐   │  Category
│  │ ☑️ Paspoort                     │   │
│  │ ☑️ Portemonnee                  │   │
│  │ ☐ Telefoon + oplader            │   │
│  │ ☐ Reisdocumenten                │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌ 👕 Kleding ───────────────── ▼ ┐   │
│  │ ☑️ T-shirts (5x)                │   │
│  │ ☐ Korte broeken (2x)            │   │
│  │ ☐ Zwemkleding                   │   │
│  │    + Item toevoegen             │   │
│  └─────────────────────────────────┘   │
│                                         │
├─────────────────────────────────────────┤
│  [All] [Unpacked] [Categories]         │  Filter tabs
└─────────────────────────────────────────┘
```

### 5.4 Completion Celebration

```
┌─────────────────────────────────────────┐
│                 🎊                      │
│              *  ✨  *                   │  Confetti
│           ✨   🎉   ✨                  │
│              *  ✨  *                   │
│                                         │
│         ┌───────────────┐              │
│         │      ✓        │              │  Success Icon
│         │   100%        │              │
│         └───────────────┘              │
│                                         │
│      Alles ingepakt! 🎒               │  Title
│                                         │
│   Je bent helemaal klaar voor je      │
│   reis naar Bali. Goede reis!         │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │     📤 Deel je paklijst         │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │     📋 Opslaan als template     │   │
│  └─────────────────────────────────┘   │
│                                         │
│         Terug naar home →              │
│                                         │
└─────────────────────────────────────────┘
```

---

## 6. Feature Specifications

### 6.1 Templates System (NIEUW)

**Data Structure:**
```javascript
const template = {
  id: 'beach-week',
  name: 'Strandvakantie (1 week)',
  icon: '🏖️',
  description: 'Perfect voor een relaxte week aan zee',
  categories: {
    essentials: ['passport', 'wallet', 'phone'],
    clothing: ['tshirts', 'shorts', 'swimwear'],
    // ...
  },
  settings: {
    climate: 'hot',
    activities: ['beach', 'swimming']
  }
};
```

**Preset Templates:**
| Template | Items | Beschrijving |
|----------|-------|--------------|
| Weekend weg | ~25 | Korte trip essentials |
| Strandvakantie | ~40 | Zon, zee, zand |
| Stedentrip | ~30 | Cultuur & shoppen |
| Backpacken | ~50 | Minimalistisch reizen |
| Wintersport | ~45 | Ski & sneeuw |
| Zakenreis | ~35 | Professioneel |
| Festival | ~40 | Camping & muziek |
| Gezinsvakantie | ~60 | Met kinderen |

### 6.2 Export/Share Feature (NIEUW)

**Export Options:**
1. **Share Image** - Beautiful summary card for social
2. **Copy Text** - Plain text checklist
3. **PDF Export** - Printable document
4. **WhatsApp/Email** - Direct share

**Share Image Design:**
```
┌─────────────────────────────────────────┐
│                                         │
│  🌴 Bali, Indonesië                    │
│  12-19 december 2024                   │
│                                         │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│                                         │
│  ✅ 40 items ingepakt                  │
│                                         │
│  ✨ Essentials (8)                     │
│  👕 Kleding (12)                       │
│  👟 Schoenen (3)                       │
│  🧴 Toilettas (10)                     │
│  💊 Gezondheid (4)                     │
│  📱 Elektronica (3)                    │
│                                         │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  Gemaakt met Paklijst Pro              │
│                                         │
└─────────────────────────────────────────┘
```

### 6.3 Swipe Actions (NIEUW)

```
← SWIPE LEFT                    SWIPE RIGHT →
┌─────────────────────────────────────────┐
│ 🗑️ │                Item                │ ✓ │
│ Delete                                  │ Done
└─────────────────────────────────────────┘
```

**Implementation:**
- Touch start/move/end event handlers
- Transform translateX based on swipe distance
- Threshold: 80px for action trigger
- Haptic feedback simulation via animation

### 6.4 Item Enhancements (NIEUW)

```javascript
const item = {
  id: 'tshirts',
  name: 'T-shirts',
  quantity: 5,           // NIEUW: editable
  notes: 'Mix van kleuren', // NIEUW: optional
  category: 'clothing',
  weight: 150,           // per item
  packed: false,
  reminder: null         // NIEUW: optional time
};
```

**Quantity Selector UI:**
```
┌─────────────────────────────────────────┐
│ ☐  T-shirts                    [-] 5 [+] │
│     Mix van kleuren (optioneel)         │
└─────────────────────────────────────────┘
```

---

## 7. Implementation Roadmap

### Phase 0: Preparation (Week 0)
- [ ] Backup current app
- [ ] Set up development branch
- [ ] Create component checklist
- [ ] Define CSS variable structure

### Phase 1: Design Foundation (Week 1-2)
**Goal: New visual system without breaking functionality**

| Task | Priority | Effort |
|------|----------|--------|
| New color palette (light mode default) | Must | 4h |
| Typography system | Must | 2h |
| Spacing system (8pt) | Must | 2h |
| Button components | Must | 4h |
| Card components | Must | 4h |
| Form inputs styling | Must | 4h |
| Checkbox animation | Should | 4h |
| Progress bar upgrade | Should | 2h |

**Deliverable:** App looks new, functions the same

### Phase 2: Core UX Upgrades (Week 3-4)
**Goal: Improved user flows and interactions**

| Task | Priority | Effort |
|------|----------|--------|
| Home screen (trips view) | Must | 8h |
| Question flow animations | Must | 8h |
| Hybrid step system | Must | 6h |
| Category collapse/expand | Must | 4h |
| Swipe to check items | Should | 6h |
| Floating action buttons | Should | 3h |

**Deliverable:** New navigation structure, smoother interactions

### Phase 3: New Features (Week 5-6)
**Goal: Templates and export**

| Task | Priority | Effort |
|------|----------|--------|
| Templates data structure | Must | 4h |
| Preset templates | Must | 4h |
| Save as template | Must | 4h |
| Template selection UI | Must | 6h |
| Export as image | Should | 8h |
| Share functionality | Should | 4h |
| Copy as text | Could | 2h |

**Deliverable:** Reusable lists, shareable results

### Phase 4: Polish & Celebration (Week 7-8)
**Goal: Delight and accessibility**

| Task | Priority | Effort |
|------|----------|--------|
| Completion celebration | Must | 6h |
| Confetti animation | Should | 4h |
| Onboarding flow (3 screens) | Should | 6h |
| Empty states | Must | 4h |
| Error states | Must | 2h |
| Loading states | Should | 2h |
| Accessibility audit | Must | 4h |
| Performance optimization | Must | 4h |
| Cross-browser testing | Must | 4h |

**Deliverable:** Production-ready V2

---

## 8. Technical Constraints

### Single-File HTML Limitations

| Feature | Feasible | Workaround |
|---------|----------|------------|
| Multiple pages | ❌ | Single-page app with state |
| Service Worker | ❌ | LocalStorage only |
| Push notifications | ❌ | Skip for V2 |
| Backend sync | ❌ | Export/import JSON |
| Real-time collab | ❌ | Skip for V2 |
| PDF export | ⚠️ | Use html2canvas or print CSS |
| Share API | ✅ | navigator.share() |

### Performance Budget

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| Bundle size | < 150KB |
| Max backdrop-filter elements | 2 |
| Animation duration | < 400ms |

### Browser Support

| Browser | Min Version |
|---------|-------------|
| Chrome | 80+ |
| Safari | 13+ |
| Firefox | 75+ |
| Samsung Internet | 12+ |
| Edge | 80+ |

---

## 9. Success Criteria

### User Experience
- [ ] Task completion rate > 95%
- [ ] Time to create list < 3 minutes
- [ ] Zero "where am I?" moments
- [ ] Celebration at completion

### Visual Quality
- [ ] Consistent 8pt spacing
- [ ] Smooth 60fps animations
- [ ] Clear visual hierarchy
- [ ] Professional color palette

### Technical
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Works offline (LocalStorage)
- [ ] No console errors

### Emotional
- [ ] "Dit voelt premium"
- [ ] "Ik vergeet niets meer"
- [ ] "Wil ik aan vrienden laten zien"

---

## 10. What We're NOT Doing in V2

To stay focused and realistic:

| Feature | Reason | When |
|---------|--------|------|
| AI suggestions | Complexity + API costs | V3 |
| Real-time collaboration | Requires backend | V3 |
| Push notifications | Requires service worker | V3 |
| Account system | Scope creep | V3 |
| Gamification badges | Nice-to-have | V2.5 |
| Voice input | Complexity | V3 |
| Smart suitcase integration | Hardware dependency | Never? |
| In-app store | Monetization later | V3 |

---

## Appendix A: File Structure

```
paklijst-standalone.html
├── <style>
│   ├── CSS Variables (colors, spacing, typography)
│   ├── Base styles (reset, body, container)
│   ├── Component styles (cards, buttons, inputs)
│   ├── Screen styles (home, trip, list, templates)
│   ├── Animation keyframes
│   └── Responsive adjustments
│
├── <script>
│   ├── Data (destinations, templates, items, questions)
│   ├── State management
│   ├── Render functions
│   ├── Event handlers
│   ├── Utility functions
│   └── Initialization
│
└── <body>
    └── <div id="app"></div>
```

---

*Plan Version: 2.0 Final*
*Created: December 2024*
*Ready for Implementation*
