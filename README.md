
# Food Ordering App (React + Tailwind)

A modern food ordering web application built with ReactJS for the frontend and Tailwind CSS for styling.

## Features

- Browse restaurants and food items
- Search for restaurants or food by name
- Filter restaurants by rating, veg/non-veg, fast delivery, and offers
- Lazy loading for restaurant cards (loads more on button click)
- Special items carousel
- Top restaurant chains carousel
- Responsive design for mobile and desktop
- Shimmer loading UI for better user experience
- Promotion labels for restaurants
- Routing for restaurant menu pages
- Add menu items to the cart from the restaurant menu page.
- View cart contents, update item quantities, and remove items.
- Cart icon in the header shows the current item count.
- Cart state is managed using React hooks or context for a seamless experience.

## Tech Stack

- **Frontend:** ReactJS(functional components,hooks)
- **Styling:** Tailwind CSS
- **Carousel:** react-slick, slick-carousel
- **Routing:** react-router-dom
- **Icons:** Font Awesome

## Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/Food-ordering-app-React-Tailwind.git
   cd Food-ordering-app-React-Tailwind
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the development server:**
   ```
   npm start
   ```

4. **Open in browser:**
   Visit [http://localhost:1234](http://localhost:1234)

## Folder Structure

```
src/
  components/
    App.js                   // Main app component, sets up routing
    Body.js                  // Homepage layout, carousels, filters, lazy loading
    Header.js                // Navigation bar and cart icon
    Footer.js                // Footer section
    RestaurantCard.js        // Displays restaurant details
    EnhancedRestaurantCard.js// Restaurant card with promotion label
    ResSpecialItemsCards.js  // Carousel for special food items
    RestaurantMenu.js        // Menu for a selected restaurant, add to cart
    Cart.js                  // Cart page: view, update, remove items
    ShimmerUi.js             // Shimmer loading effect
    withPromotionLabel.js    // HOC for promotion labels
    ErrorPage.js             // 404 and error handling
    SearchBar.js             // Search input for restaurants/food
    FilterButtons.js         // Filter UI for restaurants
  utils/
    Constants.js             // API endpoints and static constants
  App.js                     // Entry point for React app
  index.js                   // ReactDOM render
```

## Customization

- Update API endpoints in `src/utils/Constants.js` as needed.
- Modify Tailwind config for custom colors/styles.

## License

This project is for educational purposes.
