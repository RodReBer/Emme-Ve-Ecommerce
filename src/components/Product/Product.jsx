const Product = ({ product }) => {
    return (
        <>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
            <p className="italic text-gray-500">{product.availability}</p>
            <p className="mt-2 font-medium text-gray-900">${product.price}</p>
        </>
    );
};
export default Product;