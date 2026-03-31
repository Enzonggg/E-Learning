# 🎓 E-Learning App — React + TypeScript

A modern, fully-typed e-learning platform converted from plain HTML/CSS to **React 18 + TypeScript + Vite**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗂️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx        # Sticky frosted-glass navbar
│   ├── Footer.tsx        # Footer with links
│   ├── Reveal.tsx        # Scroll-triggered fade-up animation
│   ├── FeatureCard.tsx   # Homepage feature cards
│   ├── LessonRow.tsx     # Lesson list item (used everywhere)
│   ├── ProgressBar.tsx   # Animated progress bar
│   └── QuizModal.tsx     # Full quiz modal with scoring
│
├── context/
│   └── ProgressContext.tsx  # Global lesson completion state (React Context)
│
├── data/
│   └── course.ts         # All 5 lessons, 25 questions, features data
│
├── hooks/
│   └── index.ts          # useCounter, useInView, useQuiz
│
├── pages/
│   ├── HomePage.tsx      # Landing page with hero, stats, features, CTA
│   ├── CoursesPage.tsx   # Course list with progress tracker
│   ├── LessonPage.tsx    # Video + quiz + sidebar navigation
│   └── NotFoundPage.tsx  # 404 fallback
│
├── types/
│   └── index.ts          # All TypeScript interfaces and types
│
├── App.tsx               # Root component with React Router routes
├── main.tsx              # Entry point
└── index.css             # Design system (CSS custom properties)
```

---

## 🧱 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| **React** | 18 | UI framework |
| **TypeScript** | 5 | Type safety |
| **Vite** | 5 | Build tool & dev server |
| **React Router DOM** | 6 | Client-side routing |

---

## ✨ Key Features

- **React Router v6** — clean URL-based navigation (`/`, `/courses`, `/lessons/:slug`)
- **TypeScript throughout** — fully typed props, hooks, context, and data models
- **React Context** — global progress tracking (quiz completion & scores) across pages
- **Custom hooks**:
  - `useQuiz` — quiz state machine (answers, scoring, reset)
  - `useInView` — `IntersectionObserver`-based scroll detection
  - `useCounter` — animated number counter with easing
- **Soft minimal design** — CSS custom properties, ambient blobs, floating orbs, reveal animations
- **Accessible quiz modal** — keyboard (Escape to close), aria attributes, disabled submit until all questions answered

---

## 📄 Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `HomePage` | Landing page |
| `/courses` | `CoursesPage` | Full course list |
| `/lessons/lesson-1` | `LessonPage` | Lesson 1 |
| `/lessons/lesson-2` | `LessonPage` | Lesson 2 |
| `/lessons/lesson-3` | `LessonPage` | Lesson 3 |
| `/lessons/lesson-4` | `LessonPage` | Lesson 4 |
| `/lessons/lesson-5` | `LessonPage` | Lesson 5 |
| `*` | `NotFoundPage` | 404 |

---

## 🎨 Design Tokens (CSS Custom Properties)

```css
--cream:    #faf8f5   /* Page background */
--lavender: #ede8f7   /* Active/hover states */
--mint:     #e8f7f0   /* Success states */
--peach:    #f7ede8   /* Error/warning states */
--ink:      #1e1e2e   /* Primary text */
--muted:    #8a8a9a   /* Secondary text */
--accent:   #7c6fc4   /* Brand purple */
--accent3:  #6fb89e   /* Success green */
```

---

## 📦 Adding More Lessons

All course data lives in `src/data/course.ts`. To add a new lesson:

```ts
// In COURSE.lessons array:
{
  id: 6,
  slug: 'lesson-6',
  title: 'JavaScript Basics',
  shortTitle: 'JS Basics',
  videoId: 'YOUR_YOUTUBE_VIDEO_ID',
  duration: '~25 minutes',
  questions: [
    {
      id: 'l6q1',
      text: 'Your question here?',
      options: [
        { value: 'a', label: 'Option A' },
        { value: 'b', label: 'Option B' },
        { value: 'c', label: 'Option C' },
      ],
      correctAnswer: 'a',
    },
    // ... add 4 more questions
  ],
},
```

The new lesson will automatically appear in the course list, sidebar navigation, and progress tracker — no other changes needed.
