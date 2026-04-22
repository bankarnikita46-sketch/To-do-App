# 📝 To-Do List App

A clean, professional To-Do List application built with **React + Vite** and **Tailwind CSS**. Add, edit, complete, and delete tasks with a smooth, modern UI.

## ✨ Features

- ✅ **Add** new tasks
- ✏️ **Edit** existing tasks (click pencil icon or double-click text)
- ✔️ **Mark as completed** with one click
- 🗑️ **Delete** tasks
- 📊 Live count of remaining and completed tasks
- 🎨 Beautiful gradient UI with Tailwind CSS
- ⚡ Built with Vite for instant dev server

## 🛠️ Tech Stack

- **React 18** (functional components + hooks)
- **Vite** (build tool)
- **Tailwind CSS** (styling)

## 📁 Folder Structure

```
todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ToDoList.jsx
│   │   └── ToDoItem.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🧩 Components

| Component | Responsibility |
|-----------|---------------|
| `App` | Holds the main `todos` state and handler functions |
| `Header` | Shows app title and live task count |
| `ToDoList` | Renders the list of todos using `.map()` with unique keys |
| `ToDoItem` | Single row — handles toggle, edit, and delete actions |

State lives in `App` and is passed down via props. Each child component receives only the data and callbacks it needs.

## 🚀 Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`) in Chrome or any browser.

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📝 Notes

- Project created using **Vite** (as required)
- All components are **functional** components using hooks
- `node_modules` is excluded — run `npm install` after extracting

---

Built with ❤️ using React + Vite + Tailwind CSS
