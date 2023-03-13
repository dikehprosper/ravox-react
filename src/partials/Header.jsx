import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import zz from '../images/favicon.png'
import { ethers } from 'ethers';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { Web3Button } from '@web3modal/react'
// import { useWeb3ModalTheme } from '@web3modal/react'



function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // const [account, setAccount] = useState(null)

  // async function connect() {
  //   if (window.ethereum) {
  //    await window.ethereum.request({ method: "eth_requestAccounts" });
  //    window.web3 = new Web3(window.ethereum);
  //    const account = web3.eth.accounts;
  //    //Get the current MetaMask selected/active wallet
  //    const walletAddress = account.givenProvider.selectedAddress;
  //    console.log(`Wallet: ${walletAddress}`);
  //    setAccount(walletAddress)
    
  //   } else {
  //    console.log("No wallet");
  //    alert("we would proceed to connect to meta-mask")
  //   }
  // }

  

// const { theme, setTheme } = useWeb3ModalTheme()

// // Modal's theme object
// theme

// // Set modal theme
// setTheme({
//   themeMode: 'dark',
//   themeVariables: {
//     '--w3m-font-family': 'Roboto, sans-serif',
//     '--w3m-accent-color': '#704094'
//     // ...
//   }
// })

  


  const chains = [arbitrum, mainnet, polygon]
  const projectId = 'd724049e3cb9c9fdf9ac761f6142f3fe'
  
  const { provider } = configureChains(chains, [w3mProvider({ projectId })])
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider
  })
  const ethereumClient = new EthereumClient(wagmiClient, chains)
 
  






  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const styles = {
    color: "#704094",
    fontSize:"17px",
    ':hover': {
      backgroundColor: '#704094',
      color: "white"
    }};



  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20, position-relative">

          {/* Site branding */}
          <div className="shrink-0 mr-4" >
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img src={zz} alt="" srcset="" height="60px" width="60px"  />
              <h2 style={{color:"#704094",fontWeight:"bold", fontSize:"20px", marginLeft:"10px" }}>Ravox</h2>
            
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
            <li>
                <Link to="/" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li> 
             
             
              <li>
                <Link to="/staking" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Stake</Link>
              </li> 
              
               <li>
                <Link to="/roadmap" className="btn-sm text-purple-600 hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out">Roadmap</Link>
              </li> 

             
            </ul>

          </nav>

  
          {/* Mobile menu */}
          <div style={{ marginLeft:"85px",  color:"white", backgroundColor:"transparent", padding:"6px", borderRadius:"4px", fontWeight:'bold'}} >       <WagmiConfig client={wagmiClient}>
        <Web3Button 
         themeVariables={{
          '--w3m-font-family': 'Roboto, sans-serif',
          '--w3m-accent-color': '#FFFFFF'
        }}/>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /></div>
         
          <div className="md:hidden flex align-start justify-center">
          {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
              <li>
                  <Link to="/" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-purple-700  hover:bg-white transition duration-150 ease-in-out" >Home</Link>
                </li>
               
                <li>
                  <Link to="/staking" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-purple-700 hover:bg-white transition duration-150 ease-in-out" >Stake</Link>
                </li>
                <li>
                  <Link to="/roadmap" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-purple-700 hover:bg-white transition duration-150 ease-in-out" >Roadmap</Link>
                </li>
              <li>
                <Link to="https://app.uniswap.org/#/swap" className="btn-sm text-purple-600  hover:text-purple-600 hover:bg-white px-4 py-3 flex items-center transition duration-150 ease-in-out">Buy Now</Link>
              </li>
            
                
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
