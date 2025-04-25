# 🌗 Theme Switcher – React State Management Project

This is a minimal theme switcher app built with React. It allows users to toggle between light and dark themes using a sun/moon icon in the center of the screen. The project is designed to demonstrate the use of **global state management** using `React Context` and `useReducer`.

## 🧠 What This Project Shows

- How to **create a global state** using React's `Context API`
- How to **dispatch actions** and **use reducers** to manage state changes
- How to **update the UI based on shared state** across components

## 🧪 What to Look For (When Reviewing the Code)

### ✅ Context & Reducer
- Check for a dedicated **Context file** (e.g., `ThemeContext.js`)
- Look for a **`useReducer`** setup with actions like `"TOGGLE_THEME"`
- See how the `dispatch` function is used to update the theme

### ✅ Clean Component Structure
- The main `App` or layout should wrap the entire app with the `ThemeProvider`
- The central icon component should use `useContext` to read the current theme and toggle it

### ✅ Styling
- The theme switch should **visually update the entire app**
- There should be **separate styles or classes** for light and dark themes
- Minimalist, clear, and accessible UI

### ✅ Bonus (Optional but Nice to Have)
- Comments in code to help others understand what's going on
- Additional components that reflect theme changes (like a header or background)

## 🔗 Live Demo

Check it out here:  
👉 [module6-6.vercel.app](https://module6-6.vercel.app)

## 📁 Folder Structure (Simplified)

