// Items database met gewichten (gram) en afmetingen (cm)
export const items = {
  essentials: {
    name: 'Essentials',
    icon: '📋',
    items: [
      { id: 'passport', name: 'Paspoort/ID', weight: 50, size: 'klein', always: true },
      { id: 'wallet', name: 'Portemonnee', weight: 100, size: 'klein', always: true },
      { id: 'phone', name: 'Telefoon', weight: 200, size: 'klein', always: true },
      { id: 'phoneCharger', name: 'Telefoonoplader', weight: 50, size: 'klein', always: true },
      { id: 'keys', name: 'Sleutels', weight: 100, size: 'klein', always: true },
      { id: 'travelDocs', name: 'Reisdocumenten/tickets', weight: 30, size: 'klein', always: true },
      { id: 'creditCard', name: 'Creditcard', weight: 5, size: 'klein', always: true },
      { id: 'cash', name: 'Contant geld', weight: 20, size: 'klein', always: true },
      { id: 'insurance', name: 'Reisverzekeringspapieren', weight: 10, size: 'klein' },
    ]
  },
  clothing: {
    name: 'Kleding',
    icon: '👕',
    items: [
      { id: 'tshirts', name: 'T-shirts', weight: 150, size: 'medium', quantity: true },
      { id: 'shirts', name: 'Overhemden/Blouses', weight: 200, size: 'medium', quantity: true },
      { id: 'pants', name: 'Lange broeken', weight: 400, size: 'medium', quantity: true },
      { id: 'shorts', name: 'Korte broeken', weight: 200, size: 'medium', quantity: true, climate: ['hot', 'tropical', 'mild'] },
      { id: 'jeans', name: 'Jeans', weight: 600, size: 'medium', quantity: true },
      { id: 'underwear', name: 'Ondergoed', weight: 50, size: 'klein', quantity: true },
      { id: 'socks', name: 'Sokken', weight: 40, size: 'klein', quantity: true },
      { id: 'sleepwear', name: 'Slaapkleding', weight: 200, size: 'medium' },
      { id: 'sweater', name: 'Trui/Sweater', weight: 400, size: 'medium', climate: ['cold', 'mild', 'variable'] },
      { id: 'jacket', name: 'Jas', weight: 800, size: 'groot', climate: ['cold', 'variable'] },
      { id: 'raincoat', name: 'Regenjas', weight: 300, size: 'medium', climate: ['tropical', 'variable'] },
      { id: 'swimwear', name: 'Zwemkleding', weight: 150, size: 'klein', activities: ['swimming', 'beach', 'diving'] },
      { id: 'formalwear', name: 'Nette kleding', weight: 500, size: 'medium', special: ['formal'] },
      { id: 'dress', name: 'Jurk/Rok', weight: 250, size: 'medium' },
    ]
  },
  shoes: {
    name: 'Schoenen',
    icon: '👟',
    items: [
      { id: 'sneakers', name: 'Sneakers', weight: 700, size: 'groot' },
      { id: 'sandals', name: 'Sandalen/Slippers', weight: 300, size: 'medium', climate: ['hot', 'tropical', 'beach'] },
      { id: 'dressShoes', name: 'Nette schoenen', weight: 600, size: 'groot', special: ['formal'] },
      { id: 'hikingBoots', name: 'Wandelschoenen', weight: 900, size: 'groot', activities: ['hiking'] },
      { id: 'sportShoes', name: 'Sportschoenen', weight: 600, size: 'groot', activities: ['running', 'yoga'] },
    ]
  },
  toiletries: {
    name: 'Toiletartikelen',
    icon: '🧴',
    items: [
      { id: 'toothbrush', name: 'Tandenborstel', weight: 30, size: 'klein', always: true },
      { id: 'toothpaste', name: 'Tandpasta', weight: 100, size: 'klein', always: true },
      { id: 'deodorant', name: 'Deodorant', weight: 100, size: 'klein', always: true },
      { id: 'shampoo', name: 'Shampoo', weight: 200, size: 'klein' },
      { id: 'conditioner', name: 'Conditioner', weight: 200, size: 'klein' },
      { id: 'bodywash', name: 'Douchegel', weight: 200, size: 'klein' },
      { id: 'razor', name: 'Scheermesje', weight: 50, size: 'klein' },
      { id: 'sunscreen', name: 'Zonnebrand', weight: 150, size: 'klein', climate: ['hot', 'tropical', 'mild'] },
      { id: 'afterSun', name: 'After sun', weight: 150, size: 'klein', climate: ['hot', 'tropical'] },
      { id: 'lipbalm', name: 'Lippenbalsem', weight: 15, size: 'klein' },
      { id: 'hairbrush', name: 'Haarborstel/Kam', weight: 80, size: 'klein' },
      { id: 'makeup', name: 'Make-up', weight: 200, size: 'klein' },
      { id: 'perfume', name: 'Parfum', weight: 100, size: 'klein' },
      { id: 'nailClipper', name: 'Nagelknipper', weight: 30, size: 'klein' },
      { id: 'mosquitoRepellent', name: 'Anti-muggenspray', weight: 100, size: 'klein', climate: ['tropical'] },
    ]
  },
  electronics: {
    name: 'Elektronica',
    icon: '📱',
    items: [
      { id: 'powerbank', name: 'Powerbank', weight: 300, size: 'klein' },
      { id: 'adapter', name: 'Reisstekker/Adapter', weight: 100, size: 'klein' },
      { id: 'laptop', name: 'Laptop', weight: 1500, size: 'groot', tech: ['laptop'] },
      { id: 'laptopCharger', name: 'Laptop oplader', weight: 300, size: 'medium', tech: ['laptop'] },
      { id: 'camera', name: 'Camera', weight: 500, size: 'medium', tech: ['camera'] },
      { id: 'cameraCharger', name: 'Camera oplader', weight: 100, size: 'klein', tech: ['camera'] },
      { id: 'sdCards', name: 'SD-kaarten', weight: 10, size: 'klein', tech: ['camera'] },
      { id: 'drone', name: 'Drone', weight: 900, size: 'groot', tech: ['drone'] },
      { id: 'droneAccessories', name: 'Drone accessoires', weight: 500, size: 'medium', tech: ['drone'] },
      { id: 'tablet', name: 'Tablet', weight: 500, size: 'medium', tech: ['tablet'] },
      { id: 'tabletCharger', name: 'Tablet oplader', weight: 50, size: 'klein', tech: ['tablet'] },
      { id: 'ereader', name: 'E-reader', weight: 200, size: 'klein', tech: ['ereader'] },
      { id: 'gamingDevice', name: 'Gaming console', weight: 400, size: 'medium', tech: ['gaming'] },
      { id: 'headphones', name: 'Koptelefoon', weight: 250, size: 'medium' },
      { id: 'earbuds', name: 'Oordopjes', weight: 50, size: 'klein' },
    ]
  },
  health: {
    name: 'Gezondheid',
    icon: '💊',
    items: [
      { id: 'firstAid', name: 'EHBO-setje', weight: 200, size: 'klein' },
      { id: 'painkillers', name: 'Pijnstillers', weight: 30, size: 'klein' },
      { id: 'bandaids', name: 'Pleisters', weight: 20, size: 'klein' },
      { id: 'medication', name: 'Persoonlijke medicatie', weight: 100, size: 'klein', special: ['medicine'] },
      { id: 'vitamins', name: 'Vitamines', weight: 50, size: 'klein' },
      { id: 'handSanitizer', name: 'Handgel', weight: 100, size: 'klein' },
      { id: 'tissues', name: 'Zakdoekjes', weight: 50, size: 'klein' },
      { id: 'motionSickness', name: 'Anti-wagenziekte pillen', weight: 20, size: 'klein', transport: ['boat', 'car', 'bus'] },
    ]
  },
  accessories: {
    name: 'Accessoires',
    icon: '🎒',
    items: [
      { id: 'sunglasses', name: 'Zonnebril', weight: 50, size: 'klein', climate: ['hot', 'tropical', 'mild'] },
      { id: 'hat', name: 'Pet/Hoed', weight: 100, size: 'medium', climate: ['hot', 'tropical'] },
      { id: 'scarf', name: 'Sjaal', weight: 150, size: 'medium', climate: ['cold'] },
      { id: 'gloves', name: 'Handschoenen', weight: 100, size: 'klein', climate: ['cold'] },
      { id: 'belt', name: 'Riem', weight: 150, size: 'klein' },
      { id: 'watch', name: 'Horloge', weight: 80, size: 'klein' },
      { id: 'jewelry', name: 'Sieraden', weight: 50, size: 'klein' },
      { id: 'umbrella', name: 'Paraplu', weight: 300, size: 'medium', climate: ['tropical', 'variable'] },
      { id: 'daypack', name: 'Dagtas/Rugzakje', weight: 400, size: 'medium' },
      { id: 'beachBag', name: 'Strandtas', weight: 200, size: 'medium', destination: ['beach'] },
    ]
  },
  sports: {
    name: 'Sport & Activiteiten',
    icon: '🏃',
    items: [
      { id: 'swimGoggles', name: 'Zwembril', weight: 50, size: 'klein', activities: ['swimming'] },
      { id: 'snorkelSet', name: 'Snorkelset', weight: 500, size: 'medium', activities: ['diving'] },
      { id: 'divingGear', name: 'Duikuitrusting', weight: 5000, size: 'groot', sportGear: ['divingGear'] },
      { id: 'yogaMat', name: 'Yogamat', weight: 1000, size: 'groot', sportGear: ['yogaMat'] },
      { id: 'skiClothing', name: 'Skibroek & Jas', weight: 2000, size: 'groot', activities: ['skiing'] },
      { id: 'skiGear', name: 'Ski\'s & Stokken', weight: 5000, size: 'groot', sportGear: ['skiGear'] },
      { id: 'hikingPoles', name: 'Wandelstokken', weight: 500, size: 'groot', activities: ['hiking'] },
      { id: 'sportClothes', name: 'Sportkleding', weight: 300, size: 'medium', activities: ['running', 'yoga', 'hiking'] },
      { id: 'goProMount', name: 'Action cam mount', weight: 100, size: 'klein', activities: ['diving', 'skiing', 'cycling'] },
    ]
  },
  travel: {
    name: 'Reisgemak',
    icon: '✈️',
    items: [
      { id: 'neckPillow', name: 'Nekkussen', weight: 200, size: 'medium', transport: ['plane', 'bus', 'train'] },
      { id: 'sleepMask', name: 'Slaapmasker', weight: 30, size: 'klein', transport: ['plane'] },
      { id: 'earplugs', name: 'Oordoppen', weight: 10, size: 'klein' },
      { id: 'travelBlanket', name: 'Reisdeken', weight: 300, size: 'medium', transport: ['plane', 'bus'] },
      { id: 'packingCubes', name: 'Packing cubes', weight: 200, size: 'medium' },
      { id: 'laundryBag', name: 'Waszak', weight: 50, size: 'klein' },
      { id: 'travelBottles', name: 'Reisflesjes (leeg)', weight: 100, size: 'klein', transport: ['plane'] },
      { id: 'lockTSA', name: 'TSA-slot', weight: 50, size: 'klein' },
      { id: 'luggageTag', name: 'Bagagelabel', weight: 20, size: 'klein' },
    ]
  },
  baby: {
    name: 'Baby & Kinderen',
    icon: '👶',
    items: [
      { id: 'diapers', name: 'Luiers', weight: 500, size: 'groot', children: ['baby', 'toddler'] },
      { id: 'wipes', name: 'Billendoekjes', weight: 200, size: 'medium', children: ['baby', 'toddler'] },
      { id: 'babyFood', name: 'Babyvoeding', weight: 500, size: 'medium', children: ['baby', 'toddler'] },
      { id: 'bottles', name: 'Flesjes', weight: 200, size: 'medium', children: ['baby'] },
      { id: 'pacifier', name: 'Speen', weight: 20, size: 'klein', children: ['baby', 'toddler'] },
      { id: 'stroller', name: 'Buggy', weight: 8000, size: 'groot', children: ['baby', 'toddler'] },
      { id: 'carSeat', name: 'Autostoel', weight: 10000, size: 'groot', children: ['baby', 'toddler', 'child'] },
      { id: 'toys', name: 'Speelgoed', weight: 300, size: 'medium', children: ['baby', 'toddler', 'child'] },
      { id: 'babyCarrier', name: 'Draagzak', weight: 800, size: 'medium', children: ['baby', 'toddler'] },
    ]
  },
  camping: {
    name: 'Camping',
    icon: '⛺',
    items: [
      { id: 'tent', name: 'Tent', weight: 3000, size: 'groot', accommodation: ['camping'] },
      { id: 'sleepingBag', name: 'Slaapzak', weight: 1500, size: 'groot', accommodation: ['camping'] },
      { id: 'sleepingPad', name: 'Slaapmat', weight: 500, size: 'groot', accommodation: ['camping'] },
      { id: 'campingStove', name: 'Campingkooktoestel', weight: 500, size: 'medium', accommodation: ['camping'] },
      { id: 'flashlight', name: 'Zaklamp', weight: 150, size: 'klein', accommodation: ['camping'] },
      { id: 'multitool', name: 'Multitool/Zakmes', weight: 150, size: 'klein', accommodation: ['camping'] },
      { id: 'waterBottle', name: 'Waterfles', weight: 200, size: 'medium' },
    ]
  },
  work: {
    name: 'Werk',
    icon: '💼',
    items: [
      { id: 'notebook', name: 'Notitieboek', weight: 200, size: 'klein', special: ['work'] },
      { id: 'pens', name: 'Pennen', weight: 30, size: 'klein', special: ['work'] },
      { id: 'businessCards', name: 'Visitekaartjes', weight: 50, size: 'klein', tripType: ['business'] },
      { id: 'documents', name: 'Werkdocumenten', weight: 200, size: 'medium', special: ['work'] },
      { id: 'usbDrive', name: 'USB-stick', weight: 20, size: 'klein', special: ['work'] },
    ]
  }
};

// Helper functie om gewicht te formatteren
export const formatWeight = (grams) => {
  if (grams >= 1000) {
    return `${(grams / 1000).toFixed(1)} kg`;
  }
  return `${grams} g`;
};

// Helper functie om items te filteren op basis van antwoorden
export const getRecommendedItems = (answers) => {
  const recommended = {};

  Object.entries(items).forEach(([categoryKey, category]) => {
    const filteredItems = category.items.filter(item => {
      // Altijd tonen items
      if (item.always) return true;

      // Check klimaat
      if (item.climate && !item.climate.includes(answers.climate)) return false;

      // Check activiteiten
      if (item.activities && !item.activities.some(a => answers.activities?.includes(a))) return false;

      // Check tech
      if (item.tech && !item.tech.some(t => answers.tech?.includes(t))) return false;

      // Check sport gear
      if (item.sportGear && !item.sportGear.some(s => answers.sportGear?.includes(s))) return false;

      // Check transport
      if (item.transport && !item.transport.includes(answers.transport)) return false;

      // Check bestemming
      if (item.destination && !item.destination.includes(answers.destination)) return false;

      // Check accommodatie
      if (item.accommodation && !item.accommodation.includes(answers.accommodation)) return false;

      // Check speciale behoeften
      if (item.special && !item.special.some(s => answers.special?.includes(s))) return false;

      // Check kinderen
      if (item.children && !item.children.some(c => answers.children?.includes(c))) return false;

      // Check reis type
      if (item.tripType && !item.tripType.includes(answers.tripType)) return false;

      return true;
    });

    if (filteredItems.length > 0) {
      recommended[categoryKey] = {
        ...category,
        items: filteredItems
      };
    }
  });

  return recommended;
};
