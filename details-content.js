/**
 * DriveX Car Details Content Module
 * Renders comprehensive car detail page with all sections
 */

let detailsLastFocusElement = null;

/**
 * Format currency to Indian Rupees
 */
const formatPrice = (amount) => {
  return `₹${amount.toLocaleString('en-IN')}`;
};

/**
 * Get car data by ID from the cars array
 */
const getCarById = (carId) => {
  if (!window.cars || !Array.isArray(window.cars)) {
    console.error('Cars data not loaded');
    return null;
  }
  return window.cars.find(car => car.id === Number(carId));
};

/**
 * Get similar cars based on category
 */
const getSimilarCars = (car, limit = 3) => {
  if (!window.cars) return [];
  
  return window.cars
    .filter(c => c.id !== car.id && c.category === car.category)
    .slice(0, limit);
};

/**
 * Create rating stars
 */
const renderRating = (rating, reviews) => {
  const stars = Math.round(rating);
  return `
    <div class="detail-rating">
      <div class="stars">${'★'.repeat(stars)}${'☆'.repeat(5-stars)}</div>
      <p class="review-count">${rating} (${reviews} reviews)</p>
    </div>
  `;
};

/**
 * Create specification cards section
 */
const renderQuickSpecs = (car) => {
  const specs = [
    { label: 'Fuel', value: car.fuel },
    { label: 'Transmission', value: car.transmission },
    { label: 'Seats', value: `${car.seats}` },
    { label: 'Doors', value: `${car.doors}` },
    { label: 'Drive Type', value: car.driveType },
    { label: 'Year', value: car.year }
  ];

  return `
    <section class="quick-specs">
      <h2>Quick Specifications</h2>
      <div class="specs-grid">
        ${specs.map(spec => `
          <div class="spec-card">
            <p class="spec-label">${spec.label}</p>
            <p class="spec-value">${spec.value}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};

/**
 * Create image gallery section
 */
const renderGallery = (car) => {
  if (!car.images || car.images.length === 0) {
    return '';
  }

  return `
    <section class="gallery-section">
      <h2>Image Gallery</h2>
      <div class="gallery-main">
        <img id="mainGalleryImage" src="${car.images[0]}" alt="${car.name}" class="main-image">
      </div>
      <div class="gallery-thumbnails">
        ${car.images.map((img, idx) => `
          <button 
            class="thumbnail ${idx === 0 ? 'active' : ''}"
            data-image="${img}"
            onclick="changeMainImage(this)"
            aria-label="View image ${idx + 1}">
            <img src="${img}" alt="View ${idx + 1}">
          </button>
        `).join('')}
      </div>
    </section>
  `;
};

/**
 * Change main gallery image
 */
function changeMainImage(thumbnailButton) {
  const imagePath = thumbnailButton.dataset.image;
  const mainImage = document.getElementById('mainGalleryImage');
  
  if (!mainImage) return;

  mainImage.style.opacity = '0.35';
  mainImage.style.transform = 'scale(1.02)';

  const swapImage = () => {
    mainImage.src = imagePath;
    mainImage.style.opacity = '1';
    mainImage.style.transform = 'scale(1)';
  };

  setTimeout(swapImage, 160);

  // Update active thumbnail
  document.querySelectorAll('.thumbnail').forEach(btn => {
    btn.classList.remove('active');
  });
  thumbnailButton.classList.add('active');
}

/**
 * Create about section
 */
const renderAbout = (car) => {
  return `
    <section class="about-section">
      <h2>About ${car.brand} ${car.model}</h2>
      <p>${car.description}</p>
    </section>
  `;
};

/**
 * Create performance section
 */
const renderPerformance = (car) => {
  return `
    <section class="performance-section">
      <h2>Performance</h2>
      <div class="performance-grid">
        <div class="perf-item">
          <p class="perf-label">Engine</p>
          <p class="perf-value">${car.engine}</p>
        </div>
        <div class="perf-item">
          <p class="perf-label">Displacement</p>
          <p class="perf-value">${car.displacement}</p>
        </div>
        <div class="perf-item">
          <p class="perf-label">Power</p>
          <p class="perf-value">${car.horsepower}</p>
        </div>
        <div class="perf-item">
          <p class="perf-label">Torque</p>
          <p class="perf-value">${car.torque}</p>
        </div>
        <div class="perf-item">
          <p class="perf-label">Mileage</p>
          <p class="perf-value">${car.mileage}</p>
        </div>
        <div class="perf-item">
          <p class="perf-label">Top Speed</p>
          <p class="perf-value">${car.topSpeed}</p>
        </div>
        <div class="perf-item">
          <p class="perf-label">0-100 km/h</p>
          <p class="perf-value">${car.acceleration}</p>
        </div>
      </div>
    </section>
  `;
};

/**
 * Create specifications section
 */
const renderSpecifications = (car) => {
  return `
    <section class="specifications-section">
      <h2>Vehicle Specifications</h2>
      <div class="specs-table">
        <div class="spec-row">
          <span class="spec-name">Brand</span>
          <span class="spec-val">${car.brand}</span>
        </div>
        <div class="spec-row">
          <span class="spec-name">Model</span>
          <span class="spec-val">${car.model}</span>
        </div>
        <div class="spec-row">
          <span class="spec-name">Year</span>
          <span class="spec-val">${car.year}</span>
        </div>
        <div class="spec-row">
          <span class="spec-name">Category</span>
          <span class="spec-val">${car.category}</span>
        </div>
        <div class="spec-row">
          <span class="spec-name">Type</span>
          <span class="spec-val">${car.type}</span>
        </div>
        <div class="spec-row">
          <span class="spec-name">Fuel Type</span>
          <span class="spec-val">${car.fuel}</span>
        </div>
        <div class="spec-row">
          <span class="spec-name">Transmission</span>
          <span class="spec-val">${car.transmission}</span>
        </div>
        <div class="spec-row">
          <span class="spec-name">Gears</span>
          <span class="spec-val">${car.gears}</span>
        </div>
        <div class="spec-row">
          <span class="spec-name">Drive Type</span>
          <span class="spec-val">${car.driveType}</span>
        </div>
        <div class="spec-row">
          <span class="spec-name">Seats</span>
          <span class="spec-val">${car.seats}</span>
        </div>
        <div class="spec-row">
          <span class="spec-name">Doors</span>
          <span class="spec-val">${car.doors}</span>
        </div>
        <div class="spec-row">
          <span class="spec-name">Location</span>
          <span class="spec-val">${car.location}</span>
        </div>
      </div>
    </section>
  `;
};

/**
 * Create dimensions section
 */
const renderDimensions = (car) => {
  return `
    <section class="dimensions-section">
      <h2>Dimensions</h2>
      <div class="dimensions-grid">
        <div class="dimension-item">
          <p class="dim-label">Length</p>
          <p class="dim-value">${car.length}</p>
        </div>
        <div class="dimension-item">
          <p class="dim-label">Width</p>
          <p class="dim-value">${car.width}</p>
        </div>
        <div class="dimension-item">
          <p class="dim-label">Height</p>
          <p class="dim-value">${car.height}</p>
        </div>
        <div class="dimension-item">
          <p class="dim-label">Wheelbase</p>
          <p class="dim-value">${car.wheelbase}</p>
        </div>
        <div class="dimension-item">
          <p class="dim-label">Boot Space</p>
          <p class="dim-value">${car.bootSpace}</p>
        </div>
      </div>
    </section>
  `;
};

/**
 * Create colors section
 */
const renderColors = (car) => {
  return `
    <section class="colors-section">
      <h2>Colors</h2>
      <div class="colors-grid">
        <div class="color-item">
          <p class="color-label">Exterior</p>
          <div class="color-swatch" style="background: ${getColorCode(car.exteriorColor)};"></div>
          <p class="color-name">${car.exteriorColor}</p>
        </div>
        <div class="color-item">
          <p class="color-label">Interior</p>
          <div class="color-swatch" style="background: ${getColorCode(car.interiorColor)};"></div>
          <p class="color-name">${car.interiorColor}</p>
        </div>
      </div>
    </section>
  `;
};

/**
 * Get color code from color name
 */
const getColorCode = (colorName) => {
  const colorMap = {
    'Pearl White': '#F5F5F5',
    'Titan Grey': '#808080',
    'Red': '#DC2626',
    'Glacier White': '#F8F9FA',
    'Radiant Red': '#EF4444',
    'Alpine White': '#F9FAFB',
    'Obsidian Black': '#1F2937',
    'Race Red': '#B91C1C',
    'Black': '#000000',
    'Black Leather': '#1F2937'
  };
  return colorMap[colorName] || '#CCCCCC';
};

/**
 * Create features section
 */
const renderFeatures = (car) => {
  if (!car.features || car.features.length === 0) {
    return '';
  }

  return `
    <section class="features-section">
      <h2>Features & Equipment</h2>
      <div class="features-grid">
        ${car.features.map(feature => `
          <div class="feature-item feature-card-hover">
            <span class="check-mark">✓</span>
            <span class="feature-name">${feature}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};

/**
 * Create safety section
 */
const renderSafety = (car) => {
  if (!car.safety || car.safety.length === 0) {
    return '';
  }

  return `
    <section class="safety-section">
      <h2>Safety Features</h2>
      <div class="safety-grid">
        ${car.safety.map(feature => `
          <div class="safety-item">
            <span class="check-mark">✓</span>
            <span class="safety-name">${feature}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};

/**
 * Create comfort section
 */
const renderComfort = (car) => {
  if (!car.comfort || car.comfort.length === 0) {
    return '';
  }

  return `
    <section class="comfort-section">
      <h2>Comfort & Interior</h2>
      <div class="comfort-grid">
        ${car.comfort.map(feature => `
          <div class="comfort-item">
            <span class="check-mark">✓</span>
            <span class="comfort-name">${feature}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};

/**
 * Create exterior section
 */
const renderExterior = (car) => {
  if (!car.exterior || car.exterior.length === 0) {
    return '';
  }

  return `
    <section class="exterior-section">
      <h2>Exterior Features</h2>
      <div class="exterior-grid">
        ${car.exterior.map(feature => `
          <div class="exterior-item">
            <span class="check-mark">✓</span>
            <span class="exterior-name">${feature}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};

/**
 * Create rental information section
 */
const renderRentalInfo = (car) => {
  return `
    <section class="rental-info-section">
      <h2>Rental Information</h2>
      <div class="rental-grid">
        <div class="rental-item">
          <p class="rental-label">Pickup Location</p>
          <p class="rental-value">${car.location}</p>
        </div>
        <div class="rental-item">
          <p class="rental-label">Return Location</p>
          <p class="rental-value">${car.location}</p>
        </div>
        <div class="rental-item">
          <p class="rental-label">Security Deposit</p>
          <p class="rental-value">${formatPrice(car.securityDeposit)}</p>
        </div>
        <div class="rental-item">
          <p class="rental-label">Minimum Rental</p>
          <p class="rental-value">${car.minimumRental}</p>
        </div>
        <div class="rental-item">
          <p class="rental-label">Fuel Policy</p>
          <p class="rental-value">Full to Full</p>
        </div>
        <div class="rental-item">
          <p class="rental-label">Age Requirement</p>
          <p class="rental-value">${car.minimumAge}</p>
        </div>
        <div class="rental-item">
          <p class="rental-label">Driving License</p>
          <p class="rental-value">Required</p>
        </div>
      </div>
    </section>
  `;
};

/**
 * Create booking section
 */
const renderBookingForm = (car) => {
  return `
    <section class="booking-section booking-summary-panel">
      <div class="booking-summary-panel__content">
        <div class="booking-summary-panel__header">
          <h2>Book ${car.name}</h2>
          <span class="mini-pill">Instant booking</span>
        </div>
        <form id="carBookingForm" class="booking-form">
          <div class="form-group">
            <label for="bookingCarName">Selected Car</label>
            <input type="text" id="bookingCarName" value="${car.name}" disabled>
          </div>

          <div class="form-group">
            <label for="bookingFullName">Full Name *</label>
            <input type="text" id="bookingFullName" placeholder="Enter your name" required>
            <span class="error-message" id="bookingFullNameError"></span>
          </div>

          <div class="form-group">
            <label for="bookingPhone">Phone Number *</label>
            <input type="tel" id="bookingPhone" placeholder="Enter phone number" required>
            <span class="error-message" id="bookingPhoneError"></span>
          </div>

          <div class="form-group">
            <label for="bookingEmail">Email Address *</label>
            <input type="email" id="bookingEmail" placeholder="Enter email address" required>
            <span class="error-message" id="bookingEmailError"></span>
          </div>

          <div class="form-group">
            <label for="bookingPickupLocation">Pickup Location *</label>
            <input type="text" id="bookingPickupLocation" placeholder="Enter pickup location" value="${car.location}">
            <span class="error-message" id="bookingPickupLocationError"></span>
          </div>

          <div class="form-group">
            <label for="bookingReturnLocation">Return Location *</label>
            <input type="text" id="bookingReturnLocation" placeholder="Enter return location" value="${car.location}">
            <span class="error-message" id="bookingReturnLocationError"></span>
          </div>

          <div class="form-group">
            <label for="bookingPickupDate">Pickup Date *</label>
            <input type="date" id="bookingPickupDate" required>
            <span class="error-message" id="bookingPickupDateError"></span>
          </div>

          <div class="form-group">
            <label for="bookingReturnDate">Return Date *</label>
            <input type="date" id="bookingReturnDate" required>
            <span class="error-message" id="bookingReturnDateError"></span>
          </div>

          <div class="booking-summary-box">
            <div class="summary-row">
              <span>Base Price</span>
              <strong>${formatPrice(car.price)}/day</strong>
            </div>
            <div class="summary-row">
              <span>Deposit</span>
              <strong>${formatPrice(car.securityDeposit)}</strong>
            </div>
            <div class="summary-row total-row">
              <span>Total</span>
              <strong>${formatPrice(car.price * 1)}</strong>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Confirm Booking</button>
        </form>
      </div>
    </section>
  `;
};

/**
 * Create similar cars section
 */
const renderSimilarCars = (car) => {
  const similarCars = getSimilarCars(car, 3);

  if (similarCars.length === 0) {
    return '';
  }

  return `
    <section class="similar-cars-section">
      <h2>Similar ${car.category}s</h2>
      <div class="similar-cars-grid">
        ${similarCars.map(similarCar => `
          <div class="similar-car-card" onclick="openCarDetails(${similarCar.id})">
            <img src="${similarCar.images?.[0] || similarCar.image}" alt="${similarCar.name}">
            <h3>${similarCar.name}</h3>
            <p class="category">${similarCar.category}</p>
            <p class="price">${formatPrice(similarCar.price)} <small>/day</small></p>
            <button class="btn btn-outline">View Details</button>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};

/**
 * Create hero section
 */
const renderHero = (car) => {
  const availabilityStatus = car.available ? 'Available' : 'Currently Unavailable';
  const availabilityClass = car.available ? 'available' : 'unavailable';

  return `
    <section class="details-hero">
      <div class="hero-left">
        <div class="hero-badge">${car.category}</div>
        <h1 class="hero-brand">${car.brand}</h1>
        <h2 class="hero-name">${car.model}</h2>
        <p class="hero-type">${car.type}</p>
        
        ${renderRating(car.rating, car.reviews)}
        
        <div class="availability-badge ${availabilityClass}">
          ● ${availabilityStatus}
        </div>
      </div>

      <div class="hero-right">
        <div class="hero-image-wrap">
          <img src="${car.images?.[0] || car.image}" alt="${car.name}" class="hero-image">
        </div>
      </div>
    </section>

    <section class="price-section">
      <div class="price-info">
        <div class="price-amount">
          <span class="amount">${formatPrice(car.price)}</span>
          <span class="period">/day</span>
        </div>
        <div class="deposit-info">
          <p class="label">Security Deposit</p>
          <p class="value">${formatPrice(car.securityDeposit)}</p>
        </div>
        <div class="rental-info">
          <p class="label">Minimum Rental</p>
          <p class="value">${car.minimumRental}</p>
        </div>
      </div>
      <button class="btn btn-primary btn-large" onclick="scrollToBooking()" ${!car.available ? 'disabled' : ''}>
        ${car.available ? 'Book This Car' : 'Currently Unavailable'}
      </button>
    </section>
  `;
};

/**
 * Render complete car details page
 */
const renderCarDetails = (carId) => {
  const car = getCarById(carId);

  if (!car) {
    selectedCar = null;
    return `
      <div class="error-container">
        <h2>Vehicle not found.</h2>
        <p>Car details could not be found.</p>
      </div>
    `;
  }

  selectedCar = car;

  return `
    <div class="car-details-page">
      <header class="details-header">
        <button class="btn-back" onclick="closeCarDetails()" aria-label="Back to cars">
          ← Back to Cars
        </button>
        <a href="#home" class="details-logo"><img class="drivex-logo" data-drivex-logo src="Day%20mode%20logo.png" width="118" height="48" alt="DriveX - Drive Your Journey"></a>
        <div class="details-actions">
          <button class="btn-favorite" aria-label="Add to favorites" onclick="toggleFavorite(${car.id})">
            ♡ Favorite
          </button>
          <button class="btn-close" onclick="closeCarDetails()" aria-label="Close">✕</button>
        </div>
      </header>

      <main class="details-main">
        <div class="details-container">
          ${renderHero(car)}
          ${renderQuickSpecs(car)}
          ${renderGallery(car)}
          ${renderAbout(car)}
          ${renderPerformance(car)}
          ${renderSpecifications(car)}
          ${renderDimensions(car)}
          ${renderColors(car)}
          ${renderFeatures(car)}
          ${renderSafety(car)}
          ${renderComfort(car)}
          ${renderExterior(car)}
          ${renderRentalInfo(car)}
          ${renderSimilarCars(car)}
        </div>
      </main>
    </div>
  `;
};

/**
 * Open car details modal
 */
function openCarDetails(carId) {
  const modal = document.getElementById('carDetailsModal');
  if (!modal) {
    console.error('Car details modal not found');
    return;
  }

  // Store last focused element
  detailsLastFocusElement = document.activeElement;

  // Render and display details
  modal.innerHTML = renderCarDetails(carId);
  if (typeof applyTheme === 'function') applyTheme(getThemePreference());
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');

  // Prevent background scrolling
  document.body.style.overflow = 'hidden';

  // Focus the back button
  setTimeout(() => {
    const backButton = modal.querySelector('.btn-back');
    if (backButton) backButton.focus();
  }, 100);

  // Scroll to top
  modal.scrollTop = 0;

  // Set up event listeners
  setupDetailsEventListeners();
}

/**
 * Close car details modal
 */
function closeCarDetails() {
  const modal = document.getElementById('carDetailsModal');
  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = '';

  // Restore background scrolling
  document.body.style.overflow = '';

  // Return focus
  if (detailsLastFocusElement) {
    detailsLastFocusElement.focus();
  }

  selectedCar = null;
}

/**
 * Scroll to booking section
 */
function scrollToBooking() {
  closeCarDetails();
  const bookingSection = document.querySelector('#booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Toggle favorite status
 */
function toggleFavorite(carId) {
  let favorites = [];
  try {
    favorites = JSON.parse(localStorage.getItem('drivexFavorites') || '[]');
  } catch (e) {
    favorites = [];
  }

  const index = favorites.indexOf(carId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(carId);
  }

  try {
    localStorage.setItem('drivexFavorites', JSON.stringify(favorites));
  } catch (e) {
    console.error('Failed to save favorites');
  }

  // Update button UI
  const favoriteBtn = document.querySelector('.btn-favorite');
  if (favoriteBtn) {
    if (index > -1) {
      favoriteBtn.textContent = '♡ Favorite';
    } else {
      favoriteBtn.textContent = '♥ Favorite';
    }
  }
}

/**
 * Set up event listeners for details page
 */
function setupDetailsEventListeners() {
  const modal = document.getElementById('carDetailsModal');
  if (!modal) return;

  // Close on Escape key
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closeCarDetails();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);

  // Set min dates for booking form
  const pickupDate = modal.querySelector('#bookingPickupDate');
  const returnDate = modal.querySelector('#bookingReturnDate');
  
  if (pickupDate && returnDate) {
    const today = new Date().toISOString().split('T')[0];
    pickupDate.min = today;
    returnDate.min = today;
  }

  // Handle booking form submission
  const bookingForm = modal.querySelector('#carBookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleBookingSubmit);
  }
}

/**
 * Handle booking form submission
 */
function handleBookingSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const modal = document.getElementById('carDetailsModal');

  // Validate form
  const fullName = form.querySelector('#bookingFullName').value.trim();
  const phone = form.querySelector('#bookingPhone').value.trim();
  const email = form.querySelector('#bookingEmail').value.trim();
  const pickupLocation = form.querySelector('#bookingPickupLocation').value.trim();
  const returnLocation = form.querySelector('#bookingReturnLocation').value.trim();
  const pickupDate = form.querySelector('#bookingPickupDate').value;
  const returnDate = form.querySelector('#bookingReturnDate').value;

  let isValid = true;

  // Validate all fields
  if (!fullName) {
    showFieldError('bookingFullName', 'Full name is required');
    isValid = false;
  }

  if (!phone || !/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
    showFieldError('bookingPhone', 'Valid phone number is required');
    isValid = false;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFieldError('bookingEmail', 'Valid email address is required');
    isValid = false;
  }

  if (!pickupLocation) {
    showFieldError('bookingPickupLocation', 'Pickup location is required');
    isValid = false;
  }

  if (!returnLocation) {
    showFieldError('bookingReturnLocation', 'Return location is required');
    isValid = false;
  }

  if (!pickupDate) {
    showFieldError('bookingPickupDate', 'Pickup date is required');
    isValid = false;
  }

  const today = new Date().toISOString().split('T')[0];
  if (pickupDate && pickupDate < today) {
    showFieldError('bookingPickupDate', 'Pickup date cannot be in the past');
    isValid = false;
  }

  if (!returnDate) {
    showFieldError('bookingReturnDate', 'Return date is required');
    isValid = false;
  }

  if (pickupDate && returnDate && new Date(returnDate) < new Date(pickupDate)) {
    showFieldError('bookingReturnDate', 'Return date must be after pickup date');
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // Create booking record
  const bookingId = `DX${Date.now().toString().slice(-8)}`;
  const booking = {
    id: bookingId,
    carId: selectedCar.id,
    carName: selectedCar.name,
    fullName: fullName,
    phone: phone,
    email: email,
    pickupLocation: pickupLocation,
    returnLocation: returnLocation,
    pickupDate: pickupDate,
    returnDate: returnDate,
    totalCost: calculateRentalCost(selectedCar.price, pickupDate, returnDate),
    bookedAt: new Date().toISOString()
  };

  // Save booking to localStorage
  let bookings = [];
  try {
    bookings = JSON.parse(localStorage.getItem('drivexBookings') || '[]');
  } catch (e) {
    bookings = [];
  }

  bookings.push(booking);

  try {
    localStorage.setItem('drivexBookings', JSON.stringify(bookings));
  } catch (e) {
    alert('Error saving booking. Please try again.');
    return;
  }

  // Show confirmation
  showBookingConfirmation(booking);
}

/**
 * Show field error message
 */
function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  if (field) {
    field.classList.add('error');
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
      errorElement.textContent = message;
    }
  }
}

/**
 * Calculate rental cost
 */
function calculateRentalCost(pricePerDay, pickupDate, returnDate) {
  const pickup = new Date(pickupDate);
  const returnD = new Date(returnDate);
  const days = Math.ceil((returnD - pickup) / (1000 * 60 * 60 * 24)) + 1;
  return pricePerDay * days;
}

/**
 * Show booking confirmation
 */
function showBookingConfirmation(booking) {
  const modal = document.getElementById('carDetailsModal');
  if (!modal) return;

  const confirmationHTML = `
    <div class="confirmation-modal">
      <div class="confirmation-content">
        <div class="confirmation-header">
          <h2>Booking Confirmed! ✓</h2>
        </div>
        
        <div class="confirmation-body">
          <p class="confirmation-message">Your ${selectedCar.name} has been requested successfully.</p>
          
          <div class="booking-details">
            <div class="detail-row">
              <span class="label">Booking ID:</span>
              <span class="value">${booking.id}</span>
            </div>
            <div class="detail-row">
              <span class="label">Car:</span>
              <span class="value">${booking.carName}</span>
            </div>
            <div class="detail-row">
              <span class="label">Pickup Date:</span>
              <span class="value">${new Date(booking.pickupDate).toLocaleDateString()}</span>
            </div>
            <div class="detail-row">
              <span class="label">Return Date:</span>
              <span class="value">${new Date(booking.returnDate).toLocaleDateString()}</span>
            </div>
            <div class="detail-row">
              <span class="label">Total Cost:</span>
              <span class="value">${formatPrice(booking.totalCost)}</span>
            </div>
          </div>
        </div>

        <div class="confirmation-footer">
          <button class="btn btn-primary" onclick="closeCarDetails()">Close</button>
        </div>
      </div>
    </div>
  `;

  modal.innerHTML = confirmationHTML;
}
