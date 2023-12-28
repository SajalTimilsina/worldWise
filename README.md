# WorldWise

This repository contains a React application called WorldWise that enables users to track their travels across the globe. It employs various components and functionalities to manage user data and provide an interactive experience.
![image](https://github.com/SajalTimilsina/worldWise/assets/19229631/26287270-eac9-47d8-ad2f-edd4a649965b)
![image](https://github.com/SajalTimilsina/worldWise/assets/19229631/1629c25d-1588-44db-9111-03fd013dabad)
![image](https://github.com/SajalTimilsina/worldWise/assets/19229631/a134a9d5-d9ec-4fb7-a79c-86f9dea04d76)


## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.

## Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application using Vite.
- `npm run lint`: Lints the code using ESLint.
- `npm run preview`: Opens a Vite preview server.
- `npm run server`: Initiates a JSON server to watch city data from `data/cities.json`.

## Dependencies

The application relies on several key dependencies:

- `json-server`: Simulates a REST API server to handle city data.
- `leaflet`: Utilized for interactive maps and markers.
- `react` and `react-dom`: Core libraries for building the UI.
- `react-datepicker`: Provides a date picker functionality.
- `react-leaflet`: Integrates React with Leaflet for map rendering.
- `react-router-dom`: Manages routing within the application.

## Components and Pages

### `AppLayout`

- Combines `Sidebar`, `Map`, and `User` components to form the main application layout.

### `Homepage`

- Landing page displaying an overview of the application's purpose and encouraging users to start tracking their travels.

### `Login`

- Allows users to log in to the application with predefined credentials or customize their login details.

### `Product`

- Displays details about the application's pricing or additional information about WorldWise.

### `Map`

- Uses Leaflet to render an interactive map where users can view cities and add new locations by clicking on the map.

## Contexts and Hooks

### `CitiesContext` and `AuthContext`

- Provide context for city data and user authentication, respectively.
- Includes hooks like `useCities` and `useAuth` to access context values and functionalities.

### `useGeolocation` and `useUrlPosition`

- Custom hooks to manage geolocation and URL-based position tracking.

## Contributing

Contributions to enhance WorldWise are welcome! Please feel free to submit pull requests or raise issues in the GitHub repository.
