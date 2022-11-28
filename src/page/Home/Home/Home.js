import React from 'react';
import CategoryCards from '../CategoryCards/CategoryCards';
import Banner from '../Banner/Banner';
import Section from '../Sections/Section';
import Ads from '../Ads/Ads';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCards></CategoryCards>
            <Section></Section>
            <Ads></Ads>
        </div>
    );
};

export default Home;