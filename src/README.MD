# React + Bootstrap Registration Dashboard

This project is a small registration dashboard built with **React**, **Vite**, and **Bootstrap 5**. It started as an assignment to practice Bootstrap utilities, forms, tables, images, and components, but I treated it like a mini real‑world app and focused on clean structure and readability.

The app includes a validated registration form, a submissions table, a simple image section, responsive buttons, and a fully responsive navbar.

---

## Features

- **Responsive navbar**

  - Collapses into a hamburger menu on smaller screens
  - Links to Home, About, and Contact sections

- **Registration form**

  - First Name and Last Name fields side‑by‑side using Bootstrap’s grid system
  - Email and Password fields with HTML5 + Bootstrap validation
  - “Agree to terms” checkbox (required)
  - Submit button styled with `btn-success`
  - On successful submit:
    - Data is added to the submissions table
    - Form fields reset
    - User sees a confirmation alert

- **Submissions table**

  - Displays hard‑coded sample users plus any new submissions
  - Uses `table`, `table-striped`, and `table-hover` classes
  - Wrapped in `table-responsive` for smaller screens
  - Status column uses Bootstrap badges (`bg-success`, `bg-warning`, etc.)

- **Image section**

  - Full‑width responsive image (`img-fluid` + `container-fluid`)
  - Circular profile image (`rounded-circle`) below the main image

- **Button utilities**

  - One button always visible on all screen sizes
  - Second button hidden on small screens with `d-none d-md-block`

- **Responsive layout**
  - Uses `container` and `container-fluid`
  - Layout adapts from mobile up to large desktop screens

---

## Tech Stack

- **React 18** (with functional components and hooks)
- **Vite** for fast dev server and bundling
- **Bootstrap 5** (CSS only, imported in the app)
- Plain CSS for a bit of additional styling

---

## Project Structure

src/

main.jsx **Vite/React entry point**
App.jsx **Top-level orchestrator: state + layout**
App.css **Global styling tweaks**

components/

NavBar.jsx **Responsive navbar**
RegistrationForm.jsx **Controlled form + validation**
UserTable.jsx **Table of submissions**
ImageGallery.jsx **Main image + circular profile image**
ButtonSection.jsx **Buttons with responsive utilities**
Footer.jsx **Simple footer**

The important design choice here is **keeping components small and focused**.  
`App.jsx` owns the state (`formData`, `validated`, `submissions`) and passes only what each child needs through props.

---

## Getting Started

### 1. Clone and install

git clone <https://github.com/pperez90-lab/bootstrap-project.git>
cd bootstrap-project
npm install

### 2. Run the development server

npm run dev

Then open the URL Vite prints (usually `http://localhost:5173/`).

---

## How It Works (High Level)

- **State management**

  - `formData` holds the current values of the form fields.
  - `validated` tracks whether the form has been submitted at least once so Bootstrap can show validation styles.
  - `submissions` is an array of objects used to render table rows.

- **Form handling**

  - All inputs are **controlled components** (`value`/`checked` tied to `formData`, updates go through `handleChange`).
  - On submit, `handleSubmit` uses the browser’s built‑in `checkValidity()` to validate required fields.
  - If valid, a new submission is pushed into `submissions`, the form resets, and the user sees an alert.

- **Rendering the table**
  - `UserTable` receives `submissions` as a prop and uses `.map()` to render each row.
  - The status is displayed using a colored badge for quick visual feedback.

---

## What I Practiced With This Project

- Setting up **Vite + React + Bootstrap** from scratch
- Using Bootstrap’s **grid system and utilities** inside JSX
- Building a **modular React architecture** instead of a single giant component
- Handling **form state, validation, and controlled inputs**
- Rendering dynamic data with `.map()` and keeping the UI in sync with state
- Thinking in terms of **responsive design** from the start

---

## Future Improvements

If I extend this project later, here are some next steps I’d like to explore:

- Add edit/delete actions for submissions
- Persist data to localStorage or a simple backend API
- Add search or filtering to the table
- Replace the placeholder images with a small image asset pipeline
- Add basic routing for the Home / About / Contact sections

---

## Running Tests

There are no automated tests yet for this project. For now, testing is manual:

- Try submitting the form with missing fields and verify validation messages.
- Resize the browser to confirm the navbar, grid, buttons, and images behave responsively.
- Submit multiple registrations and confirm the table updates correctly.

---

## License

This project is for learning and portfolio purposes. Feel free to read through the code and adapt ideas for your own projects.
