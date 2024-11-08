# GadgetHeaven ✨

Welcome to GadgetHeaven, your go-to destination for the latest and greatest gadgets! This project is a responsive e-commerce platform built with React, allowing users to browse, filter, and manage a variety of gadget products through an intuitive interface.

## Deployment

To deploy this project run

```bash
  https://gadget-heaven-official.netlify.app/
```

Project Requirement Document

```bash
  https://drive.google.com/file/d/1EqEN7Q9HqgVy9evMaGHjVE7GJ8W1SilT/view
```

## Key Features

- Responsive Design: Built to adapt across different devices.
- Shopping Cart and Wishlist: Easily add items to a cart or wishlist with persistent storage.
- Product Filtering and Sorting: Filter gadgets by category, sort items by price.
- Detailed Product Pages: View detailed information and specifications for each product.
- User Feedback with Toasts: Feedback for actions like adding items to the cart or wishlist.

## ⚙️ Technologies Used

React is the main framework used for building this dynamic, interactive web application. Modern ES6 features are used consitently to make the code more readable and efficient.

## React Concepts Used

- React Router: For navigating between pages.

- Hooks used:
  `useState`: Manages component-level state, such as form inputs, loading states, and toggle options.

`useEffect`: Used for side effects, such as fetching data or updating LocalStorage when cart or wishlist changes.

`useLocation`: Detects the current URL path to conditionally apply styles or set dynamic page titles.

`useNavigate`: Redirects users to different pages programmatically (e.g., to navigate to the home page after a successful purchase).

`useParams`: hook in React is particularly useful for this project’s routing and navigation, especially for handling dynamic routes like product detail pages.

- Conditional Rendering: For dynamic UI updates based on state.
- Dynamic Page Titles and Meta Tags: React Helmet is used to dynamically set the title and meta tags for each page, enhancing SEO and improving accessibility.

## Data storage

LocalStorage is used for handling and managing data
