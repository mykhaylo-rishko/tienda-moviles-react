import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import useFetchWithCache from '../hooks/useFetchWithCache'; 
import './ProductListPage.css';

export default function ProductListPage() {   
    const { data: products, isLoading, error } = useFetchWithCache(
        'https://itx-frontend-test.onrender.com/api/product'
    );
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products?.filter(product =>
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.model.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    if (isLoading) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="product-grid">
            {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
                <ProductCard
                key={product.id}
                id={product.id}
                brand={product.brand}
                model={product.model}
                price={product.price}
                imgUrl={product.imgUrl}
                />
            ))
            ) : (
            <p>No se encontraron productos con ese criterio.</p>
            )}
        </div>
        </div>
    );
}