import Navbar from '@/common/navbar/Navbar';
import ScrollBtn from '@/common/scroll-to-top/ScrollBtn';
import Contribution from '@/modules/home/contribution/Contribution';
import Features from '@/modules/home/features/features';
import Footer from '@/modules/home/footer/Footer';
import Hero from '@/modules/home/hero/Hero';
import Testimonials from '@/modules/home/testimonials/testimonials';
import styles from '@/styles.module.scss';
import { HashLink } from 'react-router-hash-link';

function HomePage() {
  return (
    <>
      <Navbar>
        <HashLink to="#whyUs">Why us?</HashLink>
        <HashLink to="#testimonials">Testimonials</HashLink>
        <HashLink to="#contributors">Contributors</HashLink>
      </Navbar>

      <div className={styles.container}>
        <Hero />
        <hr className={styles.hr} />
        <Features />
        <hr className={styles.hr} />
        <Testimonials />
        <hr className={styles.hr} />
        <Contribution />
        <Footer />
        <ScrollBtn />
      </div>
    </>
  );
}

export default HomePage;
