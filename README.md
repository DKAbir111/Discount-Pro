<div align="center">

# 🏷️ Discount PRO

### *The Ultimate Coupon Aggregator for Bangladeshi E-Commerce*

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-4F46E5?style=for-the-badge)](https://effervescent-profiterole-63765b.netlify.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

![Discount PRO Preview](https://i.ibb.co.com/kgCsCFLd/demo.png)

## 📌 Overview

**Discount PRO** is a full-stack coupon aggregation platform that helps Bangladeshi shoppers discover, save, and apply discount codes from top e-commerce stores — all in one place. Built with a focus on performance, clean UX, and secure authentication.

> 🔗 **Live Site:** [https://effervescent-profiterole-63765b.netlify.app/](https://effervescent-profiterole-63765b.netlify.app/)

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Email/password & Google Sign-In via Firebase |
| 🏪 **Browse Coupons** | Explore deals from multiple Bangladeshi e-commerce stores |
| 📋 **One-Click Copy** | Instantly copy coupon codes at checkout |
| 🔖 **Favorites** | Save, manage, and revisit preferred coupons |
| 🔍 **Category Filter** | Filter by electronics, fashion, and more |
| ⏱️ **Real-Time Updates** | Always shows the latest codes and expiry dates |
| 🔒 **Private Routes** | Authenticated-only access to sensitive pages |
| 🚫 **Custom 404** | Friendly error page for invalid routes |

---

## 🖥️ Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A4F5A?style=flat-square&logo=daisyui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Lottie](https://img.shields.io/badge/Lottie_React-FF6F61?style=flat-square)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FFC107?style=flat-square)

### Backend & Auth
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Auth-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=JSON-web-tokens&logoColor=white)

---

## 📁 Project Structure

```
discount-pro/
├── public/
│   └── index.html
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Home, CouponDetails, Login, Signup, Favorites, 404
│   ├── context/            # Auth context (Firebase)
│   ├── hooks/              # Custom React hooks
│   ├── routes/             # Protected & public routes
│   └── App.jsx
├── .env                    # Firebase config (not committed)
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js `v18+`
- npm or yarn
- Firebase project with Authentication enabled

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/DKAbir111/discount-pro.git

# 2. Navigate into the project
cd discount-pro

# 3. Install dependencies
npm install

# 4. Add your Firebase config to .env
cp .env.example .env
# Fill in your Firebase credentials

# 5. Start the development server
npm start
```

App runs at **`http://localhost:3000`**

---

## 🔐 Environment Variables

Create a `.env` file in the root with:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

---

## 📸 Pages at a Glance

- **🏠 Home** — Featured coupons, category sidebar, responsive coupon grid
- **🏷️ Coupon Details** — Full discount info, expiry date, copy-code button
- **🔖 Favorites** — Manage saved coupons
- **🔑 Login / Register** — Email & Google auth with password recovery
- **❌ 404 Page** — Clean error handling for unknown routes

---

## 🚀 Roadmap

- [ ] Advanced filters (expiry date, minimum discount %)
- [ ] Email alerts for new & expiring coupons
- [ ] User coupon rating & review system
- [ ] Admin panel for coupon management
- [ ] OAuth expansion (Facebook, Twitter)

---

## 👤 Author

**Darun Karas Abir**

[![GitHub](https://img.shields.io/badge/GitHub-DKAbir111-181717?style=for-the-badge&logo=github)](https://github.com/DKAbir111)

---

<div align="center">

⭐ **If this project helped you or impressed you, please give it a star!** ⭐

*Built with ❤️ in Bangladesh*

</div>
