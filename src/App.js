import React from 'react';
import Header from './Header';
import NewArrivals from './NewArrivals';
import SummerFlashSale from './SummerFlashSale';
import Testimonials from './Testimonials';
import Carousel from './Carousel';
import EditorsPick from './EditorsPick';
import SatisfactionGuaranteed from './SatisfactionGuaranteed';
import Shipping from './Shipping';
import Services from './Services';
import './index';

const App = () => {
  return (
    <div>
      <Header />
      <NewArrivals />
      <SummerFlashSale />
      <Testimonials />
      <Carousel />
      <EditorsPick />
      <SatisfactionGuaranteed />
      <Shipping />
      <Services />
      <index />
    </div>
  );
};

export default App;
