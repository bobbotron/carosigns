# Copilot Instructions for carosigns

## Project Overview
- **carosigns** is a React Native project for experimenting with sign-based learning and practice, organized around levels and streams (Novice, Intermediate, Advanced, etc.).
- The main app logic is in `App.js` and the `carosigns/` directory, with UI components in `carosigns/components/` and data in `carosigns/data/`.
- The project uses TypeScript for data and hooks, but most UI and logic are in JavaScript.

## Key Patterns & Structure
- **Data Organization:**
  - Sign data is split by level/stream in `carosigns/data/` (e.g., `Novice.ts`, `MainStream.ts`).
  - Types are defined in `carosigns/types/Sign.ts`.
- **State Management:**
  - Uses Redux Toolkit (`carosigns/redux/`) for app state and favorites.
- **UI Components:**
  - All major UI elements are in `carosigns/components/`.
  - Themed via `carosigns/Theme.js`.
- **Practice Mode:**
  - Core logic in `carosigns/components/PracticeMode.js` and `carosigns/AppController.js`.

## Developer Workflows
- **Install dependencies:**
  - `npm i`
- **Start app (Metro bundler):**
  - `npm start`
- **Build for Android:**
  - `npx eas build:version:set`
  - `npx eas build -p android`
- **Node version:**
  - Use Node.js `20.19.4` (see README)

## Project Conventions
- **TypeScript for data and hooks, JavaScript for UI.**
- **Redux slices** are in `carosigns/redux/`.
- **Component props** are usually typed, but not always strictly enforced.
- **Images/assets** are in `assets/` (organized by type).
- **No custom test or lint scripts** are defined; follow standard React Native/Expo workflows.

## Integration Points
- **EAS (Expo Application Services)** for builds (`eas.json`).
- **Metro bundler** for local development.
- **No backend/API integration**; all data is local.

## Examples
- To add a new sign, update the relevant file in `carosigns/data/` and ensure types match `Sign.ts`.
- To add a new UI feature, create a component in `carosigns/components/` and connect it via `App.js` or `AppController.js`.

---

For more details, see `README.md` and comments in `carosigns/` files.
