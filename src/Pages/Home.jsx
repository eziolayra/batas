import React from 'react'
import TopNav from '../Components-Home/TopNav'
import HomeTops from '../Components-Home/HomePic'
import HomeBox from '../Components-Home/HomeBox'
import Products from '../Components-Home/Products'
import HomeMiddle from '../Components-Home/HomeMiddle'
import Map from '../Components-Home/Map'
import Ourclients from '../Components-Home/Ourclients'
import Events from '../Components-Home/Events'
import Testimonials from '../Components-Home/Testimonials'
import EMIcalculator from '../Components-Home/EMIcalculator'
import Video from '../Components-Home/Video'
import Gallery from '../Components-Home/Gallery'
import FAQ from '../Components-Home/FAQ'
import Contact from '../Components-Home/Contact'
import Developed from '../Components-Home/Developed'

const Home = () => {
  return (
    <div>
      <TopNav />
      <HomeTops />
      <HomeBox />
      <Products />
      <HomeMiddle />
      <Map />
      <Events />
      <Ourclients />
      <Testimonials/>
      <EMIcalculator/>
      <Video/>
      <Gallery/>
      <FAQ/>
      <Contact/>
      <Developed/>
    </div>
  );
}

export default Home
