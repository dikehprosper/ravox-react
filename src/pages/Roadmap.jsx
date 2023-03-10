import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesBlocks2 from '../partials/Features';
import FeaturesZigZag from '../partials/FeaturesZigzag';

import Newsletter from '../partials/Newsletter';

import Footer from '../partials/Footer';

function Roadmap() {
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
        <FeaturesZigZag />
         </div>
          
         {/* <FeaturesBlocks2 /> */}
        
      
        <Newsletter />  
      </main>



      {/*  Site footer */}
      <Footer />  
    </div>
  );
}

export default Roadmap;