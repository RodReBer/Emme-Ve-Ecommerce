import {
    ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const CartWidget = () => {
        return (
        < div className = "ml-4 flow-root lg:ml-8" >
            <Link to="/carrito" className="group -m-2 flex items-center p-2" >
                <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                <span className="ml-2 text-sm font-medium text-white">0</span>
                <span className="sr-only">items in cart, view bag</span>
            </Link>
        </div >
    );
};
export default CartWidget;