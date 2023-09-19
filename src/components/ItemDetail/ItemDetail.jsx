import { useState, useContext, useEffect } from "react";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useParams, Link } from "react-router-dom";
import { ItemCount, Loader } from "../index";
import { listCartContext } from "../../contexts/CartContextProvider";
import { getDoc, getFirestore, doc } from "firebase/firestore";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ItemDetail = () => {
  const id = useParams().id;
  let { addProduct } = useContext(listCartContext);

  const [item, setItem] = useState({});

  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const db = getFirestore();
  const itemRef = doc(db, "items", id.toString());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDoc(itemRef);

        if (snapshot.exists()) {
          const itemData = { id: snapshot.id, ...snapshot.data() };
          setItem(itemData);

          const availableColor = itemData.colors.find((color) =>
            color.sizes.some((size) => size.inStock > 0)
          );

          if (availableColor) {
            setSelectedColor(availableColor);
            setSelectedSize(
              availableColor.sizes.find((size) => size.inStock > 0)
            );
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  const stock = item.stock;
  const estaEnStock = item.inStock;

  const handleOnAdd = (cantidad) => {
    addProduct(item, cantidad, selectedColor.name, selectedSize.name);
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {item.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{image.name}</span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="h-full w-full object-cover object-center"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? "ring-indigo-500" : "ring-transparent",
                              "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
                {item.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {item.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Informaci&oacute;n del producto</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  ${item.price}
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Opiniones</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          item.rating > rating
                            ? "text-yellow-300"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{item.rating} de 5 estrellas</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Descripci&oacute;n</h3>

                <div
                  className="space-y-6 text-base text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>

              <form className="mt-6">
                {/* Colors */}
                <div>
                  <h3 className="text-sm text-gray-600">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={(color) => {
                      setSelectedColor(color);
                      setSelectedSize(() => {
                        for (const size of color.sizes) {
                          if (size.inStock) {
                            return size;
                          }
                        }
                        console.log("No hay tamaños en stock para este color.");
                        return null;
                      }); //se selecciona el primer talle que haya en stock de ese color
                    }}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Elige un color
                    </RadioGroup.Label>
                    <span className="flex items-center space-x-3">
                      {item.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </span>
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Size</h2>
                    <Link
                      to="#"
                      className="text-sm font-medium text-gray-900 hover:text-gray-800"
                    >
                      See sizing chart
                    </Link>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Selecciona un talle
                    </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {selectedColor.sizes.map((size) => (
                        <RadioGroup.Option
                          key={`${selectedColor.name}-${size.name}`}
                          value={size}
                          className={({ active, checked }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer focus:outline-none"
                                : "cursor-not-allowed opacity-25",
                              active
                                ? "ring-2 ring-gray-900 ring-offset-2"
                                : "",
                              checked
                                ? "border-transparent bg-gray-900 text-white hover:bg-gray-900"
                                : "border-gray-900/50 bg-white text-gray-900 hover:bg-gray-50",
                              "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                            )
                          }
                          disabled={!size.inStock}
                        >
                          <RadioGroup.Label as="span">
                            {size.name}
                          </RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="mt-10 flex">
                  <ItemCount
                    id={id}
                    inicial={1}
                    stock={stock}
                    onAdd={handleOnAdd}
                    estaEnStock={estaEnStock}
                  ></ItemCount>

                  <button
                    type="button"
                    className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <HeartIcon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Añadir a favoritos</span>
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Detalles adicionales
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                  {item.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span
                                className={classNames(
                                  open ? "text-indigo-600" : "text-gray-900",
                                  "text-sm font-medium"
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as="div"
                            className="prose prose-sm pb-6"
                          >
                            <ul role="list">
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
