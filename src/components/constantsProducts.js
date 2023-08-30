const products = [
  //Producto 1
  {
    id: 1,
    name: 'Nomad Pouch',
    categoria: 'tops',
    stock: 5,
    price: 650,
    availability: 'White and Black',
    inStock: true,
    leadTime: '3–4 weeks',
    imageSrc: 'https://images.pexels.com/photos/17904741/pexels-photo-17904741/free-photo-of-mar-gafas-de-sol-vacaciones-mujer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://images.pexels.com/photos/17904741/pexels-photo-17904741/free-photo-of-mar-gafas-de-sol-vacaciones-mujer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
        id: 2,
        name: 'Angled view',
        src: 'https://images.pexels.com/photos/17904741/pexels-photo-17904741/free-photo-of-mar-gafas-de-sol-vacaciones-mujer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      // Más imágenes...
    ],
    colors: [
      {
        name: 'Washed Black',
        bgColor: 'bg-gray-700',
        selectedColor: 'ring-gray-700',
        sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: false },
          { name: 'L', inStock: false },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
      {
        name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-200', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
      {
        name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
    ],
    description: `
        <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack...</p>
      `,
    details: [
      {
        name: 'Característitcas',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      // Más secciones...
    ],
  },
  // Producto 2
  {
    id: 2,
    name: 'Classic Backpack',
    categoria: 'pantalones',
    stock: 10,
    price: 1250,
    inStock: true,
    leadTime: '3–4 weeks',
    availability: 'Various colors',
    imageSrc: 'https://images.pexels.com/photos/1027160/pexels-photo-1027160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Gray fabric backpack with front zipper pocket and black carry handle.',
    rating: 3,
    images: [
      {
        id: 1,
        name: 'Front view',
        src: 'https://images.pexels.com/photos/1027160/pexels-photo-1027160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Gray fabric backpack with front zipper pocket and black carry handle.',
      },
      // Más imágenes...
    ],
    colors: [
      {
        name: 'Gray', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
      {
        name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
    ],
    description: `
        <p>The Classic Backpack Característitcas a spacious main compartment, multiple pockets, and a durable design...</p>
      `,
    details: [
      {
        name: 'Característitcas',
        items: [
          'Spacious main compartment',
          'Front zipper pocket',
          'Padded shoulder straps',
          'Durable fabric',
          'Interior laptop sleeve',
          'Water-resistant',
        ],
      },
      // Más secciones...
    ],
  },
  // Producto 3
  {
    id: 3,
    name: 'Leather Tote Bag',
    categoria: 'vestidos',
    stock: 0,
    price: 1150,
    inStock: false,
    leadTime: '3–4 weeks',
    availability: 'Brown and Black',
    imageSrc: 'https://images.pexels.com/photos/8995809/pexels-photo-8995809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Brown leather tote bag with front zipper pocket and handles.',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Front view',
        src: 'https://images.pexels.com/photos/8995809/pexels-photo-8995809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Brown leather tote bag with front zipper pocket and handles.',
      },
      // Más imágenes...
    ],
    colors: [
      {
        name: 'Brown', bgColor: 'bg-brown', selectedColor: 'ring-brown', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
      {
        name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
    ],
    description: `
        <p>The Leather Tote Bag Característitcas genuine leather construction, multiple pockets, and a timeless design...</p>
      `,
    details: [
      {
        name: 'Característitcas',
        items: [
          'Genuine leather',
          'Spacious interior with pockets',
          'Front zipper pocket',
          'Leather handles',
          'Adjustable shoulder strap',
          'Brass hardware',
        ],
      },
      // Más secciones...
    ],
  },
  // Producto 4
  {
    id: 4,
    name: 'Travel Duffel',
    categoria: 'tops',
    stock: 5,
    price: 700,
    inStock: true,
    leadTime: '3–4 weeks',
    availability: 'Blue and Gray',
    imageSrc: 'https://images.pexels.com/photos/17919040/pexels-photo-17919040/free-photo-of-moda-mujer-verano-exterior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Blue fabric travel duffel with front zipper pocket and adjustable shoulder strap.',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Front view',
        src: 'https://images.pexels.com/photos/17919040/pexels-photo-17919040/free-photo-of-moda-mujer-verano-exterior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Blue fabric travel duffel with front zipper pocket and adjustable shoulder strap.',
      },
      // Más imágenes...
    ],
    colors: [
      {
        name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
      {
        name: 'Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
    ],
    description: `
        <p>The Travel Duffel is designed for adventure with its durable fabric, multiple pockets, and versatile strap...</p>
      `,
    details: [
      {
        name: 'Característitcas',
        items: [
          'Durable fabric construction',
          'Spacious main compartment',
          'Front zipper pocket',
          'Adjustable shoulder strap',
          'Interior organization',
          'Water-resistant',
        ],
      },
      // Más secciones...
    ],
  },
  // Producto 5
  {
    id: 5,
    name: 'Everyday Tote',
    categoria: 'tops',
    stock: 0,
    price: 650,
    inStock: false,
    leadTime: '3–4 weeks',
    availability: 'Various colors',
    imageSrc: 'https://images.pexels.com/photos/17881968/pexels-photo-17881968/free-photo-of-mujer-modelo-mullido-fotografia-de-moda.jpeg',
    imageAlt: 'Gray fabric tote bag with front zipper pocket and black handles.',
    rating: 5,
    images: [
      {
        id: 1,
        name: 'Front view',
        src: 'https://images.pexels.com/photos/17881968/pexels-photo-17881968/free-photo-of-mujer-modelo-mullido-fotografia-de-moda.jpeg',
        alt: 'Gray fabric tote bag with front zipper pocket and black handles.',
      },
      // Más imágenes...
    ],
    colors: [
      {
        name: 'Gray', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
      {
        name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
      {
        name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
    ],
    description: `
        <p>The Everyday Tote is a versatile and stylish choice with its spacious design and convenient pockets...</p>
      `,
    details: [
      {
        name: 'Característitcas',
        items: [
          'Spacious main compartment',
          'Front zipper pocket',
          'Interior organization',
          'Durable fabric',
          'Multiple color options',
          'Water-resistant',
        ],
      },
      // Más secciones...
    ],
  },
  // Producto 6
  {
    id: 6,
    name: 'Weekend Backpack',
    categoria: 'pantalones',
    stock: 10,
    price: 950,
    inStock: true,
    leadTime: '3–4 weeks',
    availability: 'Black and Gray',
    imageSrc: 'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg',
    imageAlt: 'Black fabric backpack with front zipper pocket and adjustable shoulder straps.',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Front view',
        src: 'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg',
        alt: 'Black fabric backpack with front zipper pocket and adjustable shoulder straps.',
      },
      {
        id: 2,
        name: 'Front view',
        src: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Black fabric backpack with front zipper pocket and adjustable shoulder straps.',
      },
      // Más imágenes...
    ],
    colors: [
      {
        name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
      {
        name: 'Gray', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700', sizes: [
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: false },
          { name: 'XXL', inStock: false },
        ],
      },
    ],
    description: `
        <p>The Weekend Backpack is perfect for short getaways with its compact design and comfortable straps...</p>
      `,
    details: [
      {
        name: 'Característitcas',
        items: [
          'Compact and lightweight',
          'Front zipper pocket',
          'Padded shoulder straps',
          'Durable fabric',
          'Interior organization',
          'Water-resistant',
        ],
      },
      // Más secciones...
    ],
  },
];

export { products }