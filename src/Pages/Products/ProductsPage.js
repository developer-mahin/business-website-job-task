import React from 'react';
import useTitle from '../../Hooks/useTitle';
import ProductsSection from '../Home/home/ProductsSection/ProductsSection';

const ProductsPage = () => {
    useTitle("Products")
    return (
        <div>
            <ProductsSection></ProductsSection>
        </div>
    );
};

export default ProductsPage;