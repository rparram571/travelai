export const HOTEL_TIERS = [
  { id: 'budget', label: 'Budget', nameTemplate: (city) => `${city} Central Hostel`, area: 'Old Town', pricePerNight: 45, rating: 4.1 },
  { id: 'midrange', label: 'Mid-range', nameTemplate: (city) => `${city} Boutique Inn`, area: 'City Center', pricePerNight: 140, rating: 4.5 },
  { id: 'luxury', label: 'Luxury', nameTemplate: (city) => `${city} Grand Hotel & Spa`, area: 'Waterfront', pricePerNight: 320, rating: 4.8 },
];

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

export function suggestHotels(trip) {
  const city = trip.destination.split(',')[0].trim();
  const nightly = nightlyLodgingBudget(trip);
  const recommendedTier = tierForNightlyBudget(nightly);
  return HOTEL_TIERS.map((tier) => ({
    id: tier.id,
    tierLabel: tier.label,
    name: tier.nameTemplate(city),
    area: tier.area,
    pricePerNight: tier.pricePerNight,
    rating: tier.rating,
    recommended: tier.id === recommendedTier,
  }));
}
