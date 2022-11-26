import React from 'react';
import CategoryCards from '../CategoryCards/CategoryCards';
import Banner from '../Banner/Banner';
import Section from '../Sections/Section';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCards></CategoryCards>
            <Section></Section>
        </div>
    );
};

export default Home;