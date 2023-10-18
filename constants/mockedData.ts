export const orders = [
  { id: 1, title: 'Order 1', date: '2023-10-17 12:00:00', description: 'Description for order 1' },
  { id: 2, title: 'Order 2', date: '2023-10-17 12:00:00', description: 'Description for order 2' },
  { id: 3, title: 'Order 3', date: '2023-10-17 12:00:00', description: 'Description for order 3' },
  { id: 4, title: 'Order 4', date: '2023-10-17 12:00:00', description: 'Description for order 4' },
  { id: 5, title: 'Order 5', date: '2023-10-17 12:00:00', description: 'Description for order 5' }
];

export const products = [
  {
    id: 1,
    serialNumber: 123456789,
    isNew: 1,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Монітор 27" Samsung C27R500',
    type: 'Monitors',
    specification: 'Specification for Product 1',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 1,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 2,
    serialNumber: 987654321,
    isNew: 0,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Монітор 32" LG UltraGear 32GK850F-B',
    type: 'Monitors',
    specification: 'Specification for Product 2',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 120, symbol: 'USD', isDefault: 1 },
      { value: 3000, symbol: 'UAH', isDefault: 0 }
    ],
    order: 2,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 3,
    serialNumber: 246813579,
    isNew: 1,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Keyboard Wireless Logitech MK270',
    type: 'Keyboards',
    specification: 'Specification for Product 3',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 90, symbol: 'USD', isDefault: 0 },
      { value: 2200, symbol: 'UAH', isDefault: 1 }
    ],
    order: 3,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 4,
    serialNumber: 111122223333,
    isNew: 0,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Wireless Mouse Microsoft Sculpt Ergonomic',
    type: 'Mouse',
    specification: 'Specification for Product 4',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 110, symbol: 'USD', isDefault: 1 },
      { value: 2800, symbol: 'UAH', isDefault: 0 }
    ],
    order: 3,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 5,
    serialNumber: 876543210,
    isNew: 1,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Keyboard Corsair K95 RGB Platinum XT',
    type: 'Keyboards',
    specification: 'Specification for Product 5',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 40, symbol: 'USD', isDefault: 0 },
      { value: 1000, symbol: 'UAH', isDefault: 1 }
    ],
    order: 4,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 6,
    serialNumber: 135724681,
    isNew: 0,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Keyboard Razer BlackWidow Elite',
    type: 'Keyboards',
    specification: 'Specification for Product 6',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 50, symbol: 'USD', isDefault: 1 },
      { value: 1200, symbol: 'UAH', isDefault: 0 }
    ],
    order: 4,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 7,
    serialNumber: 111111111,
    isNew: 1,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Mouse Logitech G Pro Wireless',
    type: 'Mouse',
    specification: 'Specification for Product 7',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 45, symbol: 'USD', isDefault: 0 },
      { value: 1100, symbol: 'UAH', isDefault: 1 }
    ],
    order: 5,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 8,
    serialNumber: 222222222,
    isNew: 0,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Mouse SteelSeries Rival 600',
    type: 'Mouse',
    specification: 'Specification for Product 8',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 55, symbol: 'USD', isDefault: 1 },
      { value: 1300, symbol: 'UAH', isDefault: 0 }
    ],
    order: 5,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 9,
    serialNumber: 333333333,
    isNew: 1,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Mouse Zowie EC2-B',
    type: 'Mouse',
    specification: 'Specification for Product 9',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 30, symbol: 'USD', isDefault: 0 },
      { value: 750, symbol: 'UAH', isDefault: 1 }
    ],
    order: 5,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 10,
    serialNumber: 444444444,
    isNew: 0,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Mouse Razer DeathAdder Elite',
    type: 'Mouse',
    specification: 'Specification for Product 10',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 35, symbol: 'USD', isDefault: 1 },
      { value: 900, symbol: 'UAH', isDefault: 0 }
    ],
    order: 5,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 11,
    serialNumber: 111111111,
    isNew: 1,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Mouse Logitech G Pro Wireless',
    type: 'Mouse',
    specification: 'Specification for Product 7',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 45, symbol: 'USD', isDefault: 0 },
      { value: 1100, symbol: 'UAH', isDefault: 1 }
    ],
    order: 5,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 12,
    serialNumber: 222222222,
    isNew: 0,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Mouse SteelSeries Rival 600',
    type: 'Mouse',
    specification: 'Specification for Product 8',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 55, symbol: 'USD', isDefault: 1 },
      { value: 1300, symbol: 'UAH', isDefault: 0 }
    ],
    order: 5,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 13,
    serialNumber: 333333333,
    isNew: 1,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Mouse Zowie EC2-B',
    type: 'Mouse',
    specification: 'Specification for Product 9',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 30, symbol: 'USD', isDefault: 0 },
      { value: 750, symbol: 'UAH', isDefault: 1 }
    ],
    order: 5,
    date: '2023-10-17 12:00:00'
  },
  {
    id: 14,
    serialNumber: 444444444,
    isNew: 0,
    photo: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08381425.png',
    title: 'Mouse Razer DeathAdder Elite',
    type: 'Mouse',
    specification: 'Specification for Product 10',
    guarantee: { start: '2023-10-17 12:00:00', end: '2023-10-17 12:00:00' },
    price: [
      { value: 35, symbol: 'USD', isDefault: 1 },
      { value: 900, symbol: 'UAH', isDefault: 0 }
    ],
    order: 5,
    date: '2023-10-17 12:00:00'
  }
];
