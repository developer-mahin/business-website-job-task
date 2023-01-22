import React from 'react';
import ContactSection from '../../Components/Shared/ContactSection';
import useTitle from '../../Hooks/useTitle';

const Contact = () => {
    useTitle("Contact")
    return (
        <div>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Contact;