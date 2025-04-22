# Processing 3D Pyramid Animation

This project demonstrates a 3D animation created with Processing. The main feature is an animated pyramid that moves in a sinusoidal pattern, rotates on its Y-axis, and scales dynamically.

## Features

- **Animated 3D Pyramid**: A colorful pyramid that follows a sinusoidal path
- **Dynamic Movement**: The pyramid moves in a figure-eight pattern (sinusoidal in X and Y)
- **Continuous Rotation**: The pyramid rotates around its Y-axis
- **Pulsing Scale**: The pyramid's size pulses between 50% and 150% of its original size
- **Colorful Faces**: Each face of the pyramid has a different color for visual interest

## Technologies Used

- Processing 3.x
- Java

## Getting Started

### Prerequisites

- [Processing](https://processing.org/download/) (version 3.x or higher)

### Installation

1. Download and install Processing from [processing.org](https://processing.org/download/)
2. Clone or download this repository
3. Open the `sketch_processing.pde` file in the Processing IDE

### Running the Application

1. Open the Processing IDE
2. Open the `sketch_processing.pde` file
3. Click the "Run" button (play icon) in the top-left corner of the IDE

The animation will start in a new window with dimensions 600x600 pixels.

## Project Structure

- `sketch_processing.pde`: Contains the main Processing sketch with setup, draw, and pyramid drawing functions

## Code Explanation

- `setup()`: Initializes the sketch with a 600x600 pixel canvas in 3D mode
- `draw()`: Runs continuously to:
  - Clear the background
  - Calculate time-based animation values
  - Position, rotate, and scale the pyramid
  - Draw the pyramid
- `drawPyramid()`: Creates a pyramid with colored faces using TRIANGLES and QUADS

## Customization

You can modify the animation parameters in the `draw()` function to change:

- The movement pattern by adjusting the sine/cosine multipliers
- The rotation speed by changing the multiplier for `rotateY(t)`
- The scaling effect by modifying the `map()` function parameters
- The pyramid size by changing the parameter in `drawPyramid(100)`

You can also change the colors of the pyramid faces in the `drawPyramid()` function.
