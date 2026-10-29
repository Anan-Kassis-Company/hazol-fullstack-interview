# React + Node.js Technical Assessment

A small full-stack application used for a live technical interview.

## Requirements
- Node.js 20.19+ or 22.12+ (Node.js 22 LTS recommended)
- npm
- Git

## Setup

1. Fork this repository into your own GitHub account.
2. Clone your fork locally.
3. From the project root, run:

```bash
npm run install:all
npm run dev
```

4. Open http://localhost:5173 in your browser.
5. API health check: http://localhost:3001/api/health

The root `npm run dev` command runs the frontend and backend together. Vite proxies `/api` requests to the Express server.

## Tasks (30 minutes)

### Task 1 — React search (~8 minutes)
In `client/src/components/ProductManager.tsx`, implement case-insensitive filtering by product name. Search should update as the user types and should not modify the original products list.

### Task 2 — Express POST endpoint (~12 minutes)
In `server/src/index.ts`, implement `POST /api/products` accepting `{ "name": "Apples", "price": 9.9 }`.
- Reject invalid data with HTTP 400 and a JSON error.
- Name must be a nonempty string after trimming.
- Price must be a finite number greater than zero.
- Generate a unique numeric ID and add the new product to the in-memory list.
- Return the new product with HTTP 201.

### Task 3 — React API integration (~10 minutes)
In `ProductManager.tsx`, connect the existing form to `POST /api/products`.
- Send JSON using `fetch`.
- Display the new product without reloading the page.
- Clear the form after success.
- Display errors when a request fails.

## Submission
Commit your changes and push them to your own fork. Share the fork URL with the interviewer. Do not push to the original repository.

## Notes
- No database or authentication is required.
- Data is stored in memory and resets when the server restarts.
- You may use documentation; explain your reasoning as you work.
