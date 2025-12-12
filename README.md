# Elaria Esthetique — Frontend

This frontend is a minimal React + Vite site for the Elaria Esthetique aesthetic center.

Branch: `Elaria Esthetique`

**Tagline:** Be Beautiful. Be Elaria

## Services
- Skin Treatments
- Hair Treatments
- Laser
- Ayurveda
- Hair Transplant
- Laser hair removal
- Slimming

## Run locally
Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:5173` (default Vite port).

Form / Contact
- The contact form in this project uses Formspree. Replace the placeholder `FORM_ACTION` in `src/components/ContactForm.jsx` with your Formspree endpoint (for example: `https://formspree.io/f/your-id`).
- As a fallback the form shows an email `mailto:` link in the UI.

---

Original template notes removed and replaced with project details.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
