import React from 'react';
import ContactSection from '../../../Components/Shared/ContactSection';
import useTitle from '../../../Hooks/useTitle';
import AboutSection from './AboutSection/AboutSection';
import BannerSection from './BannerSection/BannerSection';
import ProductsSection from './ProductsSection/ProductsSection';
import SubscribeSection from './SubscribeSection/SubscribeSection';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    useTitle("Home")
    return (
        <div>
            <BannerSection></BannerSection>
            <ProductsSection></ProductsSection>
            <AboutSection></AboutSection>
            <Testimonial></Testimonial>
            <ContactSection></ContactSection>
            <SubscribeSection></SubscribeSection>
        </div>
    );
};

export default Home;