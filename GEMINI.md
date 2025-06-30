
# Gemini Agent Project Notes

## About the Project

This project is the official website for NeoDynamics, a cybersecurity startup. The website is built with the Hugo static site generator and styled with Tailwind CSS. The primary purpose of the site is to serve as a simple, elegant landing page that communicates the company's focus on "rewriting cybersecurity."

## Tech Stack

- **Static Site Generator:** Hugo
- **Styling:** Tailwind CSS
- **JavaScript Framework:** Alpine.js
- **Package Manager:** npm

## Key Files

- `hugo.yaml`: The main configuration file for the Hugo project.
- `package.json`: Defines the project's npm dependencies and scripts.
- `tailwind.config.js`: The configuration file for Tailwind CSS.
- `layouts/`: Contains the Hugo layout files, including the base template (`_default/baseof.html`) and the main page layout (`index.html`).
- `content/`: Contains the content files for the website, such as the contact and trial request pages.
- `assets/css/`: Contains the main CSS file (`main.css`) that is processed by Tailwind CSS.
- `static/`: Contains static assets such as images and fonts.

## Development

To set up and run the project locally, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start the development server:**
    ```bash
    npm start
    ```
    This command will start the Hugo development server and watch for changes to the files.

## Deployment

To build the website for deployment, run the following command:

```bash
npm run build
```

This will generate the static files in the `public/` directory.

## Style Guide

- **Color Palette:**
  - **Background:** Black (`#000000`)
  - **Primary Accent:** Orange (`#ff4c29`)
  - **Text:** White (`#FFFFFF`) or light gray (`#D1D5DB`)
- **Typography:**
  - **Headings:** `PP Neue Machina`
  - **Body:** `DM Sans`
