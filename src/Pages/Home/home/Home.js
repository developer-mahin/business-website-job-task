import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import BannerSection from './BannerSection/BannerSection';
import ProductsSection from './ProductsSection/ProductsSection';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <ProductsSection></ProductsSection>
            <AboutSection></AboutSection>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;