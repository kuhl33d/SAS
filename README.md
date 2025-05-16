# SAS - Smart Architecture Solutions

A modern website for architectural design and consultation services built with React, Vite, and TypeScript.

## 🎉 Features

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A fast, opinionated frontend build tool.
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS** - A utility-first CSS framework.
- **shadcn/ui** - Beautifully designed components for modern UIs.
- **React Router DOM** - Declarative routing for React applications.

## ⚙️ Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (version 16 or above)
- pnpm (package manager)

## 🚀 Getting Started

Follow these steps to get started with the SAS website:

1. Clone the repository:

   ```bash
   git clone https://github.com/DarinelGuillen/SAS.git
   ```

2. Navigate to the project directory:

   ```bash
   cd SAS
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Deploy to GitHub Pages
   ```bash
   pnpm deploy
   ```

## 📜 Available Scripts

- `pnpm dev` - Starts the development server.
- `pnpm build` - Builds the production-ready code.
- `pnpm lint` - Runs ESLint to analyze and lint the code.
- `pnpm preview` - Starts the Vite development server in preview mode.
- `pnpm deploy` - Builds and deploys the website to GitHub Pages.

## 📂 Project Structure

The project structure follows a standard React application layout:

```python
SAS/
├── node_modules/         # Project dependencies
├── public/               # Static assets (images, favicons)
├── src/                  # Source code
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point for React
│   ├── styles/           # Global styles
│   │   └── globals.css
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # UI-specific components
│   │   ├── header.tsx    # Site header
│   │   ├── hero.tsx      # Hero section
│   │   └── ...
│   ├── lib/              # Utility functions and helpers
│   │   ├── utils.ts      # General-purpose utilities
│   │   └── constants.ts  # Site constants and data
│   └── pages/            # Application pages
│       ├── home.tsx      # Home page
│       ├── about.tsx     # About page
│       ├── services.tsx  # Services page
│       ├── portfolio.tsx # Portfolio page
│       └── contact.tsx   # Contact page
├── index.html            # HTML entry point
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
