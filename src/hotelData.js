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
  rome: [
    { tier: 'budget', tierLabel: 'Budget', name: 'Hotel Silla', area: 'Vaticano Prati', pricePerNight: 147, rating: 8.4, url: 'https://www.booking.com/hotel/it/silla-roma.html', lat: 41.90934, lng: 12.459121 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'Roma Veneto Relais', area: 'Rome City Center', pricePerNight: 190, rating: 8.7, url: 'https://www.booking.com/hotel/it/roma-veneto-relais.html', lat: 41.908489, lng: 12.497386 },
    { tier: 'luxury', tierLabel: 'Luxury', name: 'Torre Argentina Relais', area: 'Pantheon', pricePerNight: 436, rating: 9.4, url: 'https://www.booking.com/hotel/it/torre-argentina-relais-residenze-di-charme.html', lat: 41.895249, lng: 12.476264 },
  ],
  amsterdam: [
    { tier: 'budget', tierLabel: 'Budget', name: 'Hotel Park Plantage', area: 'Amsterdam City Center', pricePerNight: 163, rating: 7.7, url: 'https://www.booking.com/hotel/nl/alfa-plantage.html', lat: 52.366433, lng: 4.911369 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'Hotel Aalders', area: 'Oud Zuid', pricePerNight: 232, rating: 9.0, url: 'https://www.booking.com/hotel/nl/aalders.html', lat: 52.359579, lng: 4.880944 },
    { tier: 'luxury', tierLabel: 'Luxury', name: "art'otel amsterdam", area: 'Amsterdam City Center', pricePerNight: 404, rating: 8.8, url: 'https://www.booking.com/hotel/nl/art-otel-amsterdam.html', lat: 52.377672, lng: 4.897215 },
  ],
  athens: [
    { tier: 'budget', tierLabel: 'Budget', name: 'Athens Connection Apartments', area: 'Athens City Centre', pricePerNight: 85, rating: 8.1, url: 'https://www.booking.com/hotel/gr/the-aa-apartments.html', lat: 37.983805, lng: 23.732905 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'Elevate Athens', area: 'Athens City Centre', pricePerNight: 152, rating: 9.1, url: 'https://www.booking.com/hotel/gr/elevate-athens.html', lat: 37.986156, lng: 23.721538 },
    { tier: 'luxury', tierLabel: 'Luxury', name: 'B4B Athens Signature Hotel', area: 'Neos Kosmos', pricePerNight: 184, rating: 9.0, url: 'https://www.booking.com/hotel/gr/b-for-boutique-athens-signature.html', lat: 37.965469, lng: 23.730882 },
  ],
  bangkok: [
    { tier: 'budget', tierLabel: 'Budget', name: 'Charlie House Pin Klao', area: 'Bangkok Old Town', pricePerNight: 32, rating: 8.7, url: 'https://www.booking.com/hotel/th/charlie-house-pin-klao.html', lat: 13.778128, lng: 100.480779 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'Riva Surya Bangkok', area: 'Bangkok Old Town', pricePerNight: 81, rating: 9.2, url: 'https://www.booking.com/hotel/th/riva-surya-bangkok.html', lat: 13.762005, lng: 100.49311 },
    { tier: 'luxury', tierLabel: 'Luxury', name: 'lebua at State Tower', area: 'Bang Rak', pricePerNight: 146, rating: 8.7, url: 'https://www.booking.com/hotel/th/lebua-at-state-tower.html', lat: 13.721837, lng: 100.516904 },
  ],
  dubai: [
    { tier: 'budget', tierLabel: 'Budget', name: 'Hampton By Hilton Dubai Airport', area: 'Al Qusais', pricePerNight: 46, rating: 7.9, url: 'https://www.booking.com/hotel/ae/hampton-by-hilton-dubai-airport.html', lat: 25.272449, lng: 55.38056 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'Royal Central Hotel and Resort The Palm', area: 'Palm Jumeirah', pricePerNight: 105, rating: 8.6, url: 'https://www.booking.com/hotel/ae/royal-central-the-palm.html', lat: 25.126015, lng: 55.152474 },
    { tier: 'luxury', tierLabel: 'Luxury', name: 'Kempinski Hotel Mall of the Emirates', area: 'Al Barsha', pricePerNight: 299, rating: 9.0, url: 'https://www.booking.com/hotel/ae/kempinski-mall-of-the-emirates.html', lat: 25.118748, lng: 55.197456 },
  ],
  singapore: [
    { tier: 'budget', tierLabel: 'Budget', name: 'KēSa House', area: 'Chinatown', pricePerNight: 100, rating: 8.6, url: 'https://www.booking.com/hotel/sg/kesa-house-singapore.html', lat: 1.280595, lng: 103.84136 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'Holiday Inn Express Singapore Orchard Road', area: 'Somerset', pricePerNight: 174, rating: 8.4, url: 'https://www.booking.com/hotel/sg/holiday-inn-express-singapore-orchard-road.html', lat: 1.303447, lng: 103.836717 },
    { tier: 'luxury', tierLabel: 'Luxury', name: 'The Fullerton Hotel Singapore', area: 'Downtown Singapore', pricePerNight: 360, rating: 9.2, url: 'https://www.booking.com/hotel/sg/the-fullerton-singapore.html', lat: 1.28559, lng: 103.853057 },
  ],
  cairo: [
    { tier: 'budget', tierLabel: 'Budget', name: 'Flower Pyramids Inn', area: 'Giza', pricePerNight: 18, rating: 8.8, url: 'https://www.booking.com/hotel/eg/flower-pyramids-inn.html', lat: 29.978046, lng: 31.144414 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'Vincci Pyramids View', area: 'Giza', pricePerNight: 50, rating: 9.5, url: 'https://www.booking.com/hotel/eg/vincci-pyramids-view.html', lat: 29.98225, lng: 31.140036 },
    { tier: 'luxury', tierLabel: 'Luxury', name: 'Kempinski Nile Hotel', area: 'Garden City', pricePerNight: 161, rating: 8.6, url: 'https://www.booking.com/hotel/eg/kempinski-nile-cairo.html', lat: 30.038658, lng: 31.230344 },
  ],
  'new york': [
    { tier: 'budget', tierLabel: 'Budget', name: 'ROW NYC at Times Square', area: 'Manhattan', pricePerNight: 295, rating: 7.5, url: 'https://www.booking.com/hotel/us/row-nyc1.html', lat: 40.758762, lng: -73.988463 },
    { tier: 'midrange', tierLabel: 'Mid-range', name: 'SpringHill Suites Times Square South', area: 'Manhattan', pricePerNight: 322, rating: 8.3, url: 'https://www.booking.com/hotel/us/springhill-suites-by-marriott-new-york-manhattan-times-square-36th-st.html', lat: 40.754011, lng: -73.993972 },
    { tier: 'luxury', tierLabel: 'Luxury', name: 'The Michelangelo New York', area: 'Manhattan', pricePerNight: 446, rating: 8.5, url: 'https://www.booking.com/hotel/us/the-michelangelo.html', lat: 40.76157, lng: -73.982578 },
  ],
};

function curatedCityKey(destination) {
  const d = destination.toLowerCase();
  if (d.includes('tokyo')) return 'tokyo';
  if (d.includes('lisbon')) return 'lisbon';
  if (d.includes('barcelona')) return 'barcelona';
  if (d.includes('paris')) return 'paris';
  if (d.includes('london')) return 'london';
  if (d.includes('rome')) return 'rome';
  if (d.includes('amsterdam')) return 'amsterdam';
  if (d.includes('athens')) return 'athens';
  if (d.includes('bangkok')) return 'bangkok';
  if (d.includes('dubai')) return 'dubai';
  if (d.includes('singapore')) return 'singapore';
  if (d.includes('cairo')) return 'cairo';
  if (d.includes('new york')) return 'new york';
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
