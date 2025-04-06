# Aykhan Aliyev - Personal Chef Website

A responsive professional website for Aykhan Aliyev, a personal chef based in Baku, Azerbaijan. This project showcases modern React development with responsive design principles and a focus on user experience.

## Project Overview

This is a single-page application built with React that provides information about the chef's services, showcases a gallery of culinary creations, allows viewing of scheduled events, and provides contact functionality.

### Live Demo

[Coming Soon]

## Technologies Used

- **React** - Frontend library
- **React Router** - Navigation and routing
- **CSS Modules** - Styling approach
- **Vite** - Build tool and development server
- **Formspree** - Form handling for the contact page
- **Google Translate API** - Translation functionality for international clients

## Features

- **Responsive Design**: Fully responsive layout that works on all devices from mobile to desktop
- **Dynamic Routing**: Clean URL structure with React Router
- **Professional Gallery**: Image gallery with modal views and descriptions
- **Event Calendar**: Integration with Google Calendar for displaying chef's availability
- **Contact Form**: Secure contact form that protects the client's email address
- **Language Support**: Translation functionality for Russian-speaking clients
- **Mobile Navigation**: Responsive hamburger menu for small screens

## Project Structure

```
project-root/
├── public/               # Static assets and images
├── src/
│   ├── components/       # Reusable components
│   │   ├── Footer/       # Site footer
│   │   ├── Navbar/       # Navigation with responsive design
│   │   └── ...
│   ├── pages/            # Main page components
│   │   ├── Home/         # Landing page
│   │   ├── About/        # About the chef
│   │   ├── Services/     # Services offered
│   │   ├── Events/       # Calendar integration
│   │   ├── Gallery/      # Photo gallery
│   │   └── Contact/      # Contact form
│   ├── App.jsx           # Main application component
│   ├── Global.css        # Global styles
│   └── index.jsx         # Application entry point
├── .eslintrc.js          # ESLint configuration
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies and scripts
```

## Development Highlights

- **Custom Styling System**: Created a consistent design language using CSS variables and modular components
- **Accessibility**: Focus on accessible design principles with proper ARIA attributes and keyboard navigation
- **Performance Optimization**: Efficient image loading and component rendering
- **Modular Architecture**: Component-based design for maintainability and scalability
- **Clean Code Practices**: Consistent formatting, meaningful naming conventions, and code organization

## Local Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```

## Design Decisions

- **Dark Mode Aesthetic**: Implemented a sophisticated dark color scheme to highlight the chef's culinary creations
- **Card-Based UI**: Used card components throughout the site for consistency and visual hierarchy
- **Custom Form Validation**: Client-side validation with helpful error messages for better UX
- **Modal Interactions**: Modal dialogs for gallery images to provide detailed views without page navigation
- **Visual Feedback**: Hover effects and transitions to create an interactive feel

## Future Enhancements

- Integration with Instagram API to show real-time updates of the chef's creations
- Online booking system for services
- Blog section for recipes and culinary tips
- Animation enhancements for smoother transitions between pages

---

*Note: This project is currently in development. The code is publicly viewable for portfolio purposes, but this is not the production version of the website.*