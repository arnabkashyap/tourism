# NE Threads | Cultural Marketplace & Tourism - Context

## 🌟 Project Identity
**NE Threads** is a tactical marketplace and cultural discovery platform designed to connect users with authentic handloom artisans and tourism experiences in Northeast India. The platform emphasizes high-craft authenticity, direct artisan support, and immersive cultural exploration.

## 🛠️ Technology Stack
- **Framework**: Next.js 16 (App Router)
    - *Note*: Uses Next.js 16 with potential breaking changes/deprecations from previous versions.
- **Library**: React 19
- **Styling**: Tailwind CSS v4
    - Uses the new `@theme` configuration in `globals.css` instead of `tailwind.config.js`.
- **Icons**: Lucide React
- **Language**: TypeScript

## 🎨 Design System: "Antigravity Tactical"
The application uses a premium, "living" interface inspired by tactical HUDs (Heads-Up Displays) and modern glassmorphism.

- **Theme**: Dark Mode only (`#050805` background).
- **Accents**: Tactical Emerald (`#10b981`) and Tactical Green (`#1a2e1a`).
- **UI Patterns**:
    - **Glassmorphism**: Heavy use of backdrop blurs and semi-transparent borders (`.glass-panel`, `.glass-card`).
    - **HUD Elements**: Relative containers with subtle border overlays (`.hud-element`).
    - **Neon Accents**: Glow effects and pulsing indicators for "live" data feeds (e.g., verification pulses on artisan cards).
    - **Mobile-First**: Optimized for mobile interaction with a fixed `BottomNav`, integrated `TopBar` filters, and smooth vertical scroll feeds.

## 🧠 Core Architecture & State
- **State Management**: React Context API for lightweight, modular state.
    - `AuthContext`: Manages user sessions (currently placeholder).
    - `RecommendationEngineContext`: The "brain" of the feed. Uses a **Weighting & Verification Bonus** system:
        - Verified master craftsmen receive a **+50 score bonus**.
        - Items matching the active category receive a **+20 score bonus**.
        - User interactions increase category weights in the `weightMap`.
    - `ThemeContext`: Handles design tokens and theme-level state.
- **Data Model**:
    - **Artisans**: Profiles of weavers and craftsmen (ID, category, location, bio, verification status).
    - **Experiences**: Bookable workshops and tours linked to artisans (ID, price, duration, tags).
- **Data Source**: `src/lib/data.json` acts as the primary mock database.

## 📂 Project Structure
```text
tourism_frontend/
├── src/
│   ├── app/                # Next.js App Router (pages & global styles)
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Shell components (TopBar with Filters, BottomNav, HeaderSearch)
│   │   └── feed/           # Content-specific cards (ArtisanProfileCard, ExperienceCard)
│   ├── context/            # React Context providers (Recommendation Engine, Auth, Theme)
│   └── lib/                # Utilities and static data
├── backend/                # Python backend services
│   ├── mcp_server.py       # FastMCP server (analyze_weaving_feed)
│   ├── websocket_mock.py   # FastAPI WebSocket (Live Metrics Stream)
│   └── requirements.txt    # Python dependencies
├── public/                 # Static assets
└── tsconfig.json           # TS configuration
```

## 🚀 Key Features
1. **Command Center Feed**: A unified feed where the "Recommendation Engine" surface top-tier artisans and experiences.
2. **Integrated HUD Navigation**: A dynamic filter strip built into the `TopBar` for switching between "Eco-Tours", "Authentic Handloom", and "Local Stalls".
3. **Artisan Verification System**: Visual HUD indicators with neon pulses to highlight verified master craftsmen.
4. **Priority Alpha Badge**: A tactical HUD flag (badging) for high-match and verified recommendations.
5. **Interactive Booking Deployment**: Experience cards feature tactical scanning animations on the "Initiate Booking" action.

## 📝 Development Guidelines
- **Follow the HUD Aesthetic**: When adding components, use `.glass-panel` and `.hud-element` utilities.
- **Responsive by Default**: Every component must work flawlessly on small screens.
- **Lucide Icons**: Use consistent icon weights (e.g., size 12-16) and the tactical emerald color for active states.
- **Data-Driven**: Components should be designed to handle and prioritize data from `src/lib/data.json`.