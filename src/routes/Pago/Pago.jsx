import { Footer, NavBar } from "../../components";
import { Popover, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { listCartContext } from "../../contexts/CartContextProvider";
import { useContext, useState, Fragment } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firestore/firestore";

const pago = () => {
  const [validationError, setValidationError] = useState(false);
  let {
    getListCart,
    calculateTotal,
    priceShipping,
    clearCart,
    handleShowSuccessfull,
    setAlertVisible,
  } = useContext(listCartContext);
  let products = getListCart();

  const [formData, setFormData] = useState({
    email: "",
    nombreDeTarjeta: "",
    numeroDeTarjeta: "",
    vencimiento: "",
    cvc: "",
    compania: "",
    direccion: "",
    puerta: "",
    ciudad: "",
    esquina: "",
    codigoPostal: "",
  });

  const validateData = () => {
    let correcto = false;
    let mensaje = "";
    if (
      formData.email == "" ||
      formData.nombreDeTarjeta == "" ||
      formData.numeroDeTarjeta == "" ||
      formData.vencimiento == "" ||
      formData.cvc == "" ||
      formData.compania == "" ||
      formData.direccion == "" ||
      formData.puerta == "" ||
      formData.ciudad == "" ||
      formData.esquina == "" ||
      formData.codigoPostal == ""
    ) {
      mensaje = "Complete todos los campos";

      correcto = false;
    } else {
      mensaje = "Todos los datos son correctos";
      correcto = true;
    }
    return [correcto, mensaje];
  };

  const addOrder = (evt) => {
    evt.preventDefault();
    const order = {};
    let idOrder = "vacio";
    if (validateData()[0]) {
      const dateOrder = new Date();
      order.comprador = formData;
      order.productos = products.map(
        ({ name, price, cantidad, colorSeleccionado, talleSeleccionado }) => ({
          name,
          price,
          cantidad,
          colorSeleccionado,
          talleSeleccionado,
        })
      );
      order.total = calculateTotal() + priceShipping();
      order.fecha = {
        dia: `
        ${dateOrder.getDate()}/
        ${dateOrder.getMonth() + 1}/
        ${dateOrder.getFullYear()}`,
        hora: `
        ${dateOrder.getHours() < 10 ? "0" : ""}
        ${dateOrder.getHours()}:
        ${dateOrder.getMinutes() < 10 ? "0" : ""}
        ${dateOrder.getMinutes()}`,
      };
    } else {
      console.error(validateData()[1]);
    }
    const ordersCollection = collection(db, "orders");
    const form = document.getElementById("id-form-pago");

    addDoc(ordersCollection, order)
      .then((resp) => (idOrder = resp.id))
      .then(() => {
        form.reset();
        handleShowSuccessfull();

        setTimeout(() => {
          setAlertVisible(false);
        }, 3000);
      })
      .then(clearCart())
      .catch((err) => console.error(err))
      .finally(() => {
        setFormData({
          email: "",
          nombreDeTarjeta: "",
          numeroDeTarjeta: "",
          vencimiento: "",
          cvc: "",
          compania: "",
          direccion: "",
          puerta: "",
          ciudad: "",
          esquina: "",
          codigoPostal: "",
        });
      });
  };
  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <>
      <NavBar />
      <div className="bg-white mt-16">
        {/* Background color split screen for large screens */}
        <div
          className="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block"
          aria-hidden="true"
        />
        <div
          className="fixed right-0 top-0 hidden h-full w-1/2 bg-gray-50 lg:block"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
          <h1 className="sr-only">Informaci&oacute;n de la orden de compra</h1>

          <section
            aria-labelledby="summary-heading"
            className="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
          >
            <div className="mx-auto max-w-lg lg:max-w-none">
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Resumen del pedido
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 text-sm font-medium text-gray-900"
              >
                {products.map((product) => (
                  <li
                    key={`${product.id}-${product.talleSeleccionado}-${product.colorSeleccionado}`}
                    className="flex items-start space-x-4 py-6"
                  >
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-20 w-20 flex-none rounded-md object-cover object-center"
                    />
                    <div className="flex-auto space-y-1">
                      <h3>{product.name}</h3>
                      <p className="text-gray-500">
                        {product.colorSeleccionado}
                      </p>
                      <p className="text-gray-500">
                        {product.talleSeleccionado}
                      </p>
                    </div>
                    <div>
                      <p className="flex-none text-base font-medium">
                        {`$${product.price} `}
                      </p>
                      <p className="text-gray-500">
                        {product.cantidad > 1
                          ? `(${product.cantidad} unidades)`
                          : `(${product.cantidad} unidad)`}
                      </p>
                      <p className="text-gray-500">
                        {product.cantidad > 1
                          ? `$${product.price * product.cantidad} en total`
                          : ""}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd>${calculateTotal()}</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Env&iacute;o</dt>
                  <dd>${priceShipping}</dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">
                    ${calculateTotal() + priceShipping}
                  </dd>
                </div>
              </dl>

              <Popover className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden z-50">
                <div className="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6">
                  <div className="mx-auto max-w-lg">
                    <Popover.Button className="flex w-full items-center py-6 font-medium">
                      <span className="mr-auto text-base">Total</span>
                      <span className="mr-2 text-base">
                        ${calculateTotal() + priceShipping}
                      </span>
                      <ChevronUpIcon
                        className="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>
                </div>

                <Transition.Root as={Fragment}>
                  <div>
                    <Transition.Child
                      as={Fragment}
                      enter="transition-opacity ease-linear duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity ease-linear duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="translate-y-full"
                      enterTo="translate-y-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-y-0"
                      leaveTo="translate-y-full"
                    >
                      <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                        <dl className="mx-auto max-w-lg space-y-6">
                          <div className="flex items-center justify-between">
                            <dt className="text-gray-600">Subtotal</dt>
                            <dd>${calculateTotal()}</dd>
                          </div>

                          <div className="flex items-center justify-between">
                            <dt className="text-gray-600">Env&iacute;o</dt>
                            <dd>${priceShipping}</dd>
                          </div>
                        </dl>
                      </Popover.Panel>
                    </Transition.Child>
                  </div>
                </Transition.Root>
              </Popover>
            </div>
          </section>

          <form
            onSubmit={addOrder}
            id="id-form-pago"
            className="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16"
          >
            <div className="mx-auto max-w-lg lg:max-w-none">
              <section aria-labelledby="contact-info-heading">
                <h2
                  id="contact-info-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Informaci&oacute;n de contacto
                </h2>

                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo electr&oacute;nico
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={handleOnChange}
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
              </section>

              <section aria-labelledby="payment-heading" className="mt-10">
                <h2
                  id="payment-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Detalles de pago
                </h2>

                <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                  <div className="col-span-3 sm:col-span-4">
                    <label
                      htmlFor="nombreDeTarjeta"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre en la tarjeta
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleOnChange}
                        type="text"
                        id="nombreDeTarjeta"
                        name="nombreDeTarjeta"
                        autoComplete="cc-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-4">
                    <label
                      htmlFor="numeroDeTarjeta"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Numero de tarjeta
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleOnChange}
                        type="text"
                        id="numeroDeTarjeta"
                        name="numeroDeTarjeta"
                        autoComplete="cc-number"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-3">
                    <label
                      htmlFor="vencimiento"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Vencimiento (MM/AA)
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleOnChange}
                        type="text"
                        name="vencimiento"
                        id="vencimiento"
                        autoComplete="cc-exp"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CVV/CVC
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleOnChange}
                        type="text"
                        name="cvc"
                        id="cvc"
                        autoComplete="csc"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section aria-labelledby="shipping-heading" className="mt-10">
                <h2
                  id="shipping-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Direcci&oacute;n de env&iacute;o
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="compania"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Compan&iacute;a
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleOnChange}
                        type="text"
                        id="compania"
                        name="compania"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="direccion"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Direcci&oacute;n
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleOnChange}
                        type="text"
                        id="direccion"
                        name="direccion"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="puerta"
                      className="block text-sm font-medium text-gray-700"
                    >
                      N&uacute;mero de puerta / Apartamento
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleOnChange}
                        type="text"
                        id="puerta"
                        name="puerta"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="ciudad"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Ciudad
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleOnChange}
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="esquina"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Esquina
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleOnChange}
                        type="text"
                        id="esquina"
                        name="esquina"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="codigoPostal"
                      className="block text-sm font-medium text-gray-700"
                    >
                      C&oacute;digo postal
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={handleOnChange}
                        type="text"
                        id="codigoPostal"
                        name="codigoPostal"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* <section aria-labelledby="billing-heading" className="mt-10">
                <h2
                  id="billing-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Billing information
                </h2>

                <div className="mt-6 flex items-center">
                  <input
                    id="same-as-shipping"
                    name="same-as-shipping"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                  />
                  <div className="ml-2">
                    <label
                      htmlFor="same-as-shipping"
                      className="text-sm font-medium text-gray-900"
                    >
                      Same as shipping information
                    </label>
                  </div>
                </div>
              </section> */}

              <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
                >
                  Comprar
                </button>

                <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                  No se le cobrará hasta el siguiente paso.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default pago;
