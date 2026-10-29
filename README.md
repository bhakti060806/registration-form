# Client-Side Form Validation Application using ReactJS

Web Technology (2304362L) - Assignment 3 (Practical No. 3)

A user registration form built with React (Vite). It uses controlled inputs,
real-time validation, and keeps the Submit button disabled until every field is valid.

## Run locally

1. Install Node.js (v18 or newer) from https://nodejs.org
2. Open a terminal in this folder and run:

```
npm install
npm run dev
```

3. Open the link shown in the terminal (usually http://localhost:5173)

## Build for deployment

```
npm run build
```

## Project structure

```
src/
  components/
    FormField.jsx          reusable input component (props)
    RegistrationForm.jsx   form logic (useState, useEffect)
  utils/
    validators.js          all validation rules
  App.jsx
  App.css
  main.jsx
```

## Validation rules

- Name: required, minimum 3 characters
- Email: required, valid format
- Mobile: required, 10 digits starting with 6-9
- Password: minimum 8 characters, one uppercase letter, one digit
- Confirm password: must match password
- Terms: must be accepted

## Deployed URL

(paste your Vercel / Netlify link here)
