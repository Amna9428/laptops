import ProductCard from "./ProductCard";



const ProductsSection = () => {
    const products = [
        {
            id: 1,
            name: 'ASUS W100 Optical Wireless Mouse',
            price: '$129.00',
            image: 'https://images.unsplash.com/photo-1733503711060-1df31554390f'
        },
        {
            id: 2,
            name: 'Logitech MX Master 3',
            price: '$99.00',
            image: 'https://images.unsplash.com/photo-1733503711060-1df31554390f'
        },
        {
            id: 3,
            name: 'Razer DeathAdder V2',
            price: '$69.00',
            image: 'https://images.unsplash.com/photo-1733503711060-1df31554390f'
        },
        {
            id: 4,
            name: 'SteelSeries Rival 600',
            price: '$79.00',
            image: 'https://images.unsplash.com/photo-1733503711060-1df31554390f'
        },
        {
            id: 5,
            name: 'ASUS W100 Optical Wireless Mouse',
            price: '$129.00',
            image: 'https://images.unsplash.com/photo-1733503711060-1df31554390f'
        },
        {
            id: 6,
            name: 'Logitech MX Master 3',
            price: '$99.00',
            image: 'https://images.unsplash.com/photo-1733503711060-1df31554390f'
        },
        {
            id: 7,
            name: 'Razer DeathAdder V2',
            price: '$69.00',
            image: 'https://images.unsplash.com/photo-1733503711060-1df31554390f'
        },
        {
            id: 8,
            name: 'SteelSeries Rival 600',
            price: '$79.00',
            image: 'https://images.unsplash.com/photo-1733503711060-1df31554390f'
        }
    ];
    return (
        <div className="grid grid-cols-4 gap-4 justify-center">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsSection;