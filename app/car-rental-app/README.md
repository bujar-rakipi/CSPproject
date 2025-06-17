# Car Rental App

This is a simple online car rental application built with React Native. The app allows users to browse available cars, view details, and manage their rentals.

## Features

- Browse a list of available cars for rent
- View detailed information about each car
- Search for cars based on specific criteria
- Manage current and past rentals
- User-friendly interface with smooth animations and gestures

## Project Structure

```
car-rental-app
├── src
│   ├── components
│   │   ├── CarCard.tsx
│   │   ├── Header.tsx
│   │   └── RentalForm.tsx
│   ├── hooks
│   │   └── useCarList.ts
│   ├── navigation
│   │   └── AppNavigator.tsx
│   ├── pages
│   │   ├── CarDetails.tsx
│   │   ├── Home.tsx
│   │   ├── MyRentals.tsx
│   │   └── Search.tsx
│   ├── animations
│   │   └── FadeInView.tsx
│   ├── gestures
│   │   └── SwipeableCarCard.tsx
│   └── App.tsx
├── package.json
└── tsconfig.json
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd car-rental-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm start
   ```

## Usage

- Launch the app on your mobile device or emulator.
- Use the home page to browse available cars.
- Click on a car to view its details.
- Use the search feature to find specific cars.
- Manage your rentals from the My Rentals page.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.