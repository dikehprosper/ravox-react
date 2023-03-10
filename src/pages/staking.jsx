import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';

import FeaturesZigZag from '../partials/FeaturesZigzag';

import Newsletter from '../partials/Newsletter';

import Footer from '../partials/Footer';

function Staking() {
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

       <div style={{marginTop:"60px"}}>
         <FeaturesBlocks /> 
         </div>
      
        <Newsletter />  
      </main>



      {/*  Site footer */}
      <Footer />  
    </div>
  );
}

export default Staking;