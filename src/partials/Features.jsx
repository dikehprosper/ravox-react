import React from 'react';

function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Ravoxnomics</h2>
            </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div style={{fontWeight:"bold",fontSize:"25px", height:"60px", width:"60px", borderRadius:"30px", backgroundColor:"#704094", display:"flex", justifyContent:"center",marginBottom:"20px", alignItems:"center"}}>1B</div>
              <h4 className="h4 mb-2">Total Supply</h4>
          </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <div style={{fontWeight:"bold",fontSize:"25px", height:"60px", width:"60px", borderRadius:"30px", backgroundColor:"#704094", display:"flex", justifyContent:"center",marginBottom:"20px", alignItems:"center"}}>5%</div>
              <h4 className="h4 mb-2">Buy Tax</h4> </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <div style={{fontWeight:"bold",fontSize:"25px", height:"60px", width:"60px", borderRadius:"30px", backgroundColor:"#704094", display:"flex", justifyContent:"center",marginBottom:"20px", alignItems:"center"}}>5%</div>
              <h4 className="h4 mb-2">Sell Tax</h4> </div>


          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;
