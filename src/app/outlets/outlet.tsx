import Certificates from "../sections/certificates";
import Hero from "../sections/hero";
import Products from "../sections/products";
import Production from "../sections/production";
import Contact from "../sections/contact"
import OurStories from "../sections/our-stories"

const Outlet = () => {
 
  return (
    <>
        <Hero />
        <Products />
        <Certificates />
        <Production />
        <Contact />
        <OurStories />
        
    </>
  );
};

export default Outlet;
