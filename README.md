# SDE Intern Assigment


## Project Overview

This project aims to develop a user-friendly and visually engaging checkout experience for online shopping. The assignment involves building the final three steps of the checkout process: Checkout Page, Payment Options Page, and Order Confirmation Page. The project is implemented using Next.js and involves handling loading, error, and empty states, implementing local API caching, interactive elements, form validation, and ensuring responsiveness.


### Installation

1. Clone the repository

```sh
   git clone https://github.com/Utkarsh1504/gwwas
  ```

2. Install Dependency

```sh
   npm install
  ```

3. Run Dev Server
```sh
   npm run dev
```

## Page
- `CartPage`: "/" is cart page
- `CheckoutPage`: displays order summary and a call-to-action button to proceed.
- `PaymentOptionsPage`: Allows users to choose their preferred payment method.
- `OrderConfirmationPage`: order status message.


## Additional Features

- **Theme Switching**: Dynamic theme switching (not implemented yet).
- **White Labeling**: Ability to customize color scheme, logo, and styling based on brand identity (not implemented yet).

## Dependencies

- Next.js
- Axios/Fetch (or any HTTP client)
- Tailwind CSS (for styling)
- Context APIs


## Demo

Live Demo: [Link to Demo](https://gwwas-pi.vercel.app/)


## Design Choices

- Used Next.js for server-side rendering and better performance.
- Implemented separate components for each step of the checkout process for better code organization.
- Utilized local API caching to improve performance and reduce unnecessary requests.
- Used React hooks for state management (Redux could be integrated if required).
- Applied responsive design principles to ensure the application works well on various screen sizes.
- Implemented smooth transitions and animations for enhanced user experience.

## Challenges Faced

- Implementing theme switching dynamically based on brand identity.
- Proper validation of payment information according to selected payment method.
- Ensuring consistent styling across all pages and components.

## Future Improvements

- Complete implementation of theme switching and white labeling feature.
- Enhance payment validation to handle various edge cases.
- Improve accessibility features for better user experience.
