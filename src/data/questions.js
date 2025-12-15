export const questions = [
  {
    id: 'tripType',
    question: 'Wat voor soort reis maak je?',
    type: 'single',
    options: [
      { value: 'vacation', label: 'Vakantie', icon: '🏖️' },
      { value: 'business', label: 'Zakenreis', icon: '💼' },
      { value: 'backpacking', label: 'Backpacken', icon: '🎒' },
      { value: 'roadtrip', label: 'Roadtrip', icon: '🚗' },
      { value: 'adventure', label: 'Avontuur', icon: '🏔️' },
    ]
  },
  {
    id: 'travelers',
    question: 'Met wie reis je?',
    type: 'single',
    options: [
      { value: 'solo', label: 'Alleen', icon: '🧍' },
      { value: 'couple', label: 'Als koppel', icon: '💑' },
      { value: 'family', label: 'Gezin met kinderen', icon: '👨‍👩‍👧‍👦' },
      { value: 'friends', label: 'Met vrienden', icon: '👯' },
      { value: 'group', label: 'Grote groep', icon: '👥' },
    ]
  },
  {
    id: 'children',
    question: 'Welke leeftijden hebben de kinderen?',
    type: 'multiple',
    condition: (answers) => answers.travelers === 'family',
    options: [
      { value: 'baby', label: 'Baby (0-2 jaar)', icon: '👶' },
      { value: 'toddler', label: 'Peuter (2-4 jaar)', icon: '🧒' },
      { value: 'child', label: 'Kind (4-12 jaar)', icon: '👧' },
      { value: 'teen', label: 'Tiener (12+)', icon: '🧑' },
    ]
  },
  {
    id: 'sharing',
    question: 'Deel je spullen met je reisgenoten?',
    type: 'single',
    condition: (answers) => answers.travelers !== 'solo',
    options: [
      { value: 'yes', label: 'Ja, we delen zoveel mogelijk', icon: '🤝' },
      { value: 'some', label: 'Sommige dingen', icon: '↔️' },
      { value: 'no', label: 'Nee, ieder z\'n eigen spullen', icon: '🎒' },
    ]
  },
  {
    id: 'transport',
    question: 'Hoe reis je naar je bestemming?',
    type: 'single',
    options: [
      { value: 'plane', label: 'Vliegtuig', icon: '✈️' },
      { value: 'car', label: 'Auto', icon: '🚗' },
      { value: 'train', label: 'Trein', icon: '🚂' },
      { value: 'boat', label: 'Boot/Cruise', icon: '🚢' },
      { value: 'bus', label: 'Bus', icon: '🚌' },
    ]
  },
  {
    id: 'airline',
    question: 'Met welke luchtvaartmaatschappij vlieg je?',
    type: 'single',
    condition: (answers) => answers.transport === 'plane',
    options: [
      { value: 'klm', label: 'KLM', baggage: { cabin: 12, checked: 23 } },
      { value: 'transavia', label: 'Transavia', baggage: { cabin: 10, checked: 20 } },
      { value: 'ryanair', label: 'Ryanair', baggage: { cabin: 10, checked: 20 } },
      { value: 'easyjet', label: 'EasyJet', baggage: { cabin: 15, checked: 23 } },
      { value: 'vueling', label: 'Vueling', baggage: { cabin: 10, checked: 23 } },
      { value: 'tui', label: 'TUI fly', baggage: { cabin: 10, checked: 20 } },
      { value: 'other', label: 'Anders', baggage: { cabin: 10, checked: 23 } },
    ]
  },
  {
    id: 'destination',
    question: 'Wat voor type bestemming?',
    type: 'single',
    options: [
      { value: 'beach', label: 'Strand', icon: '🏖️' },
      { value: 'city', label: 'Stad', icon: '🏙️' },
      { value: 'mountain', label: 'Bergen', icon: '🏔️' },
      { value: 'nature', label: 'Natuur/Camping', icon: '🏕️' },
      { value: 'mixed', label: 'Combinatie', icon: '🗺️' },
    ]
  },
  {
    id: 'climate',
    question: 'Wat is het klimaat op je bestemming?',
    type: 'single',
    options: [
      { value: 'hot', label: 'Warm (25°C+)', icon: '☀️' },
      { value: 'mild', label: 'Mild (15-25°C)', icon: '🌤️' },
      { value: 'cold', label: 'Koud (<15°C)', icon: '❄️' },
      { value: 'tropical', label: 'Tropisch (warm & vochtig)', icon: '🌴' },
      { value: 'variable', label: 'Wisselend', icon: '🌦️' },
    ]
  },
  {
    id: 'duration',
    question: 'Hoe lang duurt je reis?',
    type: 'single',
    options: [
      { value: 'weekend', label: '1-3 dagen', icon: '📅' },
      { value: 'week', label: '4-7 dagen', icon: '📆' },
      { value: 'twoweeks', label: '1-2 weken', icon: '🗓️' },
      { value: 'month', label: '2-4 weken', icon: '📋' },
      { value: 'long', label: 'Meer dan een maand', icon: '🌍' },
    ]
  },
  {
    id: 'accommodation',
    question: 'Waar verblijf je?',
    type: 'single',
    options: [
      { value: 'hotel', label: 'Hotel', icon: '🏨' },
      { value: 'hostel', label: 'Hostel', icon: '🛏️' },
      { value: 'airbnb', label: 'Airbnb/Appartement', icon: '🏠' },
      { value: 'camping', label: 'Camping', icon: '⛺' },
      { value: 'family', label: 'Bij familie/vrienden', icon: '👨‍👩‍👧' },
    ]
  },
  {
    id: 'activities',
    question: 'Welke activiteiten ga je doen?',
    type: 'multiple',
    options: [
      { value: 'swimming', label: 'Zwemmen', icon: '🏊' },
      { value: 'hiking', label: 'Wandelen/Hiken', icon: '🥾' },
      { value: 'cycling', label: 'Fietsen', icon: '🚴' },
      { value: 'skiing', label: 'Skiën/Snowboarden', icon: '⛷️' },
      { value: 'nightlife', label: 'Uitgaan', icon: '🎉' },
      { value: 'sightseeing', label: 'Sightseeing', icon: '📸' },
      { value: 'beach', label: 'Strand', icon: '🏖️' },
      { value: 'diving', label: 'Duiken/Snorkelen', icon: '🤿' },
      { value: 'running', label: 'Hardlopen', icon: '🏃' },
      { value: 'yoga', label: 'Yoga/Fitness', icon: '🧘' },
    ]
  },
  {
    id: 'tech',
    question: 'Welke tech neem je mee?',
    type: 'multiple',
    options: [
      { value: 'laptop', label: 'Laptop', icon: '💻' },
      { value: 'camera', label: 'Camera', icon: '📷' },
      { value: 'drone', label: 'Drone', icon: '🚁' },
      { value: 'tablet', label: 'Tablet', icon: '📱' },
      { value: 'ereader', label: 'E-reader', icon: '📖' },
      { value: 'gaming', label: 'Gaming (Switch etc)', icon: '🎮' },
      { value: 'none', label: 'Alleen telefoon', icon: '📵' },
    ]
  },
  {
    id: 'sportGear',
    question: 'Neem je eigen sportspullen mee?',
    type: 'multiple',
    condition: (answers) => answers.activities?.some(a => ['hiking', 'cycling', 'skiing', 'diving', 'running', 'yoga'].includes(a)),
    options: [
      { value: 'hikingBoots', label: 'Wandelschoenen', icon: '🥾' },
      { value: 'sportShoes', label: 'Sportschoenen', icon: '👟' },
      { value: 'skiGear', label: 'Ski-uitrusting', icon: '🎿' },
      { value: 'divingGear', label: 'Duikspullen', icon: '🤿' },
      { value: 'yogaMat', label: 'Yogamat', icon: '🧘' },
      { value: 'bicycle', label: 'Fiets', icon: '🚲' },
      { value: 'rent', label: 'Ik huur ter plaatse', icon: '🏪' },
    ]
  },
  {
    id: 'localTransport',
    question: 'Hoe reis je op je bestemming?',
    type: 'multiple',
    options: [
      { value: 'walk', label: 'Lopen', icon: '🚶' },
      { value: 'publicTransport', label: 'OV', icon: '🚇' },
      { value: 'rentalCar', label: 'Huurauto', icon: '🚗' },
      { value: 'taxi', label: 'Taxi/Uber', icon: '🚕' },
      { value: 'bike', label: 'Fiets', icon: '🚲' },
      { value: 'scooter', label: 'Scooter', icon: '🛵' },
    ]
  },
  {
    id: 'special',
    question: 'Speciale behoeften?',
    type: 'multiple',
    options: [
      { value: 'formal', label: 'Nette kleding nodig', icon: '👔' },
      { value: 'medicine', label: 'Medicijnen', icon: '💊' },
      { value: 'work', label: 'Werk onderweg', icon: '💼' },
      { value: 'none', label: 'Geen speciale behoeften', icon: '✨' },
    ]
  },
];
