import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { Footer, CartWidget } from '../../components/index'

import { navigation } from '../../components/NavBar/constants'
import { categories } from '../Categorias/constants'

const collections = [
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
]
import logoBlanco from "../../assets/logoBlanco.avif"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                      {navigation.categories.map((category) => (
                        <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
                          <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                            {category.featured.map((item) => (
                              <div key={item.name} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                  <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                </div>
                                <Link to={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                                  {item.name}
                                </Link>
                                <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                  Comprar ahora
                                </p>
                              </div>
                            ))}
                          </div>
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    {navigation.pages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <Link to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                          {page.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Hero section */}
        <section className="relative bg-gray-900 h-screen">
          {/* Decorative image and overlay */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

          {/* Navigation */}
          <header className="relative z-10">
            <nav aria-label="Top">
              {/* Secondary navigation */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div>
                    <div className="flex h-16 items-center justify-between">
                      {/* Logo (lg+) */}
                      <div className="hidden lg:flex lg:flex-1 lg:items-center">
                        <Link to="/">
                          <span className="sr-only">Your Company</span>
                          <img
                            className="h-8 w-auto"
                            src={logoBlanco}
                            alt=""
                          />
                        </Link>
                      </div>

                      <div className="hidden h-full lg:flex">
                        {/* Flyout menus */}
                        <Popover.Group className="inset-x-0 bottom-0 px-4">
                          <div className="flex h-full justify-center space-x-8">
                            {navigation.categories.map((category) => (
                              <Popover key={category.name} className="flex">
                                {({ open }) => (
                                  <>
                                    <div className="relative flex">
                                      <Popover.Button className="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out">
                                        {category.name}
                                        <span
                                          className={classNames(
                                            open ? 'bg-white' : '',
                                            'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out'
                                          )}
                                          aria-hidden="true"
                                        />
                                      </Popover.Button>
                                    </div>

                                    <Transition
                                      as={Fragment}
                                      enter="transition ease-out duration-200"
                                      enterFrom="opacity-0"
                                      enterTo="opacity-100"
                                      leave="transition ease-in duration-150"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                        <div className="relative bg-white">
                                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                              {category.featured.map((item) => (
                                                <div key={item.name} className="group relative">
                                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                    <img
                                                      src={item.imageSrc}
                                                      alt={item.imageAlt}
                                                      className="object-cover object-center"
                                                    />
                                                  </div>
                                                  <Link to={item.href} className="mt-4 block font-medium text-gray-900">
                                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                    {item.name}
                                                  </Link>
                                                  <p aria-hidden="true" className="mt-1">
                                                    Comprar ahora
                                                  </p>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </Popover.Panel>
                                    </Transition>
                                  </>
                                )}
                              </Popover>
                            ))}

                            {navigation.pages.map((page) => (
                              <Link
                                key={page.name}
                                to={page.href}
                                className="flex items-center text-sm font-medium text-white"
                              >
                                {page.name}
                              </Link>
                            ))}
                          </div>
                        </Popover.Group>
                      </div>

                      {/* Mobile menu and search (lg-) */}
                      <div className="flex flex-1 items-center lg:hidden">
                        <button type="button" className="-ml-2 p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
                          <span className="sr-only">Open menu</span>
                          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Search */}
                        <Link to="#" className="ml-2 p-2 text-white">
                          <span className="sr-only">Search</span>
                          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                        </Link>
                      </div>

                      {/* Logo (lg-) */}
                      <Link to="#" className="lg:hidden">
                        <span className="sr-only">Your Company</span>
                        <img src={logoBlanco} alt="" className="h-8 w-auto" />
                      </Link>

                      <div className="flex flex-1 items-center justify-end">
                        <Link to="#" className="hidden text-sm font-medium text-white lg:block">
                          Search
                        </Link>

                        <div className="flex items-center lg:ml-8">
                          {/* Help */}
                          <Link to="#" className="p-2 text-white lg:hidden">
                            <span className="sr-only">Help</span>
                            <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                          </Link>
                          <Link to="#" className="hidden text-sm font-medium text-white lg:block">
                            Help
                          </Link>

                          <CartWidget />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-[272px] lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
            <p className="mt-4 text-xl text-white">
              The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release
              while they're still in stock.
            </p>
            <Link
              to="#"
              className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Shop New Arrivals
            </Link>
          </div>
        </section>

        <main>
          {/* Category section */}
          <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
              <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Shop by Category
              </h2>
              <Link to="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>

            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                  <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                      >
                        <span aria-hidden="true" className="absolute inset-0">
                          <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                        />
                        <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 px-4 sm:hidden">
              <Link to="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </section>

          {/* Featured section */}
          <section
            aria-labelledby="social-impact-heading"
            className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
          >
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                  <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <span className="block sm:inline">Level up</span>
                    <span className="block sm:inline">your desk</span>
                  </h2>
                  <p className="mt-3 text-xl text-white">
                    Make your desk beautiful and organized. Post a picture to social media and watch it get more likes
                    than life-changing announcements. Reflect on the shallow nature of existence. At least you have a
                    really nice desk setup.
                  </p>
                  <Link
                    to="#"
                    className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                  >
                    Shop Workspace
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Collection section */}
          <section
            aria-labelledby="collection-heading"
            className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
          >
            <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">
              Shop by Collection
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
            </p>

            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
              {collections.map((collection) => (
                <Link key={collection.name} to={collection.href} className="group block">
                  <div
                    aria-hidden="true"
                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                  >
                    <img
                      src={collection.imageSrc}
                      alt={collection.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Featured section */}
          <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                  <h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Simple productivity
                  </h2>
                  <p className="mt-3 text-xl text-white">
                    Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best
                    here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the
                    undeniable urge to fill empty circles.
                  </p>
                  <Link
                    to="#"
                    className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                  >
                    Shop Focus
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>

  )
}
