export const CATEGORY_META = {
  dining: { label: 'Dining', color: '#2F8F82' },
  tour: { label: 'Tour', color: '#E0663F' },
  transport: { label: 'Transport', color: '#3B5166' },
  lodging: { label: 'Lodging', color: '#8A5A72' },
  activity: { label: 'Activity', color: '#C9922E' },
  shopping: { label: 'Shopping', color: '#5C7A99' },
};

export const AVATAR_COLORS = ['#E0663F', '#2F8F82', '#8A5A72', '#5C7A99', '#C9922E'];

export const PIN_POS = [
  { top: '18%', left: '22%' },
  { top: '32%', left: '62%' },
  { top: '58%', left: '30%' },
  { top: '70%', left: '68%' },
  { top: '44%', left: '46%' },
  { top: '20%', left: '75%' },
];

export const GEN_STEPS = [
  'Understanding your preferences',
  'Finding hidden gems',
  'Optimizing your route',
  'Balancing your budget',
];

export function tokyoTrip() {
  return {
    id: 'tokyo',
    title: 'Tokyo Adventure',
    destination: 'Tokyo, Japan',
    dateLabel: 'Mar 14 – 19',
    dayCount: 4,
    generated: false,
    members: [
      { id: 'you', name: 'You', initials: 'Y', color: '#E0663F', role: 'organizer', status: 'joined' },
      { id: 'maya', name: 'Maya Chen', initials: 'MC', color: '#2F8F82', role: 'collaborator', status: 'joined' },
      { id: 'jordan', name: 'Jordan Reyes', initials: 'JR', color: '#8A5A72', role: 'collaborator', status: 'joined' },
      { id: 'priya', name: 'Priya Patel', initials: 'PP', color: '#5C7A99', role: 'collaborator', status: 'pending' },
    ],
    activities: [
      { id: 't1', day: 1, time: '9:00 AM', name: 'Check in — Park Hyatt Tokyo', category: 'lodging', cost: 0, addedBy: 'you', notes: 'Late checkout requested' },
      { id: 't2', day: 1, time: '11:30 AM', name: 'Tsukiji Outer Market food crawl', category: 'dining', cost: 25, addedBy: 'maya', notes: '' },
      { id: 't3', day: 1, time: '2:00 PM', name: 'Senso-ji Temple & Nakamise Street', category: 'tour', cost: 0, addedBy: 'you', notes: '' },
      { id: 't4', day: 1, time: '7:00 PM', name: 'Omakase dinner at Sushi Saito', category: 'dining', cost: 180, addedBy: 'you', notes: 'Reservation under Reyes' },
      { id: 't5', day: 2, time: '8:00 AM', name: 'teamLab Planets digital art museum', category: 'activity', cost: 32, addedBy: 'jordan', notes: '' },
      { id: 't6', day: 2, time: '12:30 PM', name: 'Ramen at Ichiran Shibuya', category: 'dining', cost: 14, addedBy: 'you', notes: '' },
      { id: 't7', day: 2, time: '3:00 PM', name: 'Shibuya Crossing & shopping', category: 'shopping', cost: 0, addedBy: 'maya', notes: '' },
      { id: 't8', day: 2, time: '8:00 PM', name: 'Golden Gai bar hopping', category: 'activity', cost: 40, addedBy: 'maya', notes: '' },
      { id: 't9', day: 3, time: '7:00 AM', name: 'Mt. Fuji day trip — bus transfer', category: 'transport', cost: 85, addedBy: 'you', notes: '' },
      { id: 't10', day: 3, time: '12:00 PM', name: 'Lakeside lunch at Kawaguchiko', category: 'dining', cost: 20, addedBy: 'jordan', notes: '' },
      { id: 't11', day: 3, time: '6:30 PM', name: 'Ryokan onsen & return to Tokyo', category: 'activity', cost: 60, addedBy: 'you', notes: '' },
      { id: 't12', day: 4, time: '9:00 AM', name: 'Meiji Shrine morning walk', category: 'tour', cost: 0, addedBy: 'you', notes: '' },
      { id: 't13', day: 4, time: '12:00 PM', name: 'Harajuku street food', category: 'dining', cost: 18, addedBy: 'maya', notes: '' },
      { id: 't14', day: 4, time: '3:00 PM', name: 'Depachika gift shopping', category: 'shopping', cost: 50, addedBy: 'you', notes: '' },
      { id: 't15', day: 4, time: '8:00 PM', name: 'Farewell dinner at Gonpachi', category: 'dining', cost: 70, addedBy: 'you', notes: '' },
    ],
  };
}

export const LISBON_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Arrive & check in — Alfama guesthouse', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Pastéis de Belém & Jerónimos Monastery', category: 'tour', cost: 12 },
  { day: 1, time: '2:00 PM', name: 'Tram 28 ride through Alfama', category: 'activity', cost: 3 },
  { day: 1, time: '7:30 PM', name: 'Fado dinner in Alfama', category: 'dining', cost: 45 },
  { day: 2, time: '8:30 AM', name: 'Time Out Market breakfast', category: 'dining', cost: 15 },
  { day: 2, time: '10:30 AM', name: 'LX Factory street art & shops', category: 'shopping', cost: 0 },
  { day: 2, time: '1:00 PM', name: 'Sintra day trip — Pena Palace', category: 'tour', cost: 38 },
  { day: 2, time: '8:00 PM', name: 'Bairro Alto bar hopping', category: 'activity', cost: 30 },
  { day: 3, time: '9:00 AM', name: 'Miradouro sunrise walk', category: 'tour', cost: 0 },
  { day: 3, time: '12:00 PM', name: 'Cacilhas ferry & riverside lunch', category: 'dining', cost: 22 },
  { day: 3, time: '3:00 PM', name: 'Feira da Ladra flea market', category: 'shopping', cost: 10 },
  { day: 3, time: '8:30 PM', name: 'Farewell dinner at Ramiro', category: 'dining', cost: 55 },
];

export const BARCELONA_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — Gothic Quarter boutique hotel', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Sagrada Família guided tour', category: 'tour', cost: 35 },
  { day: 1, time: '2:00 PM', name: 'La Boqueria market food crawl', category: 'dining', cost: 20 },
  { day: 1, time: '7:30 PM', name: 'Tapas dinner in El Born', category: 'dining', cost: 40 },
  { day: 2, time: '9:00 AM', name: 'Park Güell sunrise walk', category: 'tour', cost: 10 },
  { day: 2, time: '12:00 PM', name: 'Bike ride along Barceloneta beach', category: 'activity', cost: 15 },
  { day: 2, time: '2:30 PM', name: 'Gothic Quarter & Picasso Museum', category: 'tour', cost: 14 },
  { day: 2, time: '8:00 PM', name: 'Rooftop dinner with Sagrada view', category: 'dining', cost: 60 },
  { day: 3, time: '9:30 AM', name: 'Montjuïc cable car & castle', category: 'activity', cost: 20 },
  { day: 3, time: '1:00 PM', name: 'Paella lunch at the port', category: 'dining', cost: 28 },
  { day: 3, time: '4:00 PM', name: 'El Raval shopping & street art', category: 'shopping', cost: 0 },
  { day: 3, time: '9:00 PM', name: 'Flamenco show in Poble Sec', category: 'activity', cost: 45 },
];

export function genericItinerary(city) {
  return [
    { day: 1, time: '9:00 AM', name: `Check in — boutique stay in ${city}`, category: 'lodging', cost: 0 },
    { day: 1, time: '11:00 AM', name: `Old town walking tour of ${city}`, category: 'tour', cost: 15 },
    { day: 1, time: '1:30 PM', name: 'Central market food crawl', category: 'dining', cost: 18 },
    { day: 1, time: '7:30 PM', name: `Signature dinner in ${city}`, category: 'dining', cost: 50 },
    { day: 2, time: '9:00 AM', name: 'Local history museum visit', category: 'tour', cost: 12 },
    { day: 2, time: '12:00 PM', name: 'Neighborhood bike tour', category: 'activity', cost: 10 },
    { day: 2, time: '3:00 PM', name: 'Artisan market & shopping', category: 'shopping', cost: 0 },
    { day: 2, time: '8:00 PM', name: 'Rooftop views & drinks', category: 'activity', cost: 25 },
    { day: 3, time: '9:00 AM', name: 'Sunrise viewpoint walk', category: 'tour', cost: 0 },
    { day: 3, time: '12:30 PM', name: 'Waterfront lunch', category: 'dining', cost: 20 },
    { day: 3, time: '3:30 PM', name: 'Day trip to a nearby highlight', category: 'activity', cost: 35 },
    { day: 3, time: '8:30 PM', name: `Farewell dinner in ${city}`, category: 'dining', cost: 55 },
  ];
}

export function pickItinerary(destination) {
  const d = destination.toLowerCase();
  if (d.includes('lisbon')) return LISBON_CANNED;
  if (d.includes('barcelona')) return BARCELONA_CANNED;
  return genericItinerary(destination.split(',')[0].trim());
}

export function initialFlights() {
  return [
    { id: 'f1', flightNumber: 'NH 176', airline: 'ANA', from: 'SFO', to: 'HND', departDate: 'Mar 14', departTime: '11:20 AM', arriveDate: 'Mar 15', arriveTime: '3:15 PM', seat: '24A', confirmation: 'ZK4PLQ', alertsEnabled: true, alert: { message: 'Gate changed to 86', time: '2h ago' } },
    { id: 'f2', flightNumber: 'NH 175', airline: 'ANA', from: 'HND', to: 'SFO', departDate: 'Mar 19', departTime: '5:05 PM', arriveDate: 'Mar 19', arriveTime: '10:40 AM', seat: '24A', confirmation: 'ZK4PLQ', alertsEnabled: true, alert: null },
  ];
}
