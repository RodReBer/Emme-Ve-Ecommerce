import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { listCartContext } from "../../contexts/CartContextProvider";
import { useContext } from "react";

const CartWidget = () => {
  let { getListCart } = useContext(listCartContext);
  let products = getListCart().length;

  return (
    <div className="ml-4 flow-root lg:ml-8">
      <Link to="/carrito" className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-white"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-white">{products}</span>
        <span className="sr-only">items in cart, view bag</span>
      </Link>
    </div>
  );
};
export default CartWidget;
