import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Staking Plans</h2>
            <h5 className="h5 mb-4">Select percentage APR</h5>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
             <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          
             <div style={{fontWeight:"bold",fontSize:"25px ,", borderRadius:"30px",display:"flex", justifyContent:"center",marginBottom:"15px", alignItems:"center"}}>3% APR</div>
              <h5 className="h5 mb-4">7 Days</h5> 

              <p className="text-lg text-gray-400 text-center">Stake your RVX tokens for a period of <span style={{fontWeight:"bold",color:"white"}}>7-Days</span>  in a staking contract to help secure 
              the Ravox network and receive a reward of <span style={{fontWeight:"bold", color:"white"}}>3%</span> of your staked tokens at the end of the <span style={{fontWeight:"bold", color:"white"}}>7-Days</span>  period. </p>
            
              <div style={{fontWeight:"bold",fontSize:"22px", height:"45px", width:"170px", borderRadius:"5px", backgroundColor:"#704094", display:"flex", justifyContent:"center",marginBottom:"20px",marginTop:"30px", alignItems:"center",cursor:"pointer"}} >SUBSCRIBE</div>
            </div> 

            {/* 2nd item */}
             <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
           
             <div style={{fontWeight:"bold",fontSize:"25px", borderRadius:"30px",display:"flex", justifyContent:"center",marginBottom:"15px", alignItems:"center"}}>13% APR</div>
            
              <h5 className="h5 mb-4">30 Days</h5>
              <p className="text-lg text-gray-400 text-center">Stake your RVX tokens for a period of <span style={{fontWeight:"bold",color:"white"}}>30-Days</span>  in a staking contract to help secure 
              the Ravox network and receive a reward of <span style={{fontWeight:"bold", color:"white"}}>13%</span> of your staked tokens at the end of the <span style={{fontWeight:"bold", color:"white"}}>30-Days</span>  period. </p>
             <div style={{fontWeight:"bold",fontSize:"22px", height:"45px", width:"170px", borderRadius:"5px", backgroundColor:"#704094", display:"flex", justifyContent:"center",marginBottom:"20px",marginTop:"30px", alignItems:"center",cursor:"pointer"}} >SUBSCRIBE</div>
            </div> 

            {/* 3rd item */}
             <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            
             <div style={{fontWeight:"bold",fontSize:"25px", borderRadius:"30px",display:"flex", justifyContent:"center",marginBottom:"15px", alignItems:"center"}}>40% APR</div>
            
              <h5 className="h5 mb-4">3 Months</h5>
              <p className="text-lg text-gray-400 text-center">Stake your RVX tokens for a period of <span style={{fontWeight:"bold",color:"white"}}>3 months</span>  in a staking contract to help secure 
              the Ravox network and receive a reward of <span style={{fontWeight:"bold", color:"white"}}>40%</span> of your staked tokens at the end of the <span style={{fontWeight:"bold", color:"white"}}>3-months</span>  period. </p>
             <div style={{fontWeight:"bold",fontSize:"22px", height:"45px", width:"170px", borderRadius:"5px", backgroundColor:"#704094", display:"flex", justifyContent:"center",marginBottom:"20px",marginTop:"30px", alignItems:"center",cursor:"pointer"}} >SUBSCRIBE</div>
            </div> 

            {/* 4th item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
               <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>  */}

            {/* 5th item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div> */}

            {/* 6th item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
