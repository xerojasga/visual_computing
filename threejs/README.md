# Three.js Animated Sphere Demo

This project showcases an interactive 3D scene built with React, Three.js, and React Three Fiber. The main feature is an animated sphere that moves in a circular trajectory while rotating on its axis, changing color, and scaling dynamically.

## Features

- **Animated 3D Sphere**: A sphere that follows a circular path while rotating on multiple axes
- **Dynamic Color Changes**: The sphere's color shifts through the color spectrum over time
- **Distortion Effects**: The sphere's surface has a distortion effect that adds visual interest
- **Interactive Camera Controls**: Users can rotate, pan, and zoom the camera to view the scene from different angles
- **Grid and Axes Helpers**: Visual aids to help understand the 3D space

## Technologies Used

- React
- Three.js
- React Three Fiber
- React Three Drei
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

2. Install dependencies:

   ```sh
   npm install
   ```

### Running the Application

To start the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To create a production build:

```sh
npm run build
```

To preview the production build:

```sh
npm run preview
```

## Project Structure

- `src/components/animated-object.tsx`: Contains the animated sphere component with its animation logic
- `src/components/scene.tsx`: Sets up the 3D scene with lighting, camera controls, and the animated object
- `src/App.jsx`: Main application component that renders the scene

## Customization

You can modify the animation parameters in `animated-object.tsx` to change:

- The radius of the circular path
- The rotation speed
- The scaling effect
- The color transition speed
- The distortion effect
