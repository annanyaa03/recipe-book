# Recipe Book

A clean, lightweight recipe browsing application built with plain HTML, CSS, and vanilla JavaScript. The app presents a curated collection of recipes with ingredients and links to the full recipe details, along with a save and search feature.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Recipes Included](#recipes-included)
- [Getting Started](#getting-started)
- [Deployment](#deployment)

---

## Overview

Recipe Book is a frontend-only web application that displays a collection of recipes in a card-style layout. Each recipe card shows the dish name, an image, a list of ingredients, and a link to the full recipe on Spoonacular. The header provides quick access to saved recipes and a search feature.

**Language breakdown:** HTML (45.2%), CSS (35.8%), JavaScript (19.0%)

---

## Tech Stack

- **HTML5** - Page structure and semantic markup
- **CSS3** - Card layout, styling, and responsive design
- **Vanilla JavaScript** - My Saves functionality and search behavior
- **Google Fonts (Outfit)** - Typography (weights 500, 700, 800)
- **Spoonacular** - External source for recipe images and full recipe links

No frameworks, libraries, package managers, or build steps are required.

---

## Project Structure

```
RECIPE_BOOK/
├── INDEX.HTML      # Main page with all recipe cards and header markup
├── STYLE.CSS       # All styles for layout, cards, header, and buttons
├── index.js        # JavaScript for saves and search interactivity
└── README.md
```

---

## Features

- Recipe card grid displaying dish name, image, and ingredient list
- Header with app title "Recipe Book"
- "My Saves" button with a heart icon to bookmark favourite recipes
- Search button with a magnifying glass icon to filter recipes
- External links to full recipe pages on Spoonacular (open in new tab)
- Outfit font from Google Fonts for a clean, modern look
- Pure static site — no build step, works by opening the HTML file directly

---

## Recipes Included

The app currently features five hardcoded recipes:

| Recipe | Key Ingredients |
|---|---|
| Classic Pancakes | All-purpose flour, baking powder, milk, egg, butter |
| Spaghetti Aglio e Olio | Spaghetti, garlic, olive oil, chili flakes, parsley |
| Veggie Stir-Fry | Broccoli, carrot, bell pepper, snap peas, soy sauce |
| Margherita Pizza | Pizza base, tomato sauce, mozzarella, fresh basil |
| Chocolate Chip Cookies | Butter, sugar, eggs, vanilla, flour, chocolate chips |

Each recipe links to its corresponding page on [Spoonacular](https://spoonacular.com) for the full method and instructions.

---

## Getting Started

No installation or build step is needed. Clone the repository and open the file directly in a browser.

```bash
git clone https://github.com/annanyaa03/RECIPE_BOOK.git
cd RECIPE_BOOK
```

Then open `INDEX.HTML` in any modern web browser:

```bash
# macOS
open INDEX.HTML

# Linux
xdg-open INDEX.HTML

# Windows
start INDEX.HTML
```

Or use a local development server for live reloading:

```bash
# Using VS Code Live Server extension, or:
npx serve .
```

---

## Deployment

This is a fully static site and can be hosted anywhere that serves static files.

**Deploy to GitHub Pages:**
Push the repository to GitHub and enable GitHub Pages from the repository settings, pointing it to the `main` branch root.

**Deploy to Netlify:**
Drag and drop the project folder into the Netlify dashboard, or connect the GitHub repository directly.

**Deploy to Vercel:**
```bash
npx vercel
```

---

## Author

[annanyaa03](https://github.com/annanyaa03)
