# DriveX — Car Rental Management System

DriveX is a responsive, frontend-only car-rental experience built as an internship project. It uses a premium dark automotive visual system and simulated booking flow—no backend or payment service is required.

## Features

- Responsive hero, sticky navigation, car categories and promotional sections
- Eight dynamically rendered vehicle cards with search, category, price and availability filters
- Car-details modal with keyboard and overlay dismissal
- Booking form with required-field, phone, email and date validation
- Booking confirmation and LocalStorage persistence under `drivexBookings`
- FAQ accordion, mobile navigation, scroll-reveal effects and back-to-top button

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

## Folder Structure

```text
CAR Rental/
├── Index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── ChatGPT Image Sep 1, 2026, 05_30_16 PM.png
└── README.md
```

## How to Run

1. Open the project folder in VS Code.
2. Start `Index.html` with Live Server, or open it directly in a modern browser.
3. An internet connection is needed for the Google font and vehicle photographs.

## Frontend Functionality

Bookings are demonstration data stored only in your browser's LocalStorage; no payments or sensitive details are collected. The application can later replace the local `cars` array and booking save operation with REST API calls.

## Future Improvements

- Connect inventory and booking data to a secure backend API.
- Add account management and a booking-history view.
- Serve optimized local images from a CDN.

## Author

DriveX internship frontend project.
