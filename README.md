# TravelAI — Travel Itinerary App (Web)

A web prototype for an AI-powered travel planning app: generate a day-by-day itinerary from a destination, trip length, budget, and travel style; collaborate on trips with a group; track flights with real-time-style alerts; and auto-detect flight details from a pasted confirmation email.

This implements the [`Travel Itinerary App (Web)`](https://claude.ai/design) design spec, built with React + Vite.

## Features

- **Trips home** — view all trips as cards with member avatars and trip length
- **AI itinerary generation** — pick a destination, trip length (2–15 days), budget, travel style, and interests; watch a step-by-step "generating" animation, then land on a full itinerary
- **Itinerary view** — day-by-day activity list with category tags, cost, and a map panel; click a pin to focus the map on that stop
- **Activity editing** — edit time/cost/notes on any activity; only the person who added an activity can delete it
- **Group collaboration** — invite collaborators by email, see who's joined vs. pending
- **Flights** — flight cards with route/time/seat/confirmation details, per-flight alert toggles, and a dismissible/snoozable alert banner
- **Flight import** — paste a confirmation email and watch it get "parsed" into flight details you can add to the trip

## Tech stack

- React 19 + Vite
- Plain CSS / inline styles (no UI framework) — fonts are Newsreader (serif) + Plus Jakarta Sans (sans)
- No backend — all data lives in React state, seeded with a demo Tokyo trip. Refreshing the page resets state.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

### Other commands

| Command | What it does |
|---|---|
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run oxlint |

## Project structure

```
src/
  App.jsx                    top-level state and screen routing
  data.js                    seed data (Tokyo trip, canned itineraries, category/avatar metadata)
  components/
    Sidebar.jsx
    TripsHome.jsx
    NewTripForm.jsx
    GeneratingScreen.jsx
    ItineraryScreen.jsx
    FlightsScreen.jsx
    modals/
      MembersSheet.jsx
      ActivitySheet.jsx
      FlightImportSheet.jsx
```

## Notes

This is a front-end-only prototype: there's no authentication, database, or real flight/AI API integration. It's fully static, so it deploys as-is to Vercel, Netlify, GitHub Pages, or any static host with zero configuration.
