import React from "react";
import zz from "../images/favicon.png";
import { GiCheckMark } from "react-icons/gi";

function FeaturesBlocks() {
  function click(){
    if(window.ethereum){
      // Do something 
      alert("You don't have enough $Ravox to stake")
    }else{
      alert("You don't have enough $Ravox to stake!!")
    }

  }
  

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
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              style={{
                padding: "10px",
                backgroundColor: "#33363A",
                borderRadius: "6px",
              }}
            >
              <div
                className="relative flex flex-col items-start"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px, ",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "15px",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <img
                    src={zz}
                    alt=""
                    srcset=""
                    height="35px"
                    width="35px"
                  />{" "}
                  &nbsp; Ravox &nbsp;&nbsp;{" "}
                  <span
                    style={{
                      color: "lightgreen",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    0.1%
                  </span>{" "}
                </div>
                <p style={{ fontSize: "10px", fontWeight: "bold" }}>Duration</p>
                <div
                  style={{
                    position: "relative",
                    width: "80px",
                    height: "35px",
                    backgroundColor: "#704094",
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "end",
                    paddingRight:"2.5px",
                    paddingTop:"2.5px",
                    borderRadius: "4px",
                    
                  }}
                >
                  <GiCheckMark fontSize="6.65px" />
                  <div style={{ position: "absolute",borderRadius: "4px",border:"1.5px solid #704094", WebkitClipPath:
                      "polygon(0 0, 0 100%, 100% 100%, 100% 40%, 75% 0)",
                    ClipPath:
                      "polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0)", left:"0", top:"0",bottom:"0", display:"flex",fontSize:"12px", justifyContent:"center", alignItems:"center", fontWeight:"bold",  width:"100%", backgroundColor:"#33363A" }}> 7 Days</div>
                </div>
                <p style={{ fontSize: "10px", fontWeight: "bold", marginTop:"15px" }}>Stake Amount</p>
               
               <div
                 style={{
                   position: "relative",
                   width: "180px",
                   height: "35px",
                   backgroundColor: "#704094",
                   marginTop: "10px",
                   display: "flex",
                   justifyContent: "end",
                   paddingRight:"2.5px",
                   paddingTop:"2.5px",
                   borderRadius: "4px",
                   
                 }}
               >
                
         
                 <input type="text" placeholder="Enter stake amount" style={{ position: "absolute",borderRadius: "4px",border:"1.5px solid #704094", WebkitClipPath:
                     "polygon(0 0, 0 100%, 100% 100%, 100% 40%, 75% 0)",
                   ClipPath:
                     "polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0)", left:"0", top:"0",bottom:"0", display:"flex",fontSize:"12px", justifyContent:"center", alignItems:"center", fontWeight:"bold",  width:"100%", backgroundColor:"#33363A" }}/>
               
               </div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    height: "45px",
                    borderRadius: "5px",
                    backgroundColor: "#704094",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "5px",
                    marginTop: "30px",
                    alignItems: "center",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onClick={click}
                >
                  STAKE NOW
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "10px",
                backgroundColor: "#33363A",
                borderRadius: "6px",
              }}
            >
              <div
                className="relative flex flex-col items-start"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px ,",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "15px",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <img
                    src={zz}
                    alt=""
                    srcset=""
                    height="35px"
                    width="35px"
                  />{" "}
                  &nbsp; Ravox &nbsp;&nbsp;{" "}
                  <span
                    style={{
                      color: "lightgreen",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    1.3%
                  </span>{" "}
                </div>
                <p style={{ fontSize: "10px", fontWeight: "bold" }}>Duration</p>
                <div
                  style={{
                    position: "relative",
                    width: "80px",
                    height: "35px",
                    backgroundColor: "#704094",
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "end",
                    paddingRight:"2.5px",
                    paddingTop:"2.5px",
                    borderRadius: "4px",
                    
                  }}
                >
                  <GiCheckMark fontSize="6.65px" />
                  <div style={{ position: "absolute",borderRadius: "4px",border:"1.5px solid #704094", WebkitClipPath:
                      "polygon(0 0, 0 100%, 100% 100%, 100% 40%, 75% 0)",
                    ClipPath:
                      "polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0)", left:"0", top:"0",bottom:"0", display:"flex",fontSize:"12px", justifyContent:"center", alignItems:"center", fontWeight:"bold",  width:"100%", backgroundColor:"#33363A" }}> 30 Days</div>
                 
                </div>
                <p style={{ fontSize: "10px", fontWeight: "bold", marginTop:"15px" }}>Stake Amount</p>
               
                <div
                  style={{
                    position: "relative",
                    width: "180px",
                    height: "35px",
                    backgroundColor: "#704094",
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "end",
                    paddingRight:"2.5px",
                    paddingTop:"2.5px",
                    borderRadius: "4px",
                    
                  }}
                >
                 
          
                  <input type="text" placeholder="Enter stake amount" style={{ position: "absolute",borderRadius: "4px",border:"1.5px solid #704094", WebkitClipPath:
                      "polygon(0 0, 0 100%, 100% 100%, 100% 40%, 75% 0)",
                    ClipPath:
                      "polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0)", left:"0", top:"0",bottom:"0", display:"flex",fontSize:"12px", justifyContent:"center", alignItems:"center", fontWeight:"bold",  width:"100%", backgroundColor:"#33363A" }}/>
                
                </div>
               

               
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    height: "45px",
                    borderRadius: "5px",
                    backgroundColor: "#704094",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "5px",
                    marginTop: "30px",
                    alignItems: "center",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onClick={click}
                >
                STAKE NOW
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "10px",
                backgroundColor: "#33363A",
                borderRadius: "6px",
              }}
            >
              <div
                className="relative flex flex-col items-start"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px ,",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "15px",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <img
                    src={zz}
                    alt=""
                    srcset=""
                    height="35px"
                    width="35px"
                  />{" "}
                  &nbsp; Ravox &nbsp;&nbsp;{" "}
                  <span
                    style={{
                      color: "lightgreen",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    4.0%
                  </span>{" "}
                </div>
                <p style={{ fontSize: "10px", fontWeight: "bold" }}>Duration</p>
                <div
                  style={{
                    position: "relative",
                    width: "80px",
                    height: "35px",
                    backgroundColor: "#704094",
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "end",
                    paddingRight:"2.5px",
                    paddingTop:"2.5px",
                    borderRadius: "4px",
                    
                  }}
                >
                  <GiCheckMark fontSize="6.65px" />
                  <div style={{ position: "absolute",borderRadius: "4px",border:"1.5px solid #704094", WebkitClipPath:
                      "polygon(0 0, 0 100%, 100% 100%, 100% 40%, 75% 0)",
                    ClipPath:
                      "polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0)", left:"0", top:"0",bottom:"0", display:"flex",justifyContent:"center", alignItems:"center", fontWeight:"bold", fontSize:"12px",  width:"100%", backgroundColor:"#33363A" }}> 3 Months</div>
                </div>
                <p style={{ fontSize: "10px", fontWeight: "bold", marginTop:"15px" }}>Stake Amount</p>
               
               <div
                 style={{
                   position: "relative",
                   width: "180px",
                   height: "35px",
                   backgroundColor: "#704094",
                   marginTop: "10px",
                   display: "flex",
                   justifyContent: "end",
                   paddingRight:"2.5px",
                   paddingTop:"2.5px",
                   borderRadius: "4px",
                   
                 }}
               >
                
         
                 <input type="text" placeholder="Enter stake amount" style={{ position: "absolute",borderRadius: "4px",border:"1.5px solid #704094", WebkitClipPath:
                     "polygon(0 0, 0 100%, 100% 100%, 100% 40%, 75% 0)",
                   ClipPath:
                     "polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0)", left:"0", top:"0",bottom:"0", display:"flex",fontSize:"12px", justifyContent:"center", alignItems:"center", fontWeight:"bold",  width:"100%", backgroundColor:"#33363A" }}/>
               
               </div>

                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    height: "45px",
                    borderRadius: "5px",
                    backgroundColor: "#704094",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "5px",
                    marginTop: "30px",
                    alignItems: "center",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onClick={click}
                >
                  STAKE NOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
