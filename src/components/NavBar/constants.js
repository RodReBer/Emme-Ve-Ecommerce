const navigation = {
  categories: [
    {
      name: 'Mujer',
      featured: [
        {
          name: 'Todos los productos',
          to: '/productos',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Tops',
          to: '/productos/categoria/tops',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Vestidos',
          to: '/productos/categoria/vestidos',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Pantalones',
          to: '/productos/categoria/pantalones',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },        
      ],
    },
  ],
  pages: [
    { name: 'Company', to: '#' },
    { name: 'Stores', to: '#' },
  ],
}
export { navigation }