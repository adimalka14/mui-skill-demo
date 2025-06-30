# MUI Skill Demo

This project is a **demonstration of advanced Material-UI (MUI) usage**, showcasing custom components, theming, direction support (LTR/RTL), and internationalization (i18n). It is fully documented and interactively explored using **Storybook 9**.

🌐 **Live Demos**

- [Netlify - Rating app demo](https://mui-skill-demo.netlify.app/)
- [GitHub Pages - Storybook](https://adimalka14.github.io/mui-skill-demo)

---

## 🚀 Features

### 🧩 Wrapped MUI Components

| Component     | MUI Base                                                                   | Key Features                                                                      |
| ------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Avatar**    | [`@mui/material/Avatar`](https://mui.com/material-ui/react-avatar/)        | Custom sizes, fallback, variant support                                           |
| **Button**    | [`@mui/material/Button`](https://mui.com/material-ui/react-button/)        | Extended variants, Storybook controls                                             |
| **Dialog**    | [`@mui/material/Dialog`](https://mui.com/material-ui/react-dialog/)        | FullWidth, FullScreen, dividers, dynamic actions, draggable (via `@dnd-kit/core`) |
| **Rating**    | [`@mui/material/Rating`](https://mui.com/material-ui/react-rating/)        | i18n integration, hover labels, precision                                         |
| **TextField** | [`@mui/material/TextField`](https://mui.com/material-ui/react-text-field/) | Types: text, email, password, number, etc.; adornments; select; password toggle   |
| **Tooltip**   | [`@mui/material/Tooltip`](https://mui.com/material-ui/react-tooltip/)      | Custom placements, wraps any element                                              |
| **AppBar**    | [`@mui/material/AppBar`](https://mui.com/material-ui/react-app-bar/)       | Top bar with theme and direction controls, menus                                  |

---

## 🎨 Theming & Direction

- **Light/Dark Themes** via `ThemeProvider`
- Direction support (`LTR`/`RTL`) using `DirectionWrapper` + Emotion cache + [`stylis-plugin-rtl`](https://github.com/Emotion-js/rtl)
- Fully controlled in Storybook using global toolbar

---

## 🌍 Internationalization

- Powered by [`i18next`](https://www.i18next.com/) + [`react-i18next`](https://react.i18next.com/)
- Supports **English** & **Hebrew**
- Example usage in: `Rating`, `Dialog`, `AppBar`

---

## 📖 Storybook

- Theme, direction, and language switchers in the toolbar
- Interactive docs and examples for all components
- Variants comparisons (sizes, themes, types)

---

## ⚡ Run Locally

Clone the repo:

```bash
git clone https://github.com/adimalka14/mui-skill-demo.git
```

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev       # run the app locally
npm run storybook # run Storybook
```

Build Storybook:

```bash
npm run build-storybook # build Storybook static site
```

---

## 📦 Environment

- **Node.js**: >= 22
- **React**: ^19.x
- **Storybook**: 9.x
- **Vite**: 6.x

---

## 🛠 Libraries & Tools

### ✨ Main Dependencies

| Library                                                                                                                                                          | Purpose                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [`@mui/material`](https://mui.com/)                                                                                                                              | MUI components for building UI                     |
| [`@mui/icons-material`](https://mui.com/material-ui/material-icons/)                                                                                             | MUI's icon set                                     |
| [`@emotion/react`](https://emotion.sh/docs/introduction), [`@emotion/styled`](https://emotion.sh/docs/styled), [`@emotion/cache`](https://emotion.sh/docs/cache) | Styling and CSS-in-JS                              |
| [`@dnd-kit/core`](https://dndkit.com/), [`@dnd-kit/modifiers`](https://dndkit.com/)                                                                              | Drag and drop support (used for draggable dialogs) |
| [`i18next`](https://www.i18next.com/), [`react-i18next`](https://react.i18next.com/)                                                                             | Internationalization (i18n)                        |
| [`i18next-browser-languagedetector`](https://github.com/i18next/i18next-browser-languageDetector)                                                                | Auto-detects browser language                      |
| [`i18next-http-backend`](https://github.com/i18next/i18next-http-backend)                                                                                        | Loads translations from backend (or local files)   |
| [`stylis-plugin-rtl`](https://github.com/Emotion-js/rtl)                                                                                                         | Enables RTL (Right-to-Left) CSS support            |
| [`prop-types`](https://www.npmjs.com/package/prop-types)                                                                                                         | Type checking for React components                 |

### 🛠 Dev & Build Tools

| Tool                                                                                                                         | Purpose                                     |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`storybook`](https://storybook.js.org/), [`@storybook/react-vite`](https://storybook.js.org/docs/react/get-started/install) | Interactive documentation & playground      |
| [`vite`](https://vitejs.dev/), [`vitest`](https://vitest.dev/)                                                               | Vite + Vitest: Fast bundler & test runner   |
| [`eslint`](https://eslint.org/), [`prettier`](https://prettier.io/)                                                          | Linting & code formatting                   |
| [`storybook-deployer`](https://github.com/storybookjs/storybook-deployer)                                                    | Deploy Storybook to GitHub Pages or similar |

