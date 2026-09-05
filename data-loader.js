/* data/cars.json is the authoritative vehicle catalogue when served locally. */
function refreshCarControls() {
  if (typeof renderCars === 'function') renderCars(cars);
  const select = document.querySelector('#carSelect');
  if (!select) return;
  select.querySelectorAll('option:not(:first-child)').forEach(option => option.remove());
  cars.filter(car => car.available).forEach(car => {
    const option = document.createElement('option');
    option.value = car.id;
    option.textContent = `${car.name} — ₹${car.price.toLocaleString('en-IN')}/day`;
    select.append(option);
  });
}

async function loadCarsFromJson() {
  try {
    const response = await fetch('data/cars.json');
    if (!response.ok) throw new Error(`Vehicle data request failed (${response.status})`);
    const records = await response.json();
    if (!Array.isArray(records) || !records.length) throw new Error('Vehicle data is empty');
    records.forEach(car => { car.image = car.images?.[0] || window.imageFallback; });
    cars.splice(0, cars.length, ...records);
    refreshCarControls();
  } catch (error) {
    console.warn('Unable to load data/cars.json. Start the project with Live Server to use the JSON catalogue.', error);
  }
}

loadCarsFromJson();
