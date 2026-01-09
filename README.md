# **Interactive Apology Experience**

An interactive, aesthetic, and emotionally engaging **“Say Sorry” website** built with **React + Tailwind CSS**, designed to apologize in a playful yet heartfelt way.
The website combines storytelling, animations, playful interactions, and a celebratory ending to turn an apology into a memorable experience.

Live Demo: *(https://say-sorry-website.vercel.app/)*



---

## **Table of Contents**

1. [Overview](#overview)
2. [Features](#features)
3. [User Flow](#user-flow)
4. [Folder Structure](#folder-structure)
5. [How to Run Locally](#how-to-run-locally)

   * Prerequisites
   * Installation
   * Run Development Server
   * Build for Production
6. [UI & Interaction Design](#ui--interaction-design)
7. [Animation & Effects](#animation--effects)

---

## **Overview**

This project is a **romantic, interactive apology website** created to make saying *sorry* more personal and memorable.

It:

* Tells a short **story through images and messages**
* Uses **smooth transitions & floating background animations**
* Adds a **playful question interaction** where the “No” button runs away
* Ends with a **celebration screen** featuring a happy image and emotional message

The goal is simple:

> Turn an apology into an experience ❤️

---

## **Features**

* Aesthetic UI with soft pastel gradients
* Story-based flow with images & messages
* Live animated background (floating hearts, candy, teddy emojis)
* Playful “No button runs away” interaction
* Celebration final screen after “Yes”
* Replay option to restart the experience
* Fully responsive (desktop & mobile)
* Built with modern React + Vite

---

## **User Flow**

1. Landing with a **cute navbar**
2. Story frames:

   * Image on the left
   * Message + “Next” button on the right
3. Interactive question:

   > *“Kya tum ab bhi naraz ho?”*
4. “No” button:

   * Initially appears normally
   * Disappears and reappears randomly on click
   * Permanently disappears after 5 clicks
5. “Yes” click:

   * Soft transition
   * Celebration image
   * Final emotional message
   * Replay button

---

## **Folder Structure**

```
say-sorry-website/
│
├── src/
│   ├── assets/
│   │   └── images/          # Story images + celebration image
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Frame.jsx
│   │   ├── Question.jsx
│   │   ├── FinalScreen.jsx
│   │   └── FloatingElements.jsx
│   │
│   ├── data/
│   │   └── story.js         # Story content & images
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

---

## **How to Run Locally**

### **Prerequisites**

* Node.js ≥ 18
* npm / yarn

---

### **Installation**

```bash
git clone https://github.com/your-username/romantic-sorry-website.git
cd romantic-sorry-website
npm install
```

---

### **Run Development Server**

```bash
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

### **Build for Production**

```bash
npm run build
npm run preview
```

---

## **UI & Interaction Design**

### Layout

* Left: framed image card
* Right: message card with CTA
* Balanced visual weight to avoid empty feel

### Design Principles

* Soft colors
* Rounded corners
* Glassmorphism cards
* Clear emotional hierarchy

---

## **Animation & Effects**

| Effect              | Description                                      |
| ------------------- | ------------------------------------------------ |
| Floating Background | Hearts, candies, teddy emojis float continuously |
| Button Hover        | Smooth scale & glow                              |
| No Button Logic     | Disappears & reappears at random positions       |
| Transitions         | Soft fade & scale transitions between screens    |

All animations are **CSS-based**, lightweight, and performant.

---
