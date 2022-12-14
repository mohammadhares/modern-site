import React from "react";
import styles from "./style";
import {Navbar, Business , Hero , Stats , Billing , CardDeal, Testimonial , Clients , CTA , Footer} from './components/index';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 z-30 stick bg-primary`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} mt-[50px]`}>
        <div className={`${styles.boxWidth}`}>
           <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonial />
            <Clients />
            <CTA />
            <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
