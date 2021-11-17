import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ScreenSection from '../ScreenSection/ScreenSection';
import Services from '../Services/Services';
import Subscription from '../Subscription/Subscription';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Services />
      <ScreenSection />
      <Testimonials />
      <Subscription />
    </div>
  );
};

export default Home;