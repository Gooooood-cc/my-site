# Session Handoff Document

**Session ID**: [Current Session]
**Generated**: 2026-02-15
**Project**: Personal Website (my-site)
**Status**: Phase 1-5 + Admin Panel Complete (2026-02-15)

---

## Executive Summary

A Next.js 15 personal website with glassmorphism design and bilingual support (Chinese/English). Features:
- **Holly Chi** as AI Product Manager
- Tagline: "搞点实际的能用的 / Building practical, usable products"
- DeepSeek API integration for AI Chat assistant
- Dark/Light theme toggle with Zustand state management
- **Admin Panel** for editing profile, work experience, projects, and avatar

---

## Project Context

### Original Request
Build a personal website based on GitHub repo `WinterChenS/my-site` with:
- Apple Design Guide compliance
- DeepSeek API for AI features
- Vercel deployment
- Local avatar upload + self-editable profile
- "Site Controller" AI agent (UI control, navigation, visualizations)
- Phased development approach

### Technology Stack
```
Frontend: Next.js 15 + TypeScript + Tailwind CSS
UI Library: shadcn/ui + Framer Motion
AI: DeepSeek V3 API ($0.14/1M tokens)
State Management: Zustand
Deployment: GitHub + Vercel (free tier)
```

---

## Recent Updates (2026-02-15)

### UI Optimizations
- [x] Avatar area enhanced with gradient glow background
- [x] Added "4年工作经验" badge below avatar
- [x] Voice input UI improved (pulse animation, status text)
- [x] Mobile hamburger menu with slide animation
- [x] Theme transition with smooth CSS animations
- [x] Focus states added for accessibility
- [x] Glass card hover effect improved (GPU acceleration)
- [x] Input components centered in chat

### Admin Panel (NEW)
- [x] `/admin` page for content management
- [x] Profile editing (name, title, tagline, avatar)
- [x] Work experience management (add/edit/delete)
- [x] Projects management (add/edit/delete)
- [x] Avatar upload with preview
- [x] Data saved to `data.json` file

### Bug Fixes
- [x] Removed `output: 'export'` to enable API routes
- [x] Fixed microphone icon (show Mic not MicOff when recording)
- [x] Improved error handling in AI chat

---

## Key Files

| Path | Purpose | Status |
|------|---------|--------|
| `src/app/page.tsx` | Homepage with avatar & experience badge | ✅ |
| `src/components/ai-chat.tsx` | AI Chat with voice input | ✅ |
| `src/components/layout/navbar.tsx` | Navigation with mobile menu | ✅ |
| `src/components/ui/glass-card.tsx` | Glassmorphism card | ✅ |
| `src/app/admin/page.tsx` | Admin panel | ✅ |
| `src/app/api/admin/data/route.ts` | Data API | ✅ |
| `src/app/api/admin/upload/route.ts` | Avatar upload API | ✅ |
| `data.json` | Site data storage | ✅ |

---

## Deployment Info

| Item | Value |
|------|-------|
| GitHub | https://github.com/Gooooood-cc/my-site |
| Vercel | https://my-site-snowy-seven-22.vercel.app |
| Admin URL | https://my-site-snowy-seven-22.vercel.app/admin |
| Build | ✅ Passing |

---

## Admin Panel Usage

1. Visit `/admin` page
2. Edit profile, work experience, projects
3. Upload avatar image
4. Click "保存" to save changes
5. Data is stored in `data.json`

---

## Known Issues

- AI Chat on Vercel requires `DEEPSEEK_API_KEY` environment variable
- Network issues preventing git push (multiple retries needed)

---

## Quick Restart Commands

```bash
cd my-site
npm run dev      # Start development server
npm run build    # Build for production
```

---

**Document Updated**: 2026-02-15
**By**: Claude Code
