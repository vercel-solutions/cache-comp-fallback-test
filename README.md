# ISR + Suspense Fallback Scenarios

These demos illustrate the behavior of suspense fallbacks in multiple scenarios with some unexpected outcomes. The general set up is as follows:

## Exhibit A & B

- `layout.tsx` in `/[lang]` route
  - uses `generateStaticParams` with `[{lang: "en"}]`
  - top-level navigation
- 2 child routes `/demo1` and `/demo2`, each with their own `layout.tsx`
  - each has a post listing page
  - each has two child routes for post detail `/fast[postId]` and `slow[postId]`
  - each has left-nav for child routes

## Exhibit A

- `/[lang]/layout.tsx` top-level nav wrapped w/ suspense

### /demo1

- left nav is **not** wrapped w/ suspense

### /demo2

 - left nav is wrapped w/ suspense

## Exhibit B

- `/[lang]/layout.tsx` top-level nav **not** wrapped w/ suspense

### /demo1

- left nav is **not** wrapped w/ suspense

### /demo2

- left nav is wrapped /w suspense

## Summary

| Exhibit | Demo | Post Type | Behavior | Notes |
|---------|------|-----------|--------|-------|
| A | 1 | Fast Posts | **expected** | |
| A | 1 | Slow Posts | **expected** | with blocked nav :/ |
| A | 2 | Fast Posts | **unexpected** | |
| A | 2 | Slow Posts | **unexpected** | |
| B | 1 | Fast Posts | **expected** | |
| B | 1 | Slow Posts | **expected** | with blocked nav :/ |
| B | 2 | Fast Posts | **expected** | |
| B | 2 | Slow Posts | **expected** | with blocked nav :/ |