import React from 'react'
import Herosection from '../Components/Herosection'
import Bride from '../Components/Bride'
import Navhead from '../Components/Navhead'
import Groom from '../Components/Groom'
import Sumuhurtam from '../Components/Sumuhurtam'
import Vindhu from '../Components/Vindhu'
import Lunch from '../Components/Lunch'
import Footer from '../Components/Footer'
import Venue from '../Components/Venue'
import Abhilasa from '../Components/Abhilasa'


const Landingpage = () => {
  return (
    <div class="bg-gradient-to-r from-teal-400 to-yellow-200">
    
     
      <Herosection />
      <Bride />
      <Groom />
      <Sumuhurtam />
      <Venue />
      <Lunch />
      <Abhilasa />
      <Vindhu />
      
      <Footer />
    </div>
  )
}

export default Landingpage
