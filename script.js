const localCarImages = {
  '1542282088-72c9c27ed0cd': 'foruner.png',
  '1606664515524-ed2f786a0bd6': 'hyundai-creta-right-front-three-quarter9.avif',
  '1533473359331-0135ef1b58bf': 'mahindra-thar.jpg',
  '1492144534655-ae79c964c9d7': 'kia.jpg',
  '1552519507-da3b142c6e3d': 'honda.jpg',
  '1555215695-3004980ad54e': '3 series.jpg',
  '1563720223185-11003d516935': 'mercedes-benz-wallpaper-preview.jpg',
  '1494905998402-395d579af36f': 'ford-mustang.webp'
};
const photo = id => localCarImages[id] || imageFallback;
const seeds = [
  ['Toyota Fortuner','SUV','Diesel','Automatic',7,4500,4.8,'2.8L Diesel','201 HP','500 Nm','10–14 km/l','4WD','Premium 7-seater SUV for comfortable family journeys, long-distance travel and confident city driving.','1542282088-72c9c27ed0cd'],
  ['Hyundai Creta','SUV','Petrol','Automatic',5,2200,4.6,'1.5L Petrol','115 HP','144 Nm','16–18 km/l','FWD','A refined compact SUV with everyday comfort, modern technology and an easy, confident drive.','1606664515524-ed2f786a0bd6'],
  ['Mahindra Thar','SUV','Petrol','Manual',4,3500,4.7,'2.0L Turbo Petrol','150 HP','320 Nm','12–15 km/l','4WD','An iconic adventure SUV built for open roads, weekend escapes and capable off-road moments.','1533473359331-0135ef1b58bf'],
  ['Kia Seltos','SUV','Petrol','Automatic',5,2400,4.6,'1.5L Turbo Petrol','160 HP','253 Nm','15–17 km/l','FWD','A stylish, feature-rich SUV that makes urban drives and road trips equally enjoyable.','1492144534655-ae79c964c9d7'],
  ['Honda City','Sedan','Petrol','Automatic',5,2000,4.5,'1.5L Petrol','121 HP','145 Nm','17–19 km/l','FWD','A polished sedan with generous cabin space, smooth performance and effortless comfort.','1552519507-da3b142c6e3d'],
  ['BMW 3 Series','Luxury','Petrol','Automatic',5,7500,4.9,'2.0L TwinPower Turbo','255 HP','400 Nm','13–15 km/l','RWD','A driver-focused luxury sedan delivering precise handling, elegant comfort and premium presence.','1555215695-3004980ad54e'],
  ['Mercedes-Benz C-Class','Luxury','Petrol','Automatic',5,8500,4.9,'2.0L Turbo','255 HP','400 Nm','12–14 km/l','RWD','A sophisticated luxury experience combining a beautifully crafted cabin with effortless performance.','1563720223185-11003d516935',false],
  ['Ford Mustang','Sports','Petrol','Automatic',4,10000,4.9,'5.0L V8','450 HP','529 Nm','8–10 km/l','RWD','An unmistakable sports coupe with thrilling V8 performance and a bold, unmistakable silhouette.','1494905998402-395d579af36f']
];
const gallery = [];
const cars = seeds.map((s,i)=>({id:i+1,name:s[0],category:s[1],fuel:s[2],transmission:s[3],seats:s[4],price:s[5],rating:s[6],engine:s[7],horsepower:s[8],torque:s[9],mileage:s[10],driveType:s[11],description:s[12],image:photo(s[13]),images:[photo(s[13]),...gallery.map(photo)],available:s[14]!==false,year:2026,reviews:120-i*11,securityDeposit:s[5]>6000?25000:10000,location:'Jaipur, Rajasthan',topSpeed:`${185+i*8} km/h`,acceleration:`${(10.8-i*.7).toFixed(1)} sec`,features:['Android Auto','Apple CarPlay','Rear Camera','Cruise Control','Automatic Climate Control','Parking Sensors','LED Headlights','Wireless Charging'],safety:['6 Airbags','ABS with EBD','Electronic Stability Control','Traction Control','Hill Assist','Parking Sensors'],comfort:['Premium Seats','Automatic Climate Control','Premium Audio','USB-C Ports','Adjustable Seats','Ambient Lighting']}));
const completeCarData = [
  {brand:'Toyota',model:'Fortuner',type:'Premium 7-Seater SUV',doors:5,gears:'6-Speed Automatic',displacement:'2755 cc',length:'4795 mm',width:'1855 mm',height:'1835 mm',wheelbase:'2745 mm',bootSpace:'296 L',exteriorColor:'Pearl White',interiorColor:'Black',minimumAge:'21+',exterior:['LED Headlights','Alloy Wheels','Roof Rails','Power Mirrors','LED Tail Lamps','Premium Front Grille'],features:['Android Auto','Apple CarPlay','Touchscreen Infotainment','Rear Camera','Cruise Control','Automatic Climate Control','Parking Sensors','Keyless Entry','Push Button Start','LED Headlights'],safety:['Multiple Airbags','ABS','EBD','Electronic Stability Control','Traction Control','Hill Assist','Parking Sensors','Rear Camera'],comfort:['Leather Seats','Automatic Climate Control','Premium Audio','Wireless Charging','Adjustable Driver Seat','Rear AC Vents','USB Charging Ports','Spacious Cabin']},
  {brand:'Hyundai',model:'Creta',type:'Compact Premium SUV',doors:5,gears:'7-Speed DCT',displacement:'1497 cc',length:'4330 mm',width:'1790 mm',height:'1635 mm',wheelbase:'2610 mm',bootSpace:'433 L',exteriorColor:'Titan Grey',interiorColor:'Black',minimumAge:'21+',exterior:['LED Headlights','Alloy Wheels','Panoramic Sunroof','LED Tail Lamps','Roof Rails','Power Folding Mirrors'],features:['Touchscreen Infotainment','Android Auto','Apple CarPlay','Wireless Charging','Rear Camera','Cruise Control','Automatic Climate Control','Connected Car Technology','LED Headlights','Panoramic Sunroof'],safety:['Multiple Airbags','ABS','EBD','Electronic Stability Control','Hill Start Assist','Vehicle Stability Management','Parking Sensors','Rear Camera'],comfort:['Ventilated Seats','Leather Upholstery','Automatic Climate Control','Rear AC Vents','Wireless Charging','Premium Sound System','Adjustable Driver Seat','USB Ports']},
  {brand:'Mahindra',model:'Thar',type:'Off-Road SUV',doors:3,gears:'6-Speed Automatic',displacement:'1997 cc',length:'3985 mm',width:'1820 mm',height:'1920 mm',wheelbase:'2450 mm',bootSpace:'332 L',exteriorColor:'Red',interiorColor:'Black',minimumAge:'21+',exterior:['LED Headlights','All-Terrain Wheels','Roof Rails','High Ground Clearance','Spare Wheel','Rugged Front Grille'],features:['Touchscreen Infotainment','Android Auto','Apple CarPlay','Cruise Control','Rear Camera','Removable Roof','Terrain Modes','Connected Car Features','LED Headlights'],safety:['Multiple Airbags','ABS','EBD','Electronic Stability Control','Hill Hold Control','Hill Descent Control','Roll Over Mitigation','Rear Parking Sensors'],comfort:['Premium Seats','Air Conditioning','Touchscreen Display','Steering Controls','USB Charging','Adjustable Seats','Rear Washable Interior']},
  {brand:'Kia',model:'Seltos',type:'Urban Premium SUV',doors:5,gears:'7-Speed DCT',displacement:'1482 cc',length:'4365 mm',width:'1800 mm',height:'1645 mm',wheelbase:'2610 mm',bootSpace:'433 L',exteriorColor:'Glacier White',interiorColor:'Black',minimumAge:'21+',exterior:['LED Headlights','Alloy Wheels','Panoramic Sunroof','LED Tail Lamps','Roof Rails','Power Folding Mirrors'],features:['Panoramic Sunroof','Android Auto','Apple CarPlay','Wireless Charging','360-Degree Camera','Cruise Control','Ventilated Seats','Connected Car Technology','Premium Audio','LED Headlights'],safety:['Multiple Airbags','ABS','EBD','Electronic Stability Control','Vehicle Stability Management','Hill Start Assist','360-Degree Camera','Parking Sensors'],comfort:['Ventilated Front Seats','Leather Upholstery','Automatic Climate Control','Rear AC Vents','Premium Audio','Wireless Charging','Ambient Lighting','USB-C Charging']},
  {brand:'Honda',model:'City',type:'Premium Sedan',doors:4,gears:'CVT',displacement:'1498 cc',length:'4583 mm',width:'1748 mm',height:'1489 mm',wheelbase:'2600 mm',bootSpace:'506 L',exteriorColor:'Radiant Red',interiorColor:'Black',minimumAge:'21+',exterior:['LED Headlights','Alloy Wheels','LED Tail Lamps','Power Folding Mirrors','Premium Front Grille'],features:['Android Auto','Apple CarPlay','Touchscreen Infotainment','Cruise Control','Rear Camera','Automatic Climate Control','Push Button Start','LED Headlights','Wireless Charging'],safety:['Multiple Airbags','ABS','EBD','Electronic Stability Control','Hill Start Assist','Rear Camera','Parking Sensors'],comfort:['Leather Seats','Automatic Climate Control','Rear AC Vents','Premium Audio','Adjustable Driver Seat','Wireless Charging','Spacious Rear Seating']},
  {brand:'BMW',model:'3 Series',type:'Luxury Sports Sedan',doors:4,gears:'8-Speed Automatic',displacement:'1998 cc',length:'4713 mm',width:'1827 mm',height:'1440 mm',wheelbase:'2851 mm',bootSpace:'480 L',exteriorColor:'Alpine White',interiorColor:'Black Leather',minimumAge:'25+',exterior:['LED Headlights','Alloy Wheels','Sport Package','Power Mirrors','LED Tail Lamps','Signature BMW Grille'],features:['BMW Navigation','Apple CarPlay','Android Auto','Wireless Charging','Digital Instrument Display','Premium Harman Kardon Audio','Cruise Control','Parking Camera','Ambient Lighting','LED Headlights'],safety:['Multiple Airbags','ABS','Dynamic Stability Control','Traction Control','Parking Sensors','Rear Camera','Lane Departure Warning','Forward Collision Warning'],comfort:['Leather Seats','Automatic Climate Control','Heated Front Seats','Premium Audio','Ambient Lighting','Electric Seat Adjustment','Wireless Charging','Premium Interior']},
  {brand:'Mercedes-Benz',model:'C-Class',type:'Premium Luxury Sedan',doors:4,gears:'9-Speed Automatic',displacement:'1999 cc',length:'4751 mm',width:'1820 mm',height:'1437 mm',wheelbase:'2865 mm',bootSpace:'455 L',exteriorColor:'Obsidian Black',interiorColor:'Black',minimumAge:'25+',exterior:['LED Headlights','Alloy Wheels','Panoramic Sunroof','LED Tail Lamps','Power Folding Mirrors','Premium Grille'],features:['MBUX Infotainment','Apple CarPlay','Android Auto','Wireless Charging','Digital Cockpit','Premium Audio','Ambient Lighting','Cruise Control','360-Degree Camera','LED Headlights'],safety:['Multiple Airbags','ABS','Electronic Stability Program','Traction Control','Parking Sensors','360-Degree Camera','Lane Keeping Assistance','Blind Spot Assistance','Collision Warning'],comfort:['Leather Upholstery','Heated Seats','Automatic Climate Control','Premium Audio','Ambient Lighting','Electric Seats','Panoramic Sunroof','Wireless Charging']},
  {brand:'Ford',model:'Mustang',type:'Performance Sports Car',doors:2,gears:'10-Speed Automatic',displacement:'5038 cc',length:'4810 mm',width:'1916 mm',height:'1400 mm',wheelbase:'2720 mm',bootSpace:'323 L',exteriorColor:'Race Red',interiorColor:'Black',minimumAge:'25+',exterior:['LED Headlights','Performance Alloy Wheels','Rear Spoiler','Dual Exhaust','Sport Grille','Signature LED Tail Lamps'],features:['Performance Driving Modes','Digital Instrument Cluster','Touchscreen Infotainment','Apple CarPlay','Android Auto','Premium Audio','Cruise Control','Rear Camera','LED Headlights','Sport Exhaust'],safety:['Multiple Airbags','ABS','Electronic Stability Control','Traction Control','Rear Camera','Parking Sensors','Lane Keeping Assistance','Pre-Collision Assist'],comfort:['Sport Seats','Dual-Zone Climate Control','Premium Audio','Leather Interior','Adjustable Seats','Ambient Lighting','Wireless Charging','Keyless Entry']}
];
cars.forEach((car, index) => Object.assign(car, completeCarData[index], {minimumRental:'1 Day'}));
// Make cars array globally accessible for details module
window.cars = cars;
const $=(s,p=document)=>p.querySelector(s), money=n=>`₹${n.toLocaleString('en-IN')}`;
const imageFallback = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"%3E%3Crect width="800" height="450" fill="%23e2e8f0"/%3E%3Cpath d="M180 310h440l-70-90-75 60-70-90z" fill="%2394a3b8"/%3E%3Ccircle cx="550" cy="145" r="38" fill="%2394a3b8"/%3E%3Ctext x="400" y="390" text-anchor="middle" font-family="Arial" font-size="24" fill="%23475569"%3EImage unavailable%3C/text%3E%3C/svg%3E';
window.imageFallback = imageFallback;

function getBookings(){
  try {
    return JSON.parse(localStorage.getItem('drivexBookings') || '[]');
  } catch (error) {
    return [];
  }
}

function getThemePreference(){
  const savedTheme = localStorage.getItem('drivex-theme');
  if (savedTheme) return savedTheme;

  return window.matchMedia ? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark') : 'light';
}

function updateDriveXLogos(isLight){
  const logoSource = isLight ? 'Day%20mode%20logo.png' : 'Night%20mode%20logo.png';
  document.querySelectorAll('[data-drivex-logo]').forEach((logo) => {
    logo.classList.add('is-switching');
    window.setTimeout(() => {
      logo.src = logoSource;
      logo.classList.remove('is-switching');
    }, 75);
  });
}

function applyTheme(theme = getThemePreference()){
  const nextTheme = theme === 'light' ? 'light' : 'dark';
  const isLight = nextTheme === 'light';
  document.documentElement.setAttribute('data-theme', nextTheme);
  document.body.classList.toggle('light-mode', isLight);
  updateDriveXLogos(isLight);
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    toggle.setAttribute('aria-pressed', String(!isLight));
    toggle.querySelector('.theme-toggle__icon').textContent = isLight ? '☀' : '☾';
  }
  localStorage.setItem('drivex-theme', nextTheme);
}

window.addEventListener('storage', (event) => {
  if (event.key === 'drivex-theme' && (event.newValue === 'light' || event.newValue === 'dark')) {
    applyTheme(event.newValue);
  }
});

function renderBookingHistory(){
  const list = document.getElementById('bookingHistoryList');
  if (!list) return;

  const bookings = getBookings();
  if (!bookings.length) {
    list.innerHTML = '<p class="booking-history__empty">No bookings yet. Your latest customer bookings will appear here.</p>';
    return;
  }

  const recent = bookings.slice().reverse().slice(0, 4);
  list.innerHTML = recent.map((booking) => `
    <div class="booking-history__item">
      <div>
        <strong>${booking.carName || 'Car Booking'}</strong>
        <span>${booking.fullName || 'Guest User'}</span>
      </div>
      <div>
        <small>Pickup</small>
        <span>${booking.pickupDate || '—'}</span>
      </div>
      <div>
        <small>Return</small>
        <span>${booking.returnDate || '—'}</span>
      </div>
      <div>
        <small>Booking ID</small>
        <span>${booking.id || '—'}</span>
      </div>
    </div>
  `).join('');

  const totalBookings = bookings.length;
  const activeRentals = bookings.filter((item) => item.returnDate && new Date(item.returnDate) >= new Date()).length;
  const totalRevenue = bookings.reduce((sum, item) => sum + (Number(item.totalCost) || 0), 0);
  const carCounts = bookings.reduce((acc, item) => {
    const name = item.carName || 'Unknown';
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});
  const popularCar = Object.entries(carCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';

  const totalEl = document.getElementById('dashboardTotalBookings');
  const activeEl = document.getElementById('dashboardActiveRentals');
  const revenueEl = document.getElementById('dashboardRevenue');
  const popularEl = document.getElementById('dashboardPopularCar');

  if (totalEl) totalEl.textContent = String(totalBookings);
  if (activeEl) activeEl.textContent = String(activeRentals);
  if (revenueEl) revenueEl.textContent = `₹${totalRevenue.toLocaleString('en-IN')}`;
  if (popularEl) popularEl.textContent = popularCar;
}

document.addEventListener('error', event => {
  if (event.target.tagName === 'IMG' && !event.target.dataset.fallbackUsed) {
    event.target.dataset.fallbackUsed = 'true';
    event.target.src = imageFallback;
  }
}, true);
let selectedCar,lastFocus;
const icon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13M3 13h18v6H3zM7 19h.01M17 19h.01"/></svg>';
function card(c){return `<article class="car-card" data-car-card="${c.id}" tabindex="0" aria-label="View details for ${c.name}"><div class="car-card__media"><img src="${c.image}" alt="${c.name}"><span class="badge badge--${c.available?'available':'unavailable'}">${c.available?'Available':'Unavailable'}</span></div><div class="car-card__body"><div class="car-card__title-row"><div><h3>${c.name}</h3><p class="car-card__category">${c.category}</p></div><span class="car-card__rating">★ ${c.rating}</span></div><div class="car-card__specs"><span>${c.fuel}</span><span>${c.transmission}</span><span>${c.seats} Seats</span></div><div class="car-card__footer"><div class="car-card__price">${money(c.price)} <small>/ day</small></div></div><div class="car-card__actions"><button class="btn btn--outline" data-details="${c.id}">View Details</button><button class="btn btn--primary" data-book="${c.id}" ${c.available?'':'disabled'}>Book Now</button></div></div></article>`}
function renderCars(list=cars){$('#carGrid').innerHTML=list.map(card).join('');$('#noResults').hidden=!!list.length}
function filter(scroll=false){let t=$('#searchInput').value.toLowerCase(),cat=$('#categorySelect').value,p=$('#priceSelect').value,a=$('#availabilitySelect').value;renderCars(cars.filter(c=>(!t||`${c.name} ${c.category}`.toLowerCase().includes(t))&&(cat==='all'||c.category===cat)&&(a==='all'||c.available)&&(p==='any'||p==='under2000'&&c.price<2000||p==='2000-5000'&&c.price>=2000&&c.price<=5000||p==='above5000'&&c.price>5000)));if(scroll)$('#cars').scrollIntoView({behavior:'smooth'})}
function reset(){['searchInput','categorySelect','priceSelect','availabilitySelect'].forEach((id,i)=>$(`#${id}`).value=i?'all':'');$('#priceSelect').value='any';document.querySelectorAll('.category-chip').forEach(x=>x.classList.toggle('active',x.dataset.category==='all'));renderCars()}
function favs(){try{return JSON.parse(localStorage.getItem('favoriteCars')||'[]')}catch{return[]}}
function chip(items,type){return items.map(x=>`<li class="detail-chip detail-chip--${type}"><span>✓</span>${x}</li>`).join('')}
function details(c){let floating=[['Fuel type',c.fuel],['Transmission',c.transmission],['Seating',`${c.seats} Seats`],['Drive',c.driveType]],high=[['Engine',c.engine],['Power',c.horsepower],['Torque',c.torque],['Mileage',c.mileage],['Top speed',c.topSpeed],['0–100 km/h',c.acceleration]], groups=[['Performance',[['Engine',c.engine],['Power',c.horsepower],['Torque',c.torque],['Top speed',c.topSpeed],['Mileage',c.mileage]]],['Transmission',[['Type',c.transmission],['Drive',c.driveType],['Gears','6-Speed'],['Fuel',c.fuel]]],['Comfort',[['Seating',`${c.seats} passengers`],['Climate','Automatic'],['Infotainment','10.25-inch display'],['Camera','Rear view camera']]],['Safety',[['Airbags','6 Airbags'],['Brakes','ABS + EBD'],['Stability','Electronic Stability Control'],['Sensors','Front & rear']]]],similar=cars.filter(x=>x.id!==c.id).sort((a,b)=>(b.category===c.category)-(a.category===c.category)).slice(0,3);return `<div class="details-shell" role="dialog" aria-modal="true" aria-labelledby="detailName"><header class="details-header"><button class="details-back" data-close-details>← <span>Back to Cars</span></button><a class="details-logo" href="#home">Drive<span>X</span></a><div class="details-actions"><button class="detail-icon-btn" data-share aria-label="Share">↗</button><button class="detail-icon-btn ${favs().includes(c.id)?'is-favourite':''}" data-favorite="${c.id}" aria-label="Favourite">${favs().includes(c.id)?'♥':'♡'}</button><button class="details-book-top" data-detail-book="${c.id}" ${c.available?'':'disabled'}>Book Now</button></div></header><nav class="detail-tabs"><a href="#detailOverview">Overview</a><a href="#detailPerformance">Performance</a><a href="#detailFeatures">Features</a><a href="#detailSafety">Safety</a><a href="#detailRental">Rental Info</a></nav><main class="details-main"><section class="detail-overview" id="detailOverview"><div class="detail-title"><p>${c.category} · ${c.year}</p><h1 id="detailName">${c.name}</h1><span>${c.engine} · ${c.transmission}</span><strong>★★★★★ <em>${c.rating} (${c.reviews} reviews)</em></strong></div><div class="detail-visual"><div class="detail-visual__glow"></div><button class="detail-main-image" data-lightbox aria-label="Open image gallery"><img src="${c.images[0]}" alt="${c.name}"></button><div class="detail-float-cards">${floating.map(x=>`<div>${icon}<span>${x[0]}</span><strong>${x[1]}</strong></div>`).join('')}</div></div><div class="detail-gallery">${c.images.map((im,i)=>`<button class="${i?'':'active'}" data-gallery-image="${im}"><img src="${im}" alt="${c.name} image ${i+1}"></button>`).join('')}</div></section><section class="detail-section" id="detailPerformance"><p class="detail-kicker">FEATURE HIGHLIGHTS</p><h2>Engineered for the drive.</h2><div class="highlight-grid">${high.map(x=>`<article><span>${x[0]}</span><strong>${x[1]}</strong></article>`).join('')}</div></section><section class="detail-section detail-about"><div><p class="detail-kicker">ABOUT THIS CAR</p><h2>Made for more than the journey.</h2></div><p>${c.description}</p></section><section class="detail-section" id="detailFeatures"><p class="detail-kicker">COMPLETE SPECIFICATIONS</p><h2>Everything, at a glance.</h2><div class="detail-spec-grid">${groups.map(g=>`<section class="detail-spec-group"><h3>${g[0]}</h3>${g[1].map(r=>`<div><span>${r[0]}</span><strong>${r[1]}</strong></div>`).join('')}</section>`).join('')}</div></section><section class="detail-section detail-columns" id="detailSafety"><div><p class="detail-kicker">KEY FEATURES</p><h2>Connected and considered.</h2><ul>${chip(c.features,'feature')}</ul></div><div><p class="detail-kicker">SAFETY & COMFORT</p><h2>Confidence inside and out.</h2><ul>${chip([...c.safety.slice(0,4),...c.comfort.slice(0,4)],'safety')}</ul></div></section><section class="detail-rental" id="detailRental"><div><p>READY TO DRIVE?</p><h2>${c.name}</h2><span class="detail-availability ${c.available?'':'unavailable'}">● ${c.available?'Available now':'Currently unavailable'}</span></div><div class="detail-price">${money(c.price)} <small>/ day</small></div><div><span>Security deposit</span><strong>${money(c.securityDeposit)}</strong></div><button class="detail-book-cta" data-detail-book="${c.id}" ${c.available?'':'disabled'}>Book This Car →</button></section><section class="detail-section"><p class="detail-kicker">PICKUP LOCATION</p><h2>Jaipur, Rajasthan</h2><div class="detail-map"><span>✦</span><p>DriveX City Hub<br><small>Pickup details are confirmed after booking.</small></p></div></section><section class="detail-section"><p class="detail-kicker">YOU MAY ALSO LIKE</p><h2>Continue exploring.</h2><div class="similar-grid">${similar.map(x=>`<button class="similar-card" data-similar="${x.id}"><img src="${x.image}" alt="${x.name}"><span>${x.category}</span><strong>${x.name}</strong><small>${money(x.price)} / day</small></button>`).join('')}</div></section></main><div class="detail-lightbox" hidden><button data-close-lightbox>×</button><img src="${c.images[0]}" alt="${c.name} enlarged"></div></div>`}
function openDetails(id,push=true){let c=cars.find(x=>x.id===+id);if(!c)return;selectedCar=c;lastFocus=document.activeElement;let o=$('#detailsOverlay');o.innerHTML=details(c);applyTheme(getThemePreference());o.classList.add('open');o.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');if(push){let u=new URL(location);u.searchParams.set('car',id);history.pushState({car:id},'',u)}$('.details-back',o).focus()}
function closeDetails(back=true){let o=$('#detailsOverlay');o.classList.remove('open');o.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');if(back&&new URL(location).searchParams.has('car'))history.back();else $('#cars').scrollIntoView({behavior:'smooth'});lastFocus?.focus()}
function book(id){let c=cars.find(x=>x.id===+id);if(!c?.available)return;$('#carSelect').value=id;if($('#detailsOverlay').classList.contains('open'))closeDetails(false);$('#booking').scrollIntoView({behavior:'smooth'})}
function toggleFav(id){let f=favs(),n=f.indexOf(+id);n<0?f.push(+id):f.splice(n,1);try{localStorage.setItem('favoriteCars',JSON.stringify(f))}catch{}openDetails(id,false)}
function updateBookingPreview(){let c=cars.find(x=>x.id===+$('#carSelect').value)||cars[0];if(!c)return;let image=c.images?.[0]||c.image||imageFallback;$('#bookingVehicleName').textContent=c.name;$('#bookingVehicleMeta').textContent=`${c.category} · ${c.transmission} · ${c.seats} Seats · ${c.fuel}`;$('#bookingVehicleImage').src=image;$('#bookingVehicleImage').alt=`${c.name} rental car` ;$('#bookingVehiclePrice').innerHTML=`${money(c.price)} <small>/ day</small>`;$('#bookingVehicleRating').textContent=c.rating;$('#bookingVehicleStatus').textContent=c.available?'AVAILABLE':'UNAVAILABLE';$('#summaryVehicleName').textContent=c.name;$('#summaryVehicleMeta').textContent=`${c.category} · ${c.transmission} · ${c.seats} Seats`;$('#summaryVehicleImage').src=image;$('#summaryVehicleImage').alt=`${c.name} thumbnail`;$('#summaryCarPrice').textContent=money(c.price);$('#summaryDeposit').textContent=money(c.securityDeposit);let pickup=$('#pickupDate').value,returnDate=$('#returnDate').value;$('#summaryPickup').textContent=pickup||'Not selected';$('#summaryReturn').textContent=returnDate||'Not selected';let days=pickup&&returnDate?Math.max(1,Math.ceil((new Date(returnDate)-new Date(pickup))/86400000)+1):1;$('#summaryDuration').textContent=`${days} ${days===1?'Day':'Days'}`;$('#summaryTotal').textContent=money(c.price*days);if(typeof updateSummaryDetails==='function')updateSummaryDetails()}
function updateSummaryDetails(){let formatDate=value=>value?new Date(`${value}T00:00:00`).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}):'Not selected';let pickup=$('#pickupDate').value,returnDate=$('#returnDate').value,pickupLocation=$('#pickupLocation').value||'Jaipur, Rajasthan',returnLocation=$('#returnLocation').value||'Jaipur, Rajasthan';$('#summaryPickup').textContent=`${formatDate(pickup)} · ${pickupLocation}`;$('#summaryReturn').textContent=`${formatDate(returnDate)} · ${returnLocation}`;}
function initPromo(){let toggle=$('#promoToggle'),fields=$('#promoFields'),apply=$('#applyPromo');toggle.onclick=()=>{let expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));fields.classList.toggle('is-open',!expanded)};apply.onclick=()=>{let message=$('#promoMessage');if($('#promoCode').value.trim().toUpperCase()==='DRIVE20'){message.textContent='✓ DRIVE20 applied · Save ₹900';message.classList.add('success')}else{message.textContent='Enter a valid promo code';message.classList.remove('success')}}}
function initBooking(){let select=$('#carSelect');select.insertAdjacentHTML('beforeend',cars.filter(c=>c.available).map(c=>`<option value="${c.id}">${c.name} — ${money(c.price)}/day</option>`).join(''));let today=new Date().toISOString().slice(0,10);$('#pickupDate').min=$('#returnDate').min=today;['carSelect','pickupDate','returnDate','pickupLocation','returnLocation'].forEach(id=>{let field=$(`#${id}`);field.addEventListener('input',updateBookingPreview);field.addEventListener('change',updateBookingPreview)});updateBookingPreview();$('#bookingForm').addEventListener('submit',e=>{e.preventDefault();let ok=true;['fullName','phone','email','carSelect','pickupDate','returnDate','pickupLocation','returnLocation'].forEach(id=>{let x=$(`#${id}`),empty=!x.value.trim();x.closest('.form-group').classList.toggle('invalid',empty);$(`#err-${id}`).textContent=empty?'This field is required.':'';ok&&=!empty});if($('#returnDate').value<$('#pickupDate').value){$('#err-returnDate').textContent='Return date must be after the pickup date.';ok=false}if(!ok)return;let c=cars.find(x=>x.id===+select.value),b={id:`DX-${Date.now().toString().slice(-6)}`,car:c.name,pickup:$('#pickupDate').value,return:$('#returnDate').value};try{let all=JSON.parse(localStorage.getItem('drivexBookings')||'[]');all.push(b);localStorage.setItem('drivexBookings',JSON.stringify(all))}catch{}$('#successBookingId').textContent=b.id;$('#successCar').textContent=b.car;$('#successPickup').textContent=b.pickup;$('#successReturn').textContent=b.return;$('#successModalOverlay').classList.add('open');document.body.classList.add('modal-open')})}
function initHeroScene(){let hero=$('.hero'),media=$('[data-hero-car]',hero),cta=$('.hero__ctas .btn--primary',hero);if(!hero)return;let reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,mobile=matchMedia('(max-width: 767px)').matches;if(reduce)return;let targetX=0,targetY=0,currentX=0,currentY=0,scrollProgress=0,carFocus=0,frame;
  function update(){currentX+=(targetX-currentX)*.08;currentY+=(targetY-currentY)*.08;hero.style.setProperty('--scene-x',`${currentX*8}px`);hero.style.setProperty('--scene-y',`${currentY*5}px`);hero.style.setProperty('--road-x',`${currentX*10}px`);hero.style.setProperty('--road-y',`${currentY*5}px`);hero.style.setProperty('--car-x',`${currentX*5}px`);hero.style.setProperty('--car-y',`${currentY*3-scrollProgress*45}px`);hero.style.setProperty('--car-rotate-x',`${currentY*-2}deg`);hero.style.setProperty('--car-rotate-y',`${currentX*3}deg`);hero.style.setProperty('--scene-scroll',scrollProgress.toFixed(3));hero.style.setProperty('--content-focus',`${1-carFocus*.08}`);frame=requestAnimationFrame(update)}
  function pointerMove(event){targetX=(event.clientX/window.innerWidth-.5)*2;targetY=(event.clientY/window.innerHeight-.5)*2;hero.style.setProperty('--cursor-x',`${event.clientX}px`);hero.style.setProperty('--cursor-y',`${event.clientY}px`)}
  function updateScroll(){let bounds=hero.getBoundingClientRect();scrollProgress=Math.max(0,Math.min(1,-bounds.top/(bounds.height*.7)))}
  function magneticMove(event){let bounds=cta.getBoundingClientRect();let x=(event.clientX-(bounds.left+bounds.width/2))/bounds.width;let y=(event.clientY-(bounds.top+bounds.height/2))/bounds.height;cta.style.setProperty('--mag-x',`${Math.max(-6,Math.min(6,x*6))}px`);cta.style.setProperty('--mag-y',`${Math.max(-4,Math.min(4,y*4))}px`)}
  if(!mobile){hero.addEventListener('pointermove',pointerMove,{passive:true});hero.addEventListener('pointerleave',()=>{targetX=0;targetY=0},{passive:true});media?.addEventListener('pointerenter',()=>{carFocus=1;hero.classList.add('is-focused')},{passive:true});media?.addEventListener('pointerleave',()=>{carFocus=0;hero.classList.remove('is-focused')},{passive:true});cta?.addEventListener('pointermove',magneticMove,{passive:true});cta?.addEventListener('pointerleave',()=>{cta.style.setProperty('--mag-x','0px');cta.style.setProperty('--mag-y','0px')},{passive:true})}addEventListener('scroll',updateScroll,{passive:true});updateScroll();frame=requestAnimationFrame(update);addEventListener('pagehide',()=>cancelAnimationFrame(frame),{once:true})}
document.addEventListener('DOMContentLoaded',initHeroScene);
document.addEventListener('DOMContentLoaded',()=>{applyTheme(getThemePreference());renderBookingHistory();renderCars();initBooking();$('#searchBtn').onclick=()=>filter(true);$('#searchInput').oninput=filter;$('#clearFiltersBtn').onclick=reset;$('#noResultsClear').onclick=reset;$('#themeToggle').onclick=()=>applyTheme(document.body.classList.contains('light-mode') ? 'dark' : 'light');$('#categoryRow').onclick=e=>{let x=e.target.closest('.category-chip');if(x){$('#categorySelect').value=x.dataset.category;document.querySelectorAll('.category-chip').forEach(c=>c.classList.toggle('active',c===x));filter(true)}};$('#carGrid').onclick=e=>{let bookButton=e.target.closest('[data-book]'),detailsButton=e.target.closest('[data-details]'),carCard=e.target.closest('[data-car-card]');if(bookButton){e.stopPropagation();book(bookButton.dataset.book)}else if(detailsButton){e.stopPropagation();if(typeof openCarDetails==='function'){openCarDetails(detailsButton.dataset.details)}else{openDetails(detailsButton.dataset.details)}}else if(carCard){if(typeof openCarDetails==='function'){openCarDetails(carCard.dataset.carCard)}else{openDetails(carCard.dataset.carCard)}}};$('#carGrid').onkeydown=e=>{let c=e.target.closest('[data-car-card]');if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();if(typeof openCarDetails==='function'){openCarDetails(c.dataset.carCard)}else{openDetails(c.dataset.carCard)}}};$('#detailsOverlay').onclick=e=>{let b=e.target.closest('button');if(!b)return;if(b.dataset.closeDetails!==undefined)closeDetails();else if(b.dataset.detailBook)book(b.dataset.detailBook);else if(b.dataset.favorite)toggleFav(b.dataset.favorite);else if(b.dataset.similar)openDetails(b.dataset.similar);else if(b.dataset.galleryImage){$('.detail-main-image img').src=b.dataset.galleryImage;document.querySelectorAll('[data-gallery-image]').forEach(x=>x.classList.toggle('active',x===b))}else if(b.dataset.lightbox!==undefined)$('.detail-lightbox').hidden=false;else if(b.dataset.closeLightbox!==undefined)$('.detail-lightbox').hidden=true;else if(b.dataset.share!==undefined){navigator.clipboard?.writeText(location.href);alert('Car details link copied.')}};document.querySelectorAll('.faq-question').forEach(b=>b.onclick=()=>{let item=b.parentElement,on=!item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(x=>x.classList.remove('open'));item.classList.toggle('open',on)});$('#hamburger').onclick=()=>$('#mobileMenu').classList.toggle('open');document.querySelectorAll('.mobile-menu a').forEach(a=>a.onclick=()=>$('#mobileMenu').classList.remove('open'));['successModalClose','successDoneBtn'].forEach(id=>$("#"+id).onclick=()=>{$('#successModalOverlay').classList.remove('open');document.body.classList.remove('modal-open')});$('#backToTop').onclick=()=>scrollTo({top:0,behavior:'smooth'});onscroll=()=>{$('#backToTop').classList.toggle('visible',scrollY>500);$('#navbar').classList.toggle('scrolled',scrollY>20)};onpopstate=()=>{let id=new URL(location).searchParams.get('car');id?openDetails(id,false):closeDetails(false)};let requested=new URL(location).searchParams.get('car');if(requested)openDetails(requested,false);document.onkeydown=e=>{if(e.key==='Escape'){$('.detail-lightbox')?.hidden===false?$('.detail-lightbox').hidden=true:$('#detailsOverlay').classList.contains('open')&&closeDetails()}};if(!matchMedia('(prefers-reduced-motion: reduce)').matches){let ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');ob.unobserve(e.target)}}));document.querySelectorAll('.reveal').forEach(x=>ob.observe(x))}});
