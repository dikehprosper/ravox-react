import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Features from '../partials/Features';
import FeaturesZigZag from '../partials/FeaturesZigzag';

import Newsletter from '../partials/Newsletter';

import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
         <HeroHome />
         <Features /> 
        {/* <FeaturesZigZag />  */}
      
        <Newsletter />  
      </main>



      {/*  Site footer */}
      <Footer />  
    </div>
  );
}

export default Home;