import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CartWidget } from "../index";

import { navigation } from "../NavBar/constants";

import { Link } from "react-router-dom";
import logoBlanco from "../../assets/logoBlanco.webp";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
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
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
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
                      <Tab.Panel
                        key={category.name}
                        className="space-y-12 px-4 py-6"
                      >
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <Link
                                to={item.to}
                                className="mt-6 block text-sm font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                              <p
                                aria-hidden="true"
                                className="mt-1 text-sm text-gray-500"
                              >
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
                      <Link
                        to={page.to}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
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
      {/* Navigation */}
      <div className=" relative bg-gray-900">
        <header className="fixed z-10 top-0 right-0 left-0">
          <nav aria-label="Top">
            {/* Secondary navigation */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md backdrop-filter">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                  <div className="flex h-16 items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                      <Link to="/">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src={logoBlanco} alt="" />
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
                                          open ? "bg-white" : "",
                                          "absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out"
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
                                      <div
                                        className="absolute inset-0 top-1/2 bg-white shadow"
                                        aria-hidden="true"
                                      />

                                      <div className="relative bg-white">
                                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                          <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                            {category.featured.map((item) => (
                                              <div
                                                key={item.name}
                                                className="group relative"
                                              >
                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-cover object-center"
                                                  />
                                                </div>
                                                <Link
                                                  to={item.to}
                                                  className="mt-4 block font-medium text-gray-900"
                                                >
                                                  <span
                                                    className="absolute inset-0 z-10"
                                                    aria-hidden="true"
                                                  />
                                                  {item.name}
                                                </Link>
                                                <p
                                                  aria-hidden="true"
                                                  className="mt-1"
                                                >
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
                              to={page.to}
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
                      <button
                        type="button"
                        className="-ml-2 p-2 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Search */}
                      <Link to="#" className="ml-2 p-2 text-white">
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>

                    {/* Logo (lg-) */}
                    <Link to="/" className="lg:hidden">
                      <span className="sr-only">Your Company</span>
                      <img src={logoBlanco} alt="" className="h-8 w-auto" />
                    </Link>

                    <div className="flex flex-1 items-center justify-end">
                      <Link
                        to="#"
                        className="hidden text-sm font-medium text-white lg:block"
                      >
                        Search
                      </Link>

                      <div className="flex items-center lg:ml-8">
                        {/* Help */}
                        <Link to="#" className="p-2 text-white lg:hidden">
                          <span className="sr-only">Help</span>
                          <QuestionMarkCircleIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="hidden text-sm font-medium text-white lg:block"
                        >
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
      </div>
    </>
  );
};
export default NavBar;
