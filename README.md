# 🛍️ GameHub - E-Commerce Product Listing App

GameHub is a simple e-commerce React app built for showcasing gaming gear. This project is part of the Advanced JavaScript & Intro to React module and demonstrates core React concepts like component structure, state management, and props, along with optional enhancements like routing, category filtering, and a working cart.

---

## 🚀 Features

- 🧩 Modular React component structure
- 🛒 Add to cart functionality with live count
- 🎯 Product filtering by category
- 🔍 Detailed product view via dynamic routing
- 💸 Cart total calculation and checkout simulation
- 📱 Responsive design with Bootstrap

---

## 🧠 Learning Objectives Met

✅ Use of `useState`, `useEffect`, and `useContext`
✅ Data passed via props across component hierarchy
✅ Application of parent-child structure (`App → ProductList → ProductCard`)
✅ Custom CSS and Bootstrap layout
✅ React Router for page navigation and dynamic routes
✅ Cart logic with Context API and state persistence during session

---

## 🗂️ Component Structure

```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ...
├── pages/
│   ├── Home.jsx
│   ├── ProductList.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   └── EditProduct.jsx
├── contexts/
│   ├── CartContext.js
│   └── CartProvider.jsx
```

---

## 🔧 Setup Instructions

1. Clone the repo
2. Run `npm install`
3. Start the dev server with `npm run dev` (for Vite) or `npm start` (for CRA)
4. Navigate to `http://localhost:3000`

---

## 🧪 Test It Yourself

- ✅ Add multiple items to cart
- ✅ Remove individual items
- ✅ View cart total and item count
- ✅ Checkout to clear cart with confirmation

---

## 📦 Tools Used

- React
- React Router DOM
- Context API
- Axios
- Bootstrap
- Vite (or Create React App, depending on setup)

---

## 📸 Screenshots

_Add screenshots of your home page, product page, and cart page here (optional but recommended)._

---

## 📤 Submission

✅ All required and bonus features implemented
✅ Deployed via local dev server
✅ Ready for evaluation

---

## 🙌 Author

Built by Joshua for the Advanced JS + React module.
