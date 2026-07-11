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
    budget: 3200,
    generated: false,
    hotels: [
      { id: 'h1', name: 'Park Hyatt Tokyo', area: 'Shinjuku', pricePerNight: 620, nights: 5, confirmation: 'PHT-88214', url: 'https://www.booking.com/searchresults.html?ss=Park+Hyatt+Tokyo', addedBy: 'you' },
    ],
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
      { id: 't9', day: 3, time: '7:00 AM', name: 'Mt. Fuji day trip — bus transfer', category: 'transport', cost: 85, addedBy: 'you', notes: '', bookingUrl: 'https://www.booking.com/attractions/jp/prvhogy9tp3t-mount-fuji-day-trip-with-matcha-making-experience.en-gb.html' },
      { id: 't10', day: 3, time: '12:00 PM', name: 'Lakeside lunch at Kawaguchiko', category: 'dining', cost: 20, addedBy: 'jordan', notes: '' },
      { id: 't11', day: 3, time: '6:30 PM', name: 'Ryokan onsen & return to Tokyo', category: 'activity', cost: 60, addedBy: 'you', notes: '' },
      { id: 't12', day: 4, time: '9:00 AM', name: 'Meiji Shrine morning walk', category: 'tour', cost: 0, addedBy: 'you', notes: '' },
      { id: 't13', day: 4, time: '12:00 PM', name: 'Harajuku street food', category: 'dining', cost: 18, addedBy: 'maya', notes: '' },
      { id: 't14', day: 4, time: '3:00 PM', name: 'Depachika gift shopping', category: 'shopping', cost: 50, addedBy: 'you', notes: '' },
      { id: 't15', day: 4, time: '8:00 PM', name: 'Farewell dinner at Gonpachi', category: 'dining', cost: 70, addedBy: 'you', notes: '' },
    ],
  };
}

export const TOKYO_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — hotel in central Tokyo', category: 'lodging', cost: 0 },
  { day: 1, time: '11:30 AM', name: 'Tsukiji Outer Market food crawl', category: 'dining', cost: 25 },
  { day: 1, time: '2:00 PM', name: 'Senso-ji Temple & Nakamise Street', category: 'tour', cost: 0 },
  { day: 1, time: '7:00 PM', name: 'Omakase dinner at Sushi Saito', category: 'dining', cost: 180 },
  { day: 2, time: '8:00 AM', name: 'teamLab Planets digital art museum', category: 'activity', cost: 32, bookingUrl: attractionsSearchUrl('Tokyo') },
  { day: 2, time: '12:30 PM', name: 'Ramen at Ichiran Shibuya', category: 'dining', cost: 14 },
  { day: 2, time: '3:00 PM', name: 'Shibuya Crossing & shopping', category: 'shopping', cost: 0 },
  { day: 2, time: '8:00 PM', name: 'Golden Gai bar hopping', category: 'activity', cost: 40 },
  { day: 3, time: '7:00 AM', name: 'Mt. Fuji day trip — bus transfer', category: 'transport', cost: 85, bookingUrl: 'https://www.booking.com/attractions/jp/prvhogy9tp3t-mount-fuji-day-trip-with-matcha-making-experience.en-gb.html' },
  { day: 3, time: '12:00 PM', name: 'Lakeside lunch at Kawaguchiko', category: 'dining', cost: 20 },
  { day: 3, time: '6:30 PM', name: 'Ryokan onsen & return to Tokyo', category: 'activity', cost: 60 },
  { day: 4, time: '9:00 AM', name: 'Meiji Shrine morning walk', category: 'tour', cost: 0 },
  { day: 4, time: '12:00 PM', name: 'Harajuku street food', category: 'dining', cost: 18 },
  { day: 4, time: '3:00 PM', name: 'Depachika gift shopping', category: 'shopping', cost: 50 },
  { day: 4, time: '8:00 PM', name: 'Farewell dinner at Gonpachi', category: 'dining', cost: 70 },
];

export const LISBON_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Arrive & check in — Alfama guesthouse', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Pastéis de Belém & Jerónimos Monastery', category: 'tour', cost: 12 },
  { day: 1, time: '2:00 PM', name: 'Tram 28 ride through Alfama', category: 'activity', cost: 3 },
  { day: 1, time: '7:30 PM', name: 'Fado dinner in Alfama', category: 'dining', cost: 45 },
  { day: 2, time: '8:30 AM', name: 'Time Out Market breakfast', category: 'dining', cost: 15 },
  { day: 2, time: '10:30 AM', name: 'LX Factory street art & shops', category: 'shopping', cost: 0 },
  { day: 2, time: '1:00 PM', name: 'Sintra day trip — Pena Palace', category: 'tour', cost: 38, bookingUrl: 'https://www.booking.com/attractions/pt/pr9oiumipkgu-lisbon-pena-palace-garden-sintra-caboroca-cascais-day-tour.en-gb.html' },
  { day: 2, time: '8:00 PM', name: 'Bairro Alto bar hopping', category: 'activity', cost: 30 },
  { day: 3, time: '9:00 AM', name: 'Miradouro sunrise walk', category: 'tour', cost: 0 },
  { day: 3, time: '12:00 PM', name: 'Cacilhas ferry & riverside lunch', category: 'dining', cost: 22 },
  { day: 3, time: '3:00 PM', name: 'Feira da Ladra flea market', category: 'shopping', cost: 10 },
  { day: 3, time: '8:30 PM', name: 'Dinner at Ramiro', category: 'dining', cost: 55 },
  { day: 4, time: '9:00 AM', name: 'Belém Tower & Discoveries Monument walk', category: 'tour', cost: 10, bookingUrl: attractionsSearchUrl('Lisbon') },
  { day: 4, time: '12:00 PM', name: 'Alfama walking tour with a local guide', category: 'tour', cost: 20, bookingUrl: attractionsSearchUrl('Lisbon') },
  { day: 4, time: '4:00 PM', name: 'Tagus river sunset cruise', category: 'activity', cost: 25, bookingUrl: attractionsSearchUrl('Lisbon') },
  { day: 4, time: '8:00 PM', name: 'Farewell dinner in Chiado', category: 'dining', cost: 50 },
];

export const BARCELONA_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — Gothic Quarter boutique hotel', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Sagrada Família guided tour', category: 'tour', cost: 35, bookingUrl: 'https://www.booking.com/attractions/es/prubmppb2v6n-sagrada-familia-tour-with-skip-the-line-tickets.en-gb.html' },
  { day: 1, time: '2:00 PM', name: 'La Boqueria market food crawl', category: 'dining', cost: 20 },
  { day: 1, time: '7:30 PM', name: 'Tapas dinner in El Born', category: 'dining', cost: 40 },
  { day: 2, time: '9:00 AM', name: 'Park Güell sunrise walk', category: 'tour', cost: 10, bookingUrl: 'https://www.booking.com/attractions/es/prp9at1egmyc-park-guell-admission-ticket.en-gb.html' },
  { day: 2, time: '12:00 PM', name: 'Bike ride along Barceloneta beach', category: 'activity', cost: 15 },
  { day: 2, time: '2:30 PM', name: 'Gothic Quarter & Picasso Museum', category: 'tour', cost: 14 },
  { day: 2, time: '8:00 PM', name: 'Rooftop dinner with Sagrada view', category: 'dining', cost: 60 },
  { day: 3, time: '9:30 AM', name: 'Montjuïc cable car & castle', category: 'activity', cost: 20 },
  { day: 3, time: '1:00 PM', name: 'Paella lunch at the port', category: 'dining', cost: 28 },
  { day: 3, time: '4:00 PM', name: 'El Raval shopping & street art', category: 'shopping', cost: 0 },
  { day: 3, time: '9:00 PM', name: 'Flamenco show in Poble Sec', category: 'activity', cost: 45 },
  { day: 4, time: '9:00 AM', name: 'Casa Batlló guided visit', category: 'tour', cost: 35, bookingUrl: attractionsSearchUrl('Barcelona') },
  { day: 4, time: '12:00 PM', name: 'La Pedrera (Casa Milà) rooftop visit', category: 'tour', cost: 28, bookingUrl: attractionsSearchUrl('Barcelona') },
  { day: 4, time: '3:00 PM', name: 'Casa Vicens & Gràcia neighborhood walk', category: 'tour', cost: 18, bookingUrl: attractionsSearchUrl('Barcelona') },
  { day: 4, time: '8:00 PM', name: 'Farewell dinner in Eixample', category: 'dining', cost: 50 },
];

export const PARIS_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — hotel in central Paris', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Eiffel Tower & Seine River cruise', category: 'tour', cost: 20, bookingUrl: 'https://www.booking.com/attractions/fr/prvpg5s3r713-city-sightseeing-cruise.en-gb.html' },
  { day: 1, time: '2:00 PM', name: 'Louvre Museum', category: 'tour', cost: 90, bookingUrl: 'https://www.booking.com/attractions/fr/prcon8l4d4vy-priority-admission-to-the-louvre-museum.en-gb.html' },
  { day: 1, time: '7:30 PM', name: 'Dinner in Le Marais', category: 'dining', cost: 55 },
  { day: 2, time: '9:00 AM', name: "Musée d'Orsay", category: 'tour', cost: 19, bookingUrl: 'https://www.booking.com/attractions/fr/prf8k7u6zclm-musee-dorsay-admission.en-gb.html' },
  { day: 2, time: '12:00 PM', name: 'Latin Quarter food crawl', category: 'dining', cost: 25 },
  { day: 2, time: '2:30 PM', name: "Arc de Triomphe rooftop", category: 'tour', cost: 27, bookingUrl: 'https://www.booking.com/attractions/fr/prza0zcg7yzs-admission-to-the-arc-de-triomphes-rooftop.en-gb.html' },
  { day: 2, time: '8:00 PM', name: 'Champs-Élysées evening walk & shopping', category: 'shopping', cost: 0 },
  { day: 3, time: '9:00 AM', name: 'Palace of Versailles day trip', category: 'tour', cost: 37, bookingUrl: 'https://www.booking.com/attractions/fr/prr9h7knmiym-palace-of-versailles.en-gb.html' },
  { day: 3, time: '1:00 PM', name: 'Lunch in the Versailles gardens', category: 'dining', cost: 24 },
  { day: 3, time: '4:00 PM', name: "Musée de l'Orangerie", category: 'tour', cost: 20, bookingUrl: 'https://www.booking.com/attractions/fr/prf1tatpq2cs-admission-to-the-orangerie-museum.en-gb.html' },
  { day: 3, time: '8:30 PM', name: 'Dinner in Saint-Germain', category: 'dining', cost: 60 },
  { day: 4, time: '8:00 AM', name: 'Disneyland Paris day trip', category: 'tour', cost: 75, bookingUrl: attractionsSearchUrl('Paris') },
  { day: 4, time: '1:00 PM', name: 'Lunch in Disney Village', category: 'dining', cost: 25 },
  { day: 4, time: '7:00 PM', name: 'Seine river evening cruise', category: 'activity', cost: 15, bookingUrl: attractionsSearchUrl('Paris') },
  { day: 4, time: '9:00 PM', name: 'Farewell dinner near the Eiffel Tower', category: 'dining', cost: 60 },
];

export const LONDON_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — hotel in Westminster', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Tower of London & Tower Bridge Exhibition', category: 'tour', cost: 21, bookingUrl: 'https://www.booking.com/attractions/gb/prbcb8atvur6-admission-to-the-tower-bridge-exhibition.en-gb.html' },
  { day: 1, time: '2:00 PM', name: 'Borough Market food crawl', category: 'dining', cost: 20 },
  { day: 1, time: '7:30 PM', name: 'Dinner in Covent Garden', category: 'dining', cost: 50 },
  { day: 2, time: '9:00 AM', name: 'Westminster Abbey & Big Ben walk', category: 'tour', cost: 36, bookingUrl: 'https://www.booking.com/attractions/gb/prwupwe6plqy-admission-to-westminster-abbey-with-audio-guide.en-gb.html' },
  { day: 2, time: '12:00 PM', name: 'The London Eye', category: 'activity', cost: 35, bookingUrl: 'https://www.booking.com/attractions/gb/prfuy8pijecu-admission-to-the-london-eye-with-4d-cinema-experience.en-gb.html' },
  { day: 2, time: '3:00 PM', name: "Buckingham Palace & St James's Park walk", category: 'tour', cost: 0 },
  { day: 2, time: '8:00 PM', name: 'West End show night', category: 'activity', cost: 65 },
  { day: 3, time: '9:00 AM', name: 'River Thames sightseeing cruise', category: 'tour', cost: 72, bookingUrl: 'https://www.booking.com/attractions/gb/prs7d1dfbrrt-river-thames-cruise.en-gb.html' },
  { day: 3, time: '12:00 PM', name: 'Camden Market lunch & shopping', category: 'shopping', cost: 20 },
  { day: 3, time: '3:00 PM', name: 'The View from The Shard', category: 'activity', cost: 31, bookingUrl: 'https://www.booking.com/attractions/gb/prrv8mzf3hgf-the-view-from-the-shard-skip-the-line-admission.en-gb.html' },
  { day: 3, time: '8:30 PM', name: 'Dinner in Soho', category: 'dining', cost: 58 },
  { day: 4, time: '8:00 AM', name: 'Warner Bros. Studio Tour London — The Making of Harry Potter', category: 'tour', cost: 55, bookingUrl: attractionsSearchUrl('London') },
  { day: 4, time: '1:00 PM', name: 'Lunch near Watford & return to London', category: 'dining', cost: 20 },
  { day: 4, time: '4:00 PM', name: 'Madame Tussauds London', category: 'activity', cost: 40, bookingUrl: attractionsSearchUrl('London') },
  { day: 4, time: '8:00 PM', name: 'Farewell dinner in Notting Hill', category: 'dining', cost: 55 },
];

export const ROME_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — hotel in central Rome', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Colosseum, Roman Forum & Palatine Hill tour', category: 'tour', cost: 91, bookingUrl: 'https://www.booking.com/attractions/it/prypufzclidm-colosseum-guided-tour-with-special-access-to-the-gladiator-arena.en-gb.html' },
  { day: 1, time: '2:00 PM', name: 'The Pantheon', category: 'tour', cost: 16, bookingUrl: 'https://www.booking.com/attractions/it/prvqwdkxh20d-admission-to-the-pantheon.en-gb.html' },
  { day: 1, time: '7:30 PM', name: 'Dinner in Trastevere', category: 'dining', cost: 50 },
  { day: 2, time: '9:00 AM', name: 'Vatican Museums & Sistine Chapel', category: 'tour', cost: 107, bookingUrl: 'https://www.booking.com/attractions/it/prktprrnek2u-vatican-museums-sistine-chapel-fast-track-access.en-gb.html' },
  { day: 2, time: '12:30 PM', name: "St. Peter's Basilica dome climb", category: 'tour', cost: 40, bookingUrl: 'https://www.booking.com/attractions/it/prpbzbuou5yx-st-peters-basilica-grottoes-small-group-tour-with-dome-climb.en-gb.html' },
  { day: 2, time: '3:00 PM', name: 'Trevi Fountain & Spanish Steps walk', category: 'tour', cost: 0 },
  { day: 2, time: '8:00 PM', name: "Dinner in Campo de' Fiori", category: 'dining', cost: 45 },
  { day: 3, time: '9:00 AM', name: 'Borghese Gallery & Gardens walk', category: 'tour', cost: 0 },
  { day: 3, time: '12:00 PM', name: 'Testaccio food market lunch', category: 'dining', cost: 22 },
  { day: 3, time: '3:00 PM', name: 'Piazza Navona shopping', category: 'shopping', cost: 0 },
  { day: 3, time: '8:30 PM', name: 'Dinner in Monti', category: 'dining', cost: 58 },
  { day: 4, time: '9:00 AM', name: 'Rome hop-on-hop-off sightseeing bus tour', category: 'tour', cost: 30, bookingUrl: attractionsSearchUrl('Rome') },
  { day: 4, time: '12:00 PM', name: 'Villa Borghese gardens walk', category: 'tour', cost: 0 },
  { day: 4, time: '3:00 PM', name: 'Appian Way & catacombs tour', category: 'tour', cost: 35, bookingUrl: attractionsSearchUrl('Rome') },
  { day: 4, time: '8:00 PM', name: 'Farewell dinner in Prati', category: 'dining', cost: 52 },
];

export const AMSTERDAM_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — hotel in Amsterdam City Center', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Essential Amsterdam walking tour', category: 'tour', cost: 6, bookingUrl: 'https://www.booking.com/attractions/nl/prqicm5fmzpu-amsterdam-tip-based-walking-tour-with-local-guide.en-gb.html' },
  { day: 1, time: '2:00 PM', name: 'Anne Frank House area & Jordaan walk', category: 'tour', cost: 0 },
  { day: 1, time: '7:30 PM', name: 'Dinner in De Pijp', category: 'dining', cost: 45 },
  { day: 2, time: '9:00 AM', name: 'Rijksmuseum & Van Gogh Museum walk', category: 'tour', cost: 0 },
  { day: 2, time: '12:00 PM', name: 'Amsterdam city canal cruise', category: 'activity', cost: 14, bookingUrl: 'https://www.booking.com/attractions/nl/prswfbbp2s5p-amsterdam-city-canal-cruise.en-gb.html' },
  { day: 2, time: '3:00 PM', name: 'Heineken Experience', category: 'activity', cost: 28, bookingUrl: 'https://www.booking.com/attractions/nl/prahazwttraa-heineken-experience-amsterdam.en-gb.html' },
  { day: 2, time: '8:00 PM', name: 'Evening canal cruise with drinks', category: 'activity', cost: 22, bookingUrl: 'https://www.booking.com/attractions/nl/przhz9wcnhsz-evening-canal-cruise.en-gb.html' },
  { day: 3, time: '9:00 AM', name: 'Day trip to Zaanse Schans windmills & Volendam', category: 'tour', cost: 56, bookingUrl: 'https://www.booking.com/attractions/nl/prnqsdg3swdk-full-day-dutch-countryside-tour-with-canal-cruise.en-gb.html' },
  { day: 3, time: '2:00 PM', name: 'Albert Cuyp Market lunch', category: 'dining', cost: 20 },
  { day: 3, time: '5:00 PM', name: 'A’DAM Lookout at sunset', category: 'activity', cost: 23, bookingUrl: 'https://www.booking.com/attractions/nl/prnhfpgwov2w-adam-lookout-with-two-drinks.en-gb.html' },
  { day: 3, time: '8:30 PM', name: 'Dinner in the Nine Streets', category: 'dining', cost: 52 },
  { day: 4, time: '9:00 AM', name: 'Madame Tussauds Amsterdam', category: 'activity', cost: 27, bookingUrl: attractionsSearchUrl('Amsterdam') },
  { day: 4, time: '12:00 PM', name: 'ARTIS Amsterdam Royal Zoo', category: 'activity', cost: 26, bookingUrl: attractionsSearchUrl('Amsterdam') },
  { day: 4, time: '3:00 PM', name: 'Canal cruise with cheese & wine tasting', category: 'activity', cost: 24, bookingUrl: attractionsSearchUrl('Amsterdam') },
  { day: 4, time: '8:00 PM', name: 'Farewell dinner in Jordaan', category: 'dining', cost: 48 },
];

export const ATHENS_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — hotel in central Athens', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Acropolis & Parthenon skip-the-line tour', category: 'tour', cost: 39, bookingUrl: 'https://www.booking.com/attractions/gr/prqfkfzoziqr-skip-the-line-guided-walking-tour-of-the-acropolis.en-gb.html' },
  { day: 1, time: '2:00 PM', name: 'Plaka neighborhood food crawl', category: 'dining', cost: 22 },
  { day: 1, time: '7:30 PM', name: 'Dinner with Acropolis view in Monastiraki', category: 'dining', cost: 48 },
  { day: 2, time: '9:00 AM', name: 'Ancient Agora & Acropolis Museum walk', category: 'tour', cost: 0 },
  { day: 2, time: '12:00 PM', name: 'Central Market (Varvakios) lunch', category: 'dining', cost: 18 },
  { day: 2, time: '3:00 PM', name: 'Cape Sounion & Temple of Poseidon sunset tour', category: 'tour', cost: 32, bookingUrl: 'https://www.booking.com/attractions/gr/prhmi0tpznoe-temple-of-poseidon-and-cape-sounion-sunset-tour-with-audio-guide.en-gb.html' },
  { day: 2, time: '8:30 PM', name: 'Dinner in Psiri', category: 'dining', cost: 40 },
  { day: 3, time: '9:00 AM', name: 'Day trip to the Meteora monasteries', category: 'tour', cost: 91, bookingUrl: 'https://www.booking.com/attractions/gr/prwimaplhp4e-guided-meteora-tour-from-athens-with-lunch.en-gb.html' },
  { day: 3, time: '5:00 PM', name: 'Ancient Greek theater performance', category: 'activity', cost: 34, bookingUrl: 'https://www.booking.com/attractions/gr/prrrmqbr6viz-ancient-greek-theatre-performance.en-gb.html' },
  { day: 3, time: '8:30 PM', name: 'Dinner in Kolonaki', category: 'dining', cost: 55 },
  { day: 4, time: '7:00 AM', name: 'Mycenae, Epidaurus & Nafplio day trip', category: 'tour', cost: 85, bookingUrl: attractionsSearchUrl('Athens') },
  { day: 4, time: '1:00 PM', name: 'Lunch in Nafplio', category: 'dining', cost: 20 },
  { day: 4, time: '6:00 PM', name: 'Return to Athens & Lycabettus Hill sunset walk', category: 'tour', cost: 0 },
  { day: 4, time: '8:30 PM', name: 'Farewell dinner in Plaka', category: 'dining', cost: 45 },
];

export const BANGKOK_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — hotel in central Bangkok', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Grand Palace & Wat Phra Kaew', category: 'tour', cost: 0 },
  { day: 1, time: '2:00 PM', name: 'Chao Phraya River cruise', category: 'activity', cost: 36, bookingUrl: 'https://www.booking.com/attractions/th/pr75zgdccgsv-chao-phraya-river-cruise.en-gb.html' },
  { day: 1, time: '7:30 PM', name: 'Dinner at Asiatique The Riverfront', category: 'dining', cost: 30 },
  { day: 2, time: '9:00 AM', name: 'Wat Arun & Wat Pho temples', category: 'tour', cost: 0 },
  { day: 2, time: '12:00 PM', name: 'Chinatown (Yaowarat) street food crawl', category: 'dining', cost: 15 },
  { day: 2, time: '3:00 PM', name: 'Mahanakhon SkyWalk', category: 'activity', cost: 42, bookingUrl: 'https://www.booking.com/attractions/th/prbkf4d5gxkx-mahanakhon-skywalk-admission.en-gb.html' },
  { day: 2, time: '8:00 PM', name: 'Rooftop bar evening', category: 'activity', cost: 35 },
  { day: 3, time: '7:00 AM', name: 'Ayutthaya temples & floating market day trip', category: 'tour', cost: 46, bookingUrl: 'https://www.booking.com/attractions/th/prmtb6nsgm44-ayutthaya-temples-and-floating-market-tour.en-gb.html' },
  { day: 3, time: '5:00 PM', name: 'Baiyoke Sky observation deck', category: 'activity', cost: 14, bookingUrl: 'https://www.booking.com/attractions/th/prswqcxqg8oh-baiyoke-sky-hotel-observation-deck-ticket.en-gb.html' },
  { day: 3, time: '8:30 PM', name: 'Dinner & Muay Thai match', category: 'activity', cost: 40, bookingUrl: 'https://www.booking.com/attractions/th/prykvxjrvzjq-muay-thai-boxing-match-admission.en-gb.html' },
  { day: 4, time: '9:00 AM', name: 'Bangkok hop-on-hop-off river boat tour', category: 'tour', cost: 25, bookingUrl: attractionsSearchUrl('Bangkok') },
  { day: 4, time: '12:00 PM', name: 'Jim Thompson House museum visit', category: 'tour', cost: 12, bookingUrl: attractionsSearchUrl('Bangkok') },
  { day: 4, time: '3:00 PM', name: 'Chatuchak Weekend Market shopping', category: 'shopping', cost: 0 },
  { day: 4, time: '7:30 PM', name: 'Farewell dinner cruise on the Chao Phraya', category: 'dining', cost: 55, bookingUrl: attractionsSearchUrl('Bangkok') },
];

export const DUBAI_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — hotel in Downtown Dubai', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Burj Khalifa: Floors 124 & 125', category: 'activity', cost: 51, bookingUrl: 'https://www.booking.com/attractions/ae/pri4rghtphjr-burj-khalifa-admission-tickets-floors-124-and-125.en-gb.html' },
  { day: 1, time: '2:00 PM', name: 'Dubai Mall & Dubai Fountain Show', category: 'tour', cost: 20, bookingUrl: 'https://www.booking.com/attractions/ae/prha8pxb4ekb-dubai-fountain-show-and-boat-ride-on-burj-khalifa-lake.en-gb.html' },
  { day: 1, time: '7:30 PM', name: 'Dinner in Downtown Dubai', category: 'dining', cost: 55 },
  { day: 2, time: '9:00 AM', name: 'Dubai Museum & Al Fahidi historic district', category: 'tour', cost: 0 },
  { day: 2, time: '12:00 PM', name: 'Dubai Marina yacht brunch', category: 'activity', cost: 24, bookingUrl: 'https://www.booking.com/attractions/ae/prr6g6kpyrjc-dubai-marina-yacht-tour.en-gb.html' },
  { day: 2, time: '3:00 PM', name: 'Museum of the Future', category: 'tour', cost: 46, bookingUrl: 'https://www.booking.com/attractions/ae/prgsl33baits-museum-of-the-future.en-gb.html' },
  { day: 2, time: '8:00 PM', name: 'Dubai Frame at sunset', category: 'activity', cost: 13, bookingUrl: 'https://www.booking.com/attractions/ae/prtqonx8ply4-dubai-frame.en-gb.html' },
  { day: 3, time: '9:00 AM', name: 'Gold & Spice Souks of Deira', category: 'shopping', cost: 0 },
  { day: 3, time: '12:00 PM', name: 'Lunch in Old Dubai', category: 'dining', cost: 18 },
  { day: 3, time: '4:00 PM', name: 'Desert safari with BBQ dinner & camel ride', category: 'tour', cost: 23, bookingUrl: 'https://www.booking.com/attractions/ae/prq7lhgvdbyk-dubai-desert-safari-with-bbq-dinner.en-gb.html' },
  { day: 3, time: '8:30 PM', name: 'Bedouin camp entertainment', category: 'activity', cost: 0 },
  { day: 4, time: '7:00 AM', name: 'Abu Dhabi day trip — Sheikh Zayed Grand Mosque & Louvre Abu Dhabi', category: 'tour', cost: 95, bookingUrl: attractionsSearchUrl('Dubai') },
  { day: 4, time: '1:00 PM', name: 'Lunch in Abu Dhabi', category: 'dining', cost: 22 },
  { day: 4, time: '6:00 PM', name: 'Return to Dubai & Sky Views Observatory', category: 'activity', cost: 28, bookingUrl: attractionsSearchUrl('Dubai') },
  { day: 4, time: '8:30 PM', name: 'Farewell dinner in Jumeirah', category: 'dining', cost: 60 },
];

export const SINGAPORE_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — hotel in downtown Singapore', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Gardens by the Bay & Cloud Forest', category: 'tour', cost: 8, bookingUrl: 'https://www.booking.com/attractions/sg/pr2caxgt7ype-gardens-by-the-bay-admission.en-gb.html' },
  { day: 1, time: '2:00 PM', name: 'Marina Bay Sands SkyPark observation deck', category: 'activity', cost: 27, bookingUrl: 'https://www.booking.com/attractions/sg/prfdzdtn89vd-marina-bay-sands-observation-deck-or-sampan-ride.en-gb.html' },
  { day: 1, time: '7:30 PM', name: 'Dinner at Lau Pa Sat hawker center', category: 'dining', cost: 18 },
  { day: 2, time: '9:00 AM', name: 'Chinatown & Buddha Tooth Relic Temple', category: 'tour', cost: 0 },
  { day: 2, time: '12:00 PM', name: 'Singapore River cruise', category: 'activity', cost: 35, bookingUrl: 'https://www.booking.com/attractions/sg/prnlw3iedgqp-city-river-cruise.en-gb.html' },
  { day: 2, time: '3:00 PM', name: 'Singapore Flyer', category: 'activity', cost: 31, bookingUrl: 'https://www.booking.com/attractions/sg/pr0aor5pw4f4-singapore-flyer-experience.en-gb.html' },
  { day: 2, time: '8:00 PM', name: 'Clarke Quay riverside dinner', category: 'dining', cost: 40 },
  { day: 3, time: '9:00 AM', name: 'Sentosa Island cable car', category: 'tour', cost: 25, bookingUrl: 'https://www.booking.com/attractions/sg/pr4rhykdrvkh-singapore-cable-car-sky-pass.en-gb.html' },
  { day: 3, time: '12:00 PM', name: 'S.E.A. Aquarium', category: 'activity', cost: 43, bookingUrl: 'https://www.booking.com/attractions/sg/pr6zdovmr2op-sea-aquariumtm-sentosa-admission.en-gb.html' },
  { day: 3, time: '4:00 PM', name: 'Universal Studios Singapore', category: 'activity', cost: 65, bookingUrl: 'https://www.booking.com/attractions/sg/pryjntakg6os-admission-to-universal-studios-singapore.en-gb.html' },
  { day: 3, time: '8:30 PM', name: 'Dinner at Jewel Changi Airport', category: 'dining', cost: 30, bookingUrl: 'https://www.booking.com/attractions/sg/prs7xeze7mbv-jewel-changi-airport-attraction-tickets.en-gb.html' },
  { day: 4, time: '9:00 AM', name: 'Singapore hop-on-hop-off bus tour', category: 'tour', cost: 40, bookingUrl: attractionsSearchUrl('Singapore') },
  { day: 4, time: '12:00 PM', name: 'Little India & Kampong Glam walking tour', category: 'tour', cost: 0 },
  { day: 4, time: '3:00 PM', name: 'River bumboat cruise at Clarke Quay', category: 'activity', cost: 25, bookingUrl: attractionsSearchUrl('Singapore') },
  { day: 4, time: '8:00 PM', name: 'Farewell dinner at Marina Bay', category: 'dining', cost: 55 },
];

export const CAIRO_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — hotel near the Pyramids of Giza', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Giza Pyramids, Sphinx & Saqqara tour', category: 'tour', cost: 40, bookingUrl: 'https://www.booking.com/attractions/eg/prfxqoswm7rv-giza-pyramids-sphinx-sakkara-and-dahshur-tour.en-gb.html' },
  { day: 1, time: '3:00 PM', name: 'Felucca ride on the Nile', category: 'activity', cost: 25, bookingUrl: 'https://www.booking.com/attractions/eg/przp1jrjwezb-one-hour-nile-river-boat-ride.en-gb.html' },
  { day: 1, time: '7:30 PM', name: 'Dinner in Giza', category: 'dining', cost: 30 },
  { day: 2, time: '8:00 AM', name: 'Pyramids & Grand Egyptian Museum full-day tour', category: 'tour', cost: 74, bookingUrl: 'https://www.booking.com/attractions/eg/prmgubir5kgv-eight-hour-pyramids-egyptian-museum-tour.en-gb.html' },
  { day: 2, time: '1:00 PM', name: 'Lunch near Tahrir Square', category: 'dining', cost: 15 },
  { day: 2, time: '4:00 PM', name: 'Khan el-Khalili bazaar shopping', category: 'shopping', cost: 0 },
  { day: 2, time: '8:00 PM', name: 'Dinner with Nile view', category: 'dining', cost: 35 },
  { day: 3, time: '9:00 AM', name: 'Coptic & Islamic Cairo full-day tour', category: 'tour', cost: 15, bookingUrl: 'https://www.booking.com/attractions/eg/pr9n34tijldd-coptic-and-islamic-cairo-full-day-tour.en-gb.html' },
  { day: 3, time: '4:00 PM', name: 'Cave Church of St. Simeon', category: 'tour', cost: 30, bookingUrl: 'https://www.booking.com/attractions/eg/prntjchgud3s-cave-church-of-st-simeon-guided-tour.en-gb.html' },
  { day: 3, time: '8:30 PM', name: 'Dinner in Zamalek', category: 'dining', cost: 40 },
  { day: 4, time: '6:00 AM', name: 'Alexandria day trip — Bibliotheca Alexandrina & Qaitbay Citadel', category: 'tour', cost: 65, bookingUrl: attractionsSearchUrl('Cairo') },
  { day: 4, time: '1:00 PM', name: 'Lunch in Alexandria', category: 'dining', cost: 18 },
  { day: 4, time: '6:00 PM', name: 'Return to Cairo', category: 'transport', cost: 0 },
  { day: 4, time: '8:30 PM', name: 'Farewell dinner in Garden City', category: 'dining', cost: 42 },
];

export const NEW_YORK_CANNED = [
  { day: 1, time: '9:00 AM', name: 'Check in — hotel in Midtown Manhattan', category: 'lodging', cost: 0 },
  { day: 1, time: '11:00 AM', name: 'Empire State Building', category: 'activity', cost: 48, bookingUrl: 'https://www.booking.com/attractions/us/prjyzis1wfkn-empire-state-building-admission.en-gb.html' },
  { day: 1, time: '2:00 PM', name: 'Times Square & Broadway walk', category: 'tour', cost: 0 },
  { day: 1, time: '7:30 PM', name: "Dinner in Hell's Kitchen", category: 'dining', cost: 55 },
  { day: 2, time: '9:00 AM', name: '9/11 Memorial & Museum', category: 'tour', cost: 36, bookingUrl: 'https://www.booking.com/attractions/us/prgstbyhf5aj-911-memorial-museum-admission.en-gb.html' },
  { day: 2, time: '12:00 PM', name: 'Lunch in the Financial District', category: 'dining', cost: 22 },
  { day: 2, time: '3:00 PM', name: 'One World Observatory', category: 'activity', cost: 48, bookingUrl: 'https://www.booking.com/attractions/us/prbwn2pberlh-one-world-observatory-standard-admission.en-gb.html' },
  { day: 2, time: '8:00 PM', name: 'Broadway show night', category: 'activity', cost: 110 },
  { day: 3, time: '9:00 AM', name: 'Central Park & American Museum of Natural History', category: 'tour', cost: 37, bookingUrl: 'https://www.booking.com/attractions/us/prf0gbm7fltu-american-museum-of-natural-history.en-gb.html' },
  { day: 3, time: '12:00 PM', name: 'Lunch on the Upper West Side', category: 'dining', cost: 25 },
  { day: 3, time: '3:00 PM', name: 'Museum of Modern Art (MoMA)', category: 'tour', cost: 30, bookingUrl: 'https://www.booking.com/attractions/us/profee3joybk-admission-to-the-museum-of-modern-art.en-gb.html' },
  { day: 3, time: '8:00 PM', name: 'Dinner in Greenwich Village', category: 'dining', cost: 65 },
  { day: 4, time: '9:00 AM', name: 'Top of the Rock Observation Deck', category: 'activity', cost: 40, bookingUrl: attractionsSearchUrl('New York') },
  { day: 4, time: '12:00 PM', name: 'Chelsea Market lunch', category: 'dining', cost: 22 },
  { day: 4, time: '3:00 PM', name: 'Edge at Hudson Yards observation deck', category: 'activity', cost: 38, bookingUrl: attractionsSearchUrl('New York') },
  { day: 4, time: '8:00 PM', name: 'Farewell dinner in the West Village', category: 'dining', cost: 65 },
];

// Real, verified Booking.com search endpoints — not an API integration, but a
// guaranteed-real destination rather than an invented specific venue name.
function attractionsSearchUrl(city) {
  return `https://www.booking.com/attractions/searchresults.html?ss=${encodeURIComponent(city)}`;
}
function hotelSearchUrl(city) {
  return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}`;
}

// Rotating pool of 4-activity daily templates, used both to fill out generic
// itineraries beyond day 1 and to extend canned itineraries past their curated
// days. Every slot links to a real Booking.com search for that city/category
// instead of asserting a specific venue exists.
const DAILY_TEMPLATES = [
  [
    { time: '9:00 AM', name: () => 'Local history museum visit', category: 'tour', cost: 12 },
    { time: '12:00 PM', name: () => 'Neighborhood bike tour', category: 'activity', cost: 10 },
    { time: '3:00 PM', name: () => 'Artisan market & shopping', category: 'shopping', cost: 0 },
    { time: '8:00 PM', name: () => 'Rooftop views & drinks', category: 'activity', cost: 25 },
  ],
  [
    { time: '9:00 AM', name: () => 'Sunrise viewpoint walk', category: 'tour', cost: 0 },
    { time: '12:30 PM', name: () => 'Waterfront lunch', category: 'dining', cost: 20 },
    { time: '3:30 PM', name: (city) => `Day trip to a nearby highlight near ${city}`, category: 'activity', cost: 35 },
    { time: '8:30 PM', name: (city) => `Farewell dinner in ${city}`, category: 'dining', cost: 55 },
  ],
  [
    { time: '9:30 AM', name: () => 'Local market breakfast crawl', category: 'dining', cost: 12 },
    { time: '11:30 AM', name: () => 'Guided landmark tour', category: 'tour', cost: 22 },
    { time: '2:30 PM', name: () => 'Free afternoon to explore on your own', category: 'activity', cost: 0 },
    { time: '7:00 PM', name: (city) => `Wine & tapas evening in ${city}`, category: 'dining', cost: 40 },
  ],
  [
    { time: '10:00 AM', name: () => 'Scenic park & garden walk', category: 'tour', cost: 0 },
    { time: '1:00 PM', name: () => 'Street food sampling', category: 'dining', cost: 16 },
    { time: '4:00 PM', name: () => 'Boutique & design shopping', category: 'shopping', cost: 0 },
    { time: '8:00 PM', name: (city) => `Live music night out in ${city}`, category: 'activity', cost: 28 },
  ],
];

function fillerDay(dayNumber, city, templateIndex) {
  const template = DAILY_TEMPLATES[templateIndex % DAILY_TEMPLATES.length];
  return template.map((slot) => ({
    day: dayNumber,
    time: slot.time,
    name: slot.name(city),
    category: slot.category,
    cost: slot.cost,
    bookingUrl: attractionsSearchUrl(city),
  }));
}

export function genericItinerary(city, days) {
  const day1 = [
    { day: 1, time: '9:00 AM', name: `Check in — boutique stay in ${city}`, category: 'lodging', cost: 0, bookingUrl: hotelSearchUrl(city) },
    { day: 1, time: '11:00 AM', name: `Old town walking tour of ${city}`, category: 'tour', cost: 15, bookingUrl: attractionsSearchUrl(city) },
    { day: 1, time: '1:30 PM', name: 'Central market food crawl', category: 'dining', cost: 18, bookingUrl: attractionsSearchUrl(city) },
    { day: 1, time: '7:30 PM', name: `Signature dinner in ${city}`, category: 'dining', cost: 50, bookingUrl: attractionsSearchUrl(city) },
  ];
  const rest = [];
  for (let dayNumber = 2, i = 0; dayNumber <= days; dayNumber++, i++) {
    rest.push(...fillerDay(dayNumber, city, i));
  }
  return [...day1, ...rest];
}

// Extends a curated itinerary with generated filler days when the trip is
// longer than the curated data, or trims it when the trip is shorter.
function adjustToDays(canned, days, city) {
  const maxCannedDay = Math.max(...canned.map((a) => a.day));
  if (days <= maxCannedDay) {
    return canned.filter((a) => a.day <= days);
  }
  const extra = [];
  for (let dayNumber = maxCannedDay + 1, i = 0; dayNumber <= days; dayNumber++, i++) {
    extra.push(...fillerDay(dayNumber, city, i));
  }
  return [...canned, ...extra];
}

const CURATED_ITINERARIES = [
  ['tokyo', TOKYO_CANNED],
  ['lisbon', LISBON_CANNED],
  ['barcelona', BARCELONA_CANNED],
  ['paris', PARIS_CANNED],
  ['london', LONDON_CANNED],
  ['rome', ROME_CANNED],
  ['amsterdam', AMSTERDAM_CANNED],
  ['athens', ATHENS_CANNED],
  ['bangkok', BANGKOK_CANNED],
  ['dubai', DUBAI_CANNED],
  ['singapore', SINGAPORE_CANNED],
  ['cairo', CAIRO_CANNED],
  ['new york', NEW_YORK_CANNED],
];

export function pickItinerary(destination, days) {
  const d = destination.toLowerCase();
  const city = destination.split(',')[0].trim();
  const match = CURATED_ITINERARIES.find(([key]) => d.includes(key));
  if (match) return adjustToDays(match[1], days, city);
  return genericItinerary(city, days);
}

export function initialFlights() {
  return [
    { id: 'f1', flightNumber: 'NH 176', airline: 'ANA', from: 'SFO', to: 'HND', departDate: 'Mar 14', departTime: '11:20 AM', arriveDate: 'Mar 15', arriveTime: '3:15 PM', seat: '24A', confirmation: 'ZK4PLQ', alertsEnabled: true, alert: { message: 'Gate changed to 86', time: '2h ago' } },
    { id: 'f2', flightNumber: 'NH 175', airline: 'ANA', from: 'HND', to: 'SFO', departDate: 'Mar 19', departTime: '5:05 PM', arriveDate: 'Mar 19', arriveTime: '10:40 AM', seat: '24A', confirmation: 'ZK4PLQ', alertsEnabled: true, alert: null },
  ];
}
