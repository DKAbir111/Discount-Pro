# **Discount PRO** - Coupon Aggregator

Welcome to **Discount PRO**, the ultimate app for finding the latest discount codes from top Bangladeshi e-commerce stores. This app allows users to browse and access discount codes easily while also offering a smooth sign-up and login experience.

## Live Website

Check out the live demo of **Discount PRO** here:  
**[Live Demo Link](#)** *(https://effervescent-profiterole-63765b.netlify.app/)*

---

## Project Overview

**Discount PRO** is an intuitive coupon-collecting application that aggregates discount codes from various Bangladeshi e-commerce stores. It features user-friendly sign-up and login options, easy browsing for available coupons, and quick copying of discount codes.

---

## Features

### Core Features
- **User Authentication**: Users can sign up and log in via email or Google through **Firebase Authentication**.
- **Browse Coupons**: View available coupons from different e-commerce stores.
- **Coupon Details**: Detailed view of each coupon including the discount amount and expiry dates.
- **Copy Coupon Code**: Users can copy the coupon code with a single click for easy application at checkout.
- **Category Filter**: Users can filter coupons based on categories (e.g., electronics, fashion, etc.).
- **Favorite Coupons**: Save preferred coupons for future use in the **Favorites** section.
- **Real-Time Updates**: Display the most up-to-date coupon codes and expiry dates.
- **404 Error Page**: Users are redirected to a 404 page for invalid routes.

### **Authentication Features:**
- **Firebase Authentication**: Secure authentication with options for email/password and Google login.
- **Password Recovery**: Users can recover their password if they forget it.
- **Private Routes**: Secure routes for authenticated users.

---

## Installation and Setup

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YourGitHubUsername/discount-pro.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd discount-pro
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

   Your app should now be running on `http://localhost:3000`.

---

## React Concepts and Tools Used

- **React Router** for navigating between pages and handling dynamic routes.
- **React Hooks** (`useState`, `useEffect`, `useNavigate`, `useLocation`) for managing component state and routing.
- **Firebase Authentication** for secure login/signup and Google authentication.
- **React Toastify** for user notifications when coupons are copied or added to favorites.
- **React Icons** for displaying icons like home, favorites, etc.
- **Axios** for handling HTTP requests to the backend (fetching coupon data).
- **Tailwind CSS** for utility-first CSS styling.
- **DaisyUI** for pre-built Tailwind components like buttons, modals, and form elements.
- **LocalStorage** for saving user preferences and favorite coupons across page reloads.

---

## Pages

### Home Page

- **Hero Section**: A large banner showcasing featured coupons or stores.
- **Coupon Grid**: Displaying available coupons in a responsive grid, sorted by latest or best discounts.
- **Categories Sidebar**: A sidebar to filter coupons by store or category.
- **Favorite Coupons**: A quick link to view coupons saved by the user.

### Coupon Details Page

- Displays detailed coupon information:
  - Discount amount, expiration date, and terms of use.
  - **Copy Code** button to easily copy the coupon code.

### Login & Signup Pages

- **Email/Password Sign Up**: Users can register with their email address.
- **Google Login**: Users can log in using their Google account.
- **Password Recovery**: A form for users to recover their password if they forget it.

### Favorites Page

- View saved coupons with the option to copy them or delete them from favorites.

### 404 Page

- **404 error page** displayed for invalid routes, indicating the page was not found.

---

## Features Implemented

- **User Authentication** with Firebase (Email/Password and Google login).
- **Coupon Browsing**: View and filter coupons by category or store.
- **Coupon Details**: See the discount and expiry details.
- **Real-Time Updates**: Display updated coupon codes.
- **Favorites Management**: Save coupons to a favorites list.
- **Toast Notifications** when copying codes or interacting with favorites.
- **Dynamic Page Titles** and **Favicon** based on the current page.
- **404 Error Handling** for invalid routes.

---

## Future Enhancements

- Add more filters for coupons (e.g., by expiration date, minimum discount).
- Integrate email alerts for new or expiring coupons.
- Implement a coupon rating system for users to rate their experience.
- Add support for more authentication methods, like Facebook or Twitter.

---

## Authors and Acknowledgments

- **Darun Karas Abir** (GitHub: [@DKAbir111](https://github.com/DKAbir111))
- Special thanks to all contributors and users who provide feedback.

