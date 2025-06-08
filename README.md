# WewantWaste Full Stack Developer Assessment

This project is a Next.js application that uses tailwind for styling and typescript for static typing designed for managing waste management skip hire options. It provides a user-friendly interface for selecting skip sizes, viewing pricing details, and understanding the availability of skips based on specific criteria.


## Features

- **Skip Management**: Displays a list of skip options with details such as size, hire period, pricing, and availability.
- **Dynamic Styling**: Implements light and dark mode themes using Tailwind CSS and custom CSS variables.
- **Responsive Design**: Ensures the UI is accessible and visually appealing across devices.
- **Data-Driven UI**: Skip options are dynamically rendered from a predefined dataset, allowing for easy updates and scalability.
- **Custom Error Page**: Display an improved error page that allows users to refresh, mainly as a result of a server side error
- **Dark Mode Support**: The application supports dark mode with tailored color schemes for better user experience in low-light environments.


## Approach

The application was built with the following principles:

1. **Scalability**: The codebase is structured to allow easy addition of new features and skip options.
2. **Reusability**: Components are designed to be reusable across different parts of the application.
3. **Performance**: Leveraging Next.js for server-side rendering and optimized builds.
4. **Accessibility**: Ensures the UI is accessible to all users, including support for dark mode and responsive design


## Key UI Improvements
- Light and dark mode displays
- Interactive and distinct display cards
- A larger and informative drawer
- Distinct colors to display important information regarding a skip
- Mobile responsiveness
- Skeleton loaders

## UI Setup

The UI is built using:

- **Tailwind CSS**: For utility-first styling.
- **Custom CSS Variables**: For theme management and consistent styling.
- **Component-Based Architecture**: Reusable components like `header.tsx`, `skip-card`, `skip-drawer` and `select-skip-wrapper.tsx` are used to maintain modularity and scalability.
- **Shadcn Components**:  Predisgned , customisable and accessible components such as buttons, cards and badges
- **Next Themes**: Easily manage dark and light themes across the app
## Pages

/ - Landing Page, fetches and renders the skip options.


## Getting Started
First, clone the repo
```bash
git clone git@github.com:Victor-Nyangi/remwaste-ui.git
```

Second, install the dependencies
```bash
pnpm i
```

Third, run the development server:
```bash
pnpm run dev

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Submitted by Victor Gichui Nyangi
