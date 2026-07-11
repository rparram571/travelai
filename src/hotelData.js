// Real properties sourced from Booking.com (via live accommodations search) for
// the destinations we have curated itineraries for. Ratings are Booking.com's
// native 0-10 guest review score, not a 5-star scale.
const REAL_HOTELS = {
  tokyo: [
    { tier: 'budget', tierLabel: 'Budget', name: 'APA Hotel Yamanote Otsuka Ekimae Tower', area: 'Toshima', pricePerNight: 75, rating: 8.5, url: 'https://www.booking.com/hotel/jp/apa-yamanote-otsuka-eki-tower.html', lat: 35.731481, lng: 139.726325 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'Hotel Monterey Hanzomon', area: 'Chiyoda', pricePerNight: 93, rating: 8.7, url: 'https://www.booking.com/hotel/jp/monterey-hanzomon.html', lat: 35.68669, lng: 139.741952 },
    { tier: 'luxury', tierLabel: 'Luxury', name: 'Asakusa Tobu Hotel', area: 'Taito', pricePerNight: 152, rating: 9.1, url: 'https://www.booking.com/hotel/jp/asakusa-tobu.html', lat: 35.711322, lng: 139.797564 },
  ],
  lisbon: [
    { tier: 'budget', tierLabel: 'Budget', name: 'New Style Lisbon Hotel', area: 'Arroios', pricePerNight: 125, rating: 8.8, url: 'https://www.booking.com/hotel/pt/estrela-dos-santos.html', lat: 38.725058, lng: -9.135194 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'Ouro Rossio Hotel', area: 'Lisbon City Center', pricePerNight: 173, rating: 9.3, url: 'https://www.booking.com/hotel/pt/ouro-rossio.html', lat: 38.712571, lng: -9.138929 },
    { tier: 'luxury', tierLabel: 'Luxury', name: 'Once Upon Lisboa', area: 'Santa Maria Maior', pricePerNight: 275, rating: 9.2, url: 'https://www.booking.com/hotel/pt/once-upon-lisboa.html', lat: 38.709783, lng: -9.134566 },
  ],
  barcelona: [
    { tier: 'budget', tierLabel: 'Budget', name: 'La Terrassa', area: 'Raval', pricePerNight: 140, rating: 8.5, url: 'https://www.booking.com/hotel/es/la-terrassa-barcelona.html', lat: 41.37998, lng: 2.171366 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'Hotel Rialto', area: 'Gothic Quarter', pricePerNight: 202, rating: 8.7, url: 'https://www.booking.com/hotel/es/rialto.html', lat: 41.382107, lng: 2.17643 },
    { tier: 'luxury', tierLabel: 'Luxury', name: 'Hotel 1898', area: 'La Rambla', pricePerNight: 226, rating: 8.9, url: 'https://www.booking.com/hotel/es/hotel.html', lat: 41.383502, lng: 2.171197 },
  ],
  paris: [
    { tier: 'budget', tierLabel: 'Budget', name: 'Altona', area: '10th arr.', pricePerNight: 140, rating: 7.8, url: 'https://www.booking.com/hotel/fr/altona-paris.html', lat: 48.8825, lng: 2.34973 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'Résidence du Pré', area: '9th arr.', pricePerNight: 166, rating: 8.4, url: 'https://www.booking.com/hotel/fr/residence-du-pre.html', lat: 48.87839, lng: 2.347623 },
    { tier: 'luxury', tierLabel: 'Luxury', name: 'Pullman Paris Tour Eiffel', area: '15th arr., near the Eiffel Tower', pricePerNight: 470, rating: 8.1, url: 'https://www.booking.com/hotel/fr/tour-eiffel.html', lat: 48.855604, lng: 2.292562 },
  ],
  london: [
    { tier: 'budget', tierLabel: 'Budget', name: 'Central Park Hotel', area: 'Bayswater', pricePerNight: 123, rating: 7.2, url: 'https://www.booking.com/hotel/gb/centralparklondon.html', lat: 51.511303, lng: -0.185256 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'citizenM London Bankside', area: 'Southwark', pricePerNight: 156, rating: 8.6, url: 'https://www.booking.com/hotel/gb/citizenm-london-bankside.html', lat: 51.505243, lng: -0.098201 },
    { tier: 'luxury', tierLabel: 'Luxury', name: 'The Welbeck Hotel by IHG', area: 'Westminster', pricePerNight: 278, rating: 8.7, url: 'https://www.booking.com/hotel/gb/the-welbeck-hotel.html', lat: 51.516957, lng: -0.14915 },
  ],
};

function curatedCityKey(destination) {
  const d = destination.toLowerCase();
  if (d.includes('tokyo')) return 'tokyo';
  if (d.includes('lisbon')) return 'lisbon';
  if (d.includes('barcelona')) return 'barcelona';
  if (d.includes('paris')) return 'paris';
  if (d.includes('london')) return 'london';
  return null;
}

// Roughly 40% of total trip budget is assumed to go toward lodging; the rest
// covers food, activities, and transport. That nightly lodging allowance
// decides which tier gets flagged as the recommended match.
export function nightlyLodgingBudget(trip) {
  if (!trip.budget || !trip.dayCount) return null;
  return (trip.budget * 0.4) / trip.dayCount;
}

function tierForNightlyBudget(nightly) {
  if (nightly == null) return null;
  if (nightly < 70) return 'budget';
  if (nightly <= 200) return 'midrange';
  return 'luxury';
}

// Returns real, verified Booking.com listings for the destinations we've
// curated. For any other destination, we don't have pre-verified listings —
// rather than invent a specific property name, we return a single real
// search link so the user sees actual current Booking.com inventory.
export function suggestHotels(trip) {
  const nightly = nightlyLodgingBudget(trip);
  const recommendedTier = tierForNightlyBudget(nightly);
  const cityKey = curatedCityKey(trip.destination);

  if (cityKey) {
    return REAL_HOTELS[cityKey].map((h) => ({ ...h, id: h.tier, recommended: h.tier === recommendedTier }));
  }

  return [
    {
      id: 'search',
      isSearchLink: true,
      city: trip.destination.split(',')[0].trim(),
      url: `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(trip.destination)}`,
    },
  ];
}
