# 🚘 DriveX --- Premium Car Rental Website

```{=html}
<p align="center">
```
`<strong>`{=html}Find Your Perfect Ride`</strong>`{=html}`<br>`{=html} A
modern, responsive and interactive frontend car-rental experience built
with HTML, CSS and Vanilla JavaScript.
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">`{=html}
`<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">`{=html}
`<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111827" alt="JavaScript">`{=html}
`<img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON">`{=html}
`<img src="https://img.shields.io/badge/Responsive-Design-08BFFF?style=for-the-badge" alt="Responsive Design">`{=html}
`<img src="https://img.shields.io/badge/Frontend-Only-111827?style=for-the-badge" alt="Frontend Only">`{=html}
```{=html}
</p>
```

------------------------------------------------------------------------

## ✨ Overview

**DriveX** is a premium, responsive car-rental website designed to make
discovering, comparing and booking vehicles simple and engaging.

The interface combines a cinematic automotive visual style with a clean
**DriveX cyan + deep navy** design language. Users can browse a vehicle
catalogue, search and filter cars, inspect detailed specifications,
create rental bookings, apply promotional codes, view booking
confirmations and review browser-stored booking history.

The project is intentionally **frontend-only** and uses browser storage
for demonstration purposes.

> **Design goal:** Create the feeling of a premium automotive platform
> rather than a basic rental form.

------------------------------------------------------------------------

## 🎯 Core Experience

``` text
                    ┌───────────────────┐
                    │      DriveX       │
                    │ Premium Rentals   │
                    └─────────┬─────────┘
                              │
             ┌────────────────┼────────────────┐
             ▼                ▼                ▼
        Discover Cars     Compare Cars     Search/Filter
             │                │                │
             └────────────────┼────────────────┘
                              ▼
                       Vehicle Details
                              │
                              ▼
                        Book Your Car
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
              Booking Summary     Promo Discount
                    │                   │
                    └─────────┬─────────┘
                              ▼
                       Confirmation
                              │
                              ▼
                       Booking History
```

------------------------------------------------------------------------

# 🚀 Features

## 🧭 Navigation

-   DriveX logo
-   Home, Cars, How It Works, About and Contact
-   Light/Dark theme toggle
-   Login interface
-   Rent a Car CTA
-   Responsive mobile hamburger menu
-   Smooth navigation/scrolling
-   Theme preference persistence

## 🌌 Animated Hero Section

The hero is the primary visual statement of the website.

### Includes

-   Cinematic automotive background
-   **Find Your Perfect Ride** headline
-   Premium rental introduction
-   Explore Cars CTA
-   How It Works CTA
-   Customer rating
-   500+ cars available
-   50+ locations
-   10K+ happy customers
-   24/7 support
-   Floating search panel
-   Responsive layout
-   Subtle entrance and hover animations

### Motion Design

-   Fade-in content
-   Staggered text entrance
-   Button hover lift
-   Soft cyan glow
-   Floating glass cards
-   Subtle background movement
-   Mouse/parallax interaction on supported screens
-   Scroll-based content movement
-   Reduced-motion support

> Animations should remain subtle so the website feels premium rather
> than distracting.

------------------------------------------------------------------------

# 🚗 Vehicle Catalogue

DriveX currently includes **8 vehicles**:

  Vehicle                 Category     Price / Day Availability
  ----------------------- ---------- ------------- --------------
  Toyota Fortuner         SUV               ₹4,500 Available
  Hyundai Creta           SUV               ₹2,200 Available
  Mahindra Thar           SUV               ₹3,500 Available
  Kia Seltos              SUV               ₹2,400 Available
  Honda City              Sedan             ₹2,000 Available
  BMW 3 Series            Luxury            ₹7,500 Available
  Mercedes-Benz C-Class   Luxury            ₹8,500 Unavailable
  Ford Mustang            Sports           ₹10,000 Available

Each card can display:

-   Vehicle image
-   Availability status
-   Vehicle name
-   Category
-   Fuel type
-   Transmission
-   Seats
-   Rating
-   Daily rental price
-   View Details
-   Book Now

------------------------------------------------------------------------

# 🔎 Search & Filtering

Users can discover vehicles using:

### Search

-   Car name
-   Car model

### Category

-   All Cars
-   SUV
-   Sedan
-   Luxury
-   Sports
-   Hatchback

### Price

-   Under ₹2,000
-   ₹2,000--₹5,000
-   Above ₹5,000

### Availability

Filter vehicles according to availability.

Additional UX includes a Clear Filters action, dynamic result updates
and a no-results state.

------------------------------------------------------------------------

# 🏷️ Vehicle Detail Experience

Selecting a vehicle opens a comprehensive detail interface.

### Vehicle Information

-   Image gallery
-   Favourite
-   Share
-   Booking CTA
-   Customer rating and reviews
-   Fuel type
-   Transmission
-   Seats and doors
-   Drive type
-   Manufacturing year

### Performance

-   Engine
-   Displacement
-   Horsepower
-   Torque
-   Mileage
-   Top speed
-   0--100 km/h acceleration

### Dimensions & Equipment

-   Length
-   Width
-   Height
-   Wheelbase
-   Boot space
-   Exterior colour
-   Interior colour
-   Vehicle specifications
-   Comfort features
-   Safety features
-   Exterior equipment
-   Similar vehicles

------------------------------------------------------------------------

# ❤️ Favourite System

Users can save favourite vehicles directly in the browser.

Favourite state is stored with:

``` text
LocalStorage
```

------------------------------------------------------------------------

# 🛡️ Why Choose DriveX?

-   🛡️ Safe & Reliable
-   💰 Best Prices
-   ⚡ Quick Booking
-   🕐 24/7 Support

Cards should use subtle hover motion and DriveX accent highlights.

------------------------------------------------------------------------

# 🧭 How It Works

### 01 --- Choose Your Car

Browse the fleet and select the vehicle that fits your journey.

### 02 --- Select Rental Dates

Choose pickup and return dates and times.

### 03 --- Enter Your Details

Provide personal, trip and vehicle preferences.

### 04 --- Confirm Booking

Review pricing and booking information before confirmation.

------------------------------------------------------------------------

# 🎁 Special Offer

### Weekend Offer

**20% OFF your next ride**

Promo code:

``` text
DRIVE20
```

The code can be entered in the booking summary and the total updates
when the promotion is successfully applied.

------------------------------------------------------------------------

# 📋 Booking System

The booking form collects:

### Personal Information

-   Full name
-   Phone number
-   Email address

### Vehicle & Trip

-   Selected vehicle
-   Pickup location
-   Return location
-   Pickup date
-   Return date
-   Pickup time
-   Return time

### Preferences

-   Vehicle type
-   Transmission
-   Fuel preference
-   Additional message

### Validation

The form validates:

-   Required fields
-   Valid input
-   Pickup date
-   Return date
-   Return date cannot be earlier than pickup date

------------------------------------------------------------------------

# 💳 Booking Summary

The live summary includes:

-   Selected vehicle
-   Category
-   Transmission
-   Seats
-   Pickup details
-   Return details
-   Rental duration
-   Base rental price
-   Insurance
-   Additional services
-   Security deposit
-   Taxes & fees
-   Total amount

The selected vehicle and calculated total update dynamically.

------------------------------------------------------------------------

# 🎉 Booking Confirmation

After a successful booking, DriveX presents:

-   Confirmation message
-   Unique booking ID
-   Selected vehicle
-   Pickup date
-   Return date
-   Pickup location
-   Return location
-   Rental duration
-   Total cost
-   Pre-pickup instructions

Actions:

-   View booking
-   Download receipt
-   Share booking
-   Return to Home

------------------------------------------------------------------------

# 📊 Admin Dashboard

The frontend demonstration dashboard displays:

-   Total bookings
-   Active rentals
-   Total revenue
-   Popular car
-   Recent booking history

> ⚠️ The dashboard uses browser-stored booking information. It is not
> connected to a real server or database.

------------------------------------------------------------------------

# 👤 Login & Account Interface

The login overlay includes:

-   Email login
-   Password
-   Show/hide password
-   Remember me
-   Forgot password
-   Google login UI
-   Apple login UI
-   Sign-up form
-   Password recovery form

> Authentication is currently a frontend UI demonstration only. No real
> authentication provider is connected.

------------------------------------------------------------------------

# ⭐ Customer Testimonials

Sample reviews are included from:

-   Rahul Sharma
-   Priya Mehta
-   Amit Verma

Each includes a five-star rating, customer comment, name and city.

------------------------------------------------------------------------

# ❓ FAQ

Interactive accordion topics:

-   What documents are required?
-   How can I cancel my booking?
-   Can I extend my rental?
-   Is fuel included?
-   What happens after I submit a booking?

------------------------------------------------------------------------

# 🌓 Light & Dark Mode

DriveX supports Light and Dark themes.

### Light Mode

-   Bright surfaces
-   Dark readable text
-   Clean cards
-   Cyan DriveX accents
-   Cinematic dark hero

### Dark Mode

-   Deep navy backgrounds
-   Light typography
-   Dark premium cards
-   Cyan accents
-   Cinematic automotive visuals

### Hero Theme Rule

The hero contains a dark photographic background. Therefore hero
typography should remain high-contrast in **both themes**.

Light Mode should **not** automatically turn hero text dark.

Use dedicated hero variables such as:

``` text
--hero-text-primary
--hero-text-secondary
--hero-accent
--hero-overlay
```

This prevents hero content from disappearing over the vehicle image.

------------------------------------------------------------------------

# 🌗 Theme Toggle UX

The theme toggle should:

-   Switch Light ↔ Dark
-   Use sun/moon icons
-   Animate subtly
-   Persist the selected theme
-   Work across all pages
-   Avoid duplicate theme states
-   Avoid white/black flashes
-   Remain keyboard accessible

Suggested LocalStorage key:

``` text
drivex-theme
```

Suggested values:

``` text
light
dark
```

------------------------------------------------------------------------

# 🎨 Design System

### Primary Accent

``` text
DriveX Cyan
#08BFFF
```

### Dark Foundation

``` text
Deep Navy
#050B14
```

### Primary Light Text

``` text
#F8FAFC
```

### Secondary Text

``` text
#94A3B8
```

### Design Language

DriveX combines:

-   Premium automotive styling
-   Deep navy backgrounds
-   Cyan highlights
-   Glassmorphism
-   Soft borders
-   Large typography
-   Rounded cards
-   Cinematic imagery
-   Micro-interactions
-   Subtle motion

------------------------------------------------------------------------

# ✨ Animation & Interaction System

Animations communicate hierarchy and interaction.

### Page Entrance

``` text
opacity: 0 → 1
translateY(20px) → translateY(0)
```

### Card Hover

``` text
translateY(-4px)
```

with subtle shadow/border enhancement.

### Buttons

``` text
translateY(-2px)
```

with a soft DriveX cyan glow.

### Images

Use subtle:

``` text
scale(1.02)
```

Avoid aggressive zooming.

### Modals

Use:

``` text
opacity + scale
```

instead of abrupt appearance.

### Navigation

Active links should have clear active state, smooth transition and cyan
accent.

------------------------------------------------------------------------

# ♿ Accessibility & UX

-   Keyboard-friendly interactive controls
-   Visible `:focus-visible` states
-   Accessible buttons and forms
-   Sufficient contrast
-   Reduced-motion support

Use:

``` css
@media (prefers-reduced-motion: reduce)
```

to reduce parallax, background movement and large entrance animations.

------------------------------------------------------------------------

# 📱 Responsive Design

DriveX is designed for:

-   Desktop
-   Laptop
-   Tablet
-   Mobile

Mobile navigation uses a hamburger menu.

On small screens, content should stack naturally:

``` text
Navigation
↓
Hero
↓
Search
↓
Categories
↓
Vehicle Cards
↓
Benefits
↓
How It Works
↓
Offer
↓
About
↓
Testimonials
↓
FAQ
↓
Footer
```

------------------------------------------------------------------------

# 🧩 Technical Architecture

``` text
DriveX
│
├── Index.html
├── style.css
├── script.js
├── data-loader.js
├── details-content.js
├── cars.json
├── Image Assets
│   ├── Vehicle images
│   ├── DriveX logos
│   ├── Favicon
│   └── Promotional images
└── README.md
```

------------------------------------------------------------------------

# 📁 Project Files

  File                   Purpose
  ---------------------- --------------------------------------------------------
  `Index.html`           Main website structure and sections
  `style.css`            Styling, responsive layouts and animations
  `script.js`            Interactions, filtering, bookings, theme and dashboard
  `data-loader.js`       Dynamic vehicle JSON loading
  `details-content.js`   Detailed vehicle view generation
  `cars.json`            Vehicle catalogue data
  Image assets           Vehicles, branding, favicon and promotional visuals
  `README.md`            Project documentation

------------------------------------------------------------------------

# ⚙️ How It Works

### Vehicle Data

``` text
cars.json
     ↓
data-loader.js
     ↓
Vehicle Catalogue
     ↓
Search / Filter
     ↓
Vehicle Details
```

### Booking

``` text
Vehicle
   ↓
Booking Form
   ↓
Validation
   ↓
Price Calculation
   ↓
Promo Code
   ↓
Confirmation
   ↓
LocalStorage
```

### Theme

``` text
Theme Toggle
      ↓
Global Theme State
      ↓
HTML data-theme
      ↓
CSS Variables
      ↓
Entire Website
```

------------------------------------------------------------------------

# 💾 Browser Storage

LocalStorage is used for frontend demonstration functionality such as:

-   Theme preference
-   Favourite vehicles
-   Booking history

No external database is required for the demo.

------------------------------------------------------------------------

# 🖼️ Image Handling

Vehicle images include fallback behavior when an image fails to load.

Recommended practices:

-   Responsive image sizing
-   Preserve aspect ratio
-   Avoid layout shifts
-   `object-fit: cover` for vehicle cards
-   `object-fit: contain` for branding assets
-   Keep branding assets separate from vehicle photography

------------------------------------------------------------------------

# 🔐 Production Note

This is a **frontend demonstration**.

For production, add:

-   Real authentication
-   Secure backend APIs
-   Database
-   Server-side booking validation
-   Payment gateway
-   Secure sessions
-   Email/SMS confirmation
-   Real-time availability
-   Admin authorization
-   Input sanitization
-   Rate limiting
-   Secure secret management

Never store passwords or sensitive credentials in LocalStorage.

------------------------------------------------------------------------

# 🚀 Getting Started

1.  Place all project files in one project directory.
2.  Verify that `cars.json`, images, logos, favicon, CSS and JavaScript
    paths are correct.
3.  Open the project through a local development server.

For VS Code, a typical workflow is:

``` text
Install Live Server
→ Right-click Index.html
→ Open with Live Server
```

A local server is recommended because browsers may restrict some local
JSON/file operations.

------------------------------------------------------------------------

# 🧪 Testing Checklist

### Navigation

-   [ ] Home works
-   [ ] Cars works
-   [ ] How It Works works
-   [ ] About works
-   [ ] Contact works
-   [ ] Mobile menu works

### Theme

-   [ ] Light Mode works
-   [ ] Dark Mode works
-   [ ] Theme persists after refresh
-   [ ] No white flash
-   [ ] No black flash
-   [ ] Hero remains readable
-   [ ] Cards switch correctly
-   [ ] Footer switches correctly
-   [ ] Logo switches correctly

### Vehicles

-   [ ] Search works
-   [ ] Category filter works
-   [ ] Price filter works
-   [ ] Availability filter works
-   [ ] Clear Filters works
-   [ ] No-results state works
-   [ ] View Details works
-   [ ] Book Now works

### Booking

-   [ ] Required fields validate
-   [ ] Dates validate
-   [ ] Rental duration calculates
-   [ ] Total price updates
-   [ ] Promo code works
-   [ ] Confirmation appears
-   [ ] Booking history updates

### Responsive

-   [ ] Desktop
-   [ ] Tablet
-   [ ] Mobile
-   [ ] Mobile navigation
-   [ ] Booking form
-   [ ] Vehicle details
-   [ ] Admin dashboard

------------------------------------------------------------------------

# 🌐 Browser Compatibility

Designed for modern browsers including:

-   Google Chrome
-   Microsoft Edge
-   Mozilla Firefox
-   Safari

Test the final interface across multiple viewport sizes before
deployment.

------------------------------------------------------------------------

# 📈 Future Improvements

Possible future versions:

-   Real authentication
-   Backend API
-   Database
-   Real-time vehicle availability
-   Online payments
-   Email confirmations
-   SMS notifications
-   User profiles
-   Rental history
-   Advanced admin controls
-   Vehicle comparison
-   Location-based pickup
-   Map integration
-   Real customer reviews
-   Coupon management
-   Multi-language support
-   Currency selection
-   Progressive Web App support

------------------------------------------------------------------------

# 🎨 UX Philosophy

DriveX follows five UX principles:

### 01 --- Discover Quickly

Users should immediately understand what DriveX offers.

### 02 --- Compare Easily

Important vehicle information should be visible without unnecessary
interaction.

### 03 --- Book Simply

The booking flow should feel straightforward and predictable.

### 04 --- Trust the Interface

Clear pricing, availability and rental information should reduce
uncertainty.

### 05 --- Enjoy the Experience

Motion, imagery and micro-interactions should make the product feel
premium without slowing users down.

------------------------------------------------------------------------

# 🏁 Project Status

**Status:** ✅ Frontend Complete

**Type:** Frontend Demonstration

**Architecture:** Static frontend + JSON + LocalStorage

**Authentication:** UI only

**Payments:** Not connected

**Database:** Not connected

**Admin:** Frontend demonstration

------------------------------------------------------------------------

# 👨‍💻 Technologies

-   HTML5
-   CSS3
-   Vanilla JavaScript
-   JSON
-   LocalStorage
-   Google Fonts
-   SVG Icons
-   Unsplash Images

------------------------------------------------------------------------

# 📜 License

This project is intended for educational, internship and portfolio
demonstration purposes.

Make sure you have appropriate rights for any third-party images, fonts,
logos or external assets used in the website.

------------------------------------------------------------------------

# ⭐ DriveX

> **Find Your Perfect Ride.**

DriveX demonstrates how a modern car-rental experience can combine
**premium visual design, responsive UX, interactive vehicle discovery,
dynamic booking and polished motion design** in a lightweight frontend
application.

```{=html}
<p align="center">
```
Built with ❤️ for a modern automotive web experience.
```{=html}
</p>
```
