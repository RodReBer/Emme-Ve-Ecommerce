const products = [
  //Producto 1
  {
    id: 1,
    name: 'Nomad Pouch',
    categoria: 'tops',
    stock: 5,
    price: '$50',
    availability: 'White and Black',
    inStock: true,
    leadTime: '3–4 weeks',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
        id: 2,
        name: 'Angled view',
        src: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      // Más imágenes...
    ],
    colors: [
      { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-200' },
      { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
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
    price: '$80',
    inStock: false,
    leadTime: '3–4 weeks',
    availability: 'Various colors',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
    imageAlt: 'Gray fabric backpack with front zipper pocket and black carry handle.',
    rating: 5,
    images: [
      {
        id: 1,
        name: 'Front view',
        src: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
        alt: 'Gray fabric backpack with front zipper pocket and black carry handle.',
      },
      // Más imágenes...
    ],
    colors: [
      { name: 'Gray', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
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
    stock: 10,
    price: '$120',
    inStock: false,
    leadTime: '3–4 weeks',
    availability: 'Brown and Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt: 'Brown leather tote bag with front zipper pocket and handles.',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Front view',
        src: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
        alt: 'Brown leather tote bag with front zipper pocket and handles.',
      },
      // Más imágenes...
    ],
    colors: [
      { name: 'Brown', bgColor: 'bg-brown', selectedColor: 'ring-brown' },
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
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
    stock: 10,
    price: '$90',
    inStock: false,
    leadTime: '3–4 weeks',
    availability: 'Blue and Gray',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-04.jpg',
    imageAlt: 'Blue fabric travel duffel with front zipper pocket and adjustable shoulder strap.',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Front view',
        src: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-04.jpg',
        alt: 'Blue fabric travel duffel with front zipper pocket and adjustable shoulder strap.',
      },
      // Más imágenes...
    ],
    colors: [
      { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },
      { name: 'Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
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
    stock: 10,
    price: '$65',
    inStock: false,
    leadTime: '3–4 weeks',
    availability: 'Various colors',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-05.jpg',
    imageAlt: 'Gray fabric tote bag with front zipper pocket and black handles.',
    rating: 5,
    images: [
      {
        id: 1,
        name: 'Front view',
        src: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-05.jpg',
        alt: 'Gray fabric tote bag with front zipper pocket and black handles.',
      },
      // Más imágenes...
    ],
    colors: [
      { name: 'Gray', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
      { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
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
    categoria: 'tops',
    stock: 10,
    price: '$95',
    inStock: false,
    leadTime: '3–4 weeks',
    availability: 'Black and Gray',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-06.jpg',
    imageAlt: 'Black fabric backpack with front zipper pocket and adjustable shoulder straps.',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Front view',
        src: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-06.jpg',
        alt: 'Black fabric backpack with front zipper pocket and adjustable shoulder straps.',
      },
      // Más imágenes...
    ],
    colors: [
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
      { name: 'Gray', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
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