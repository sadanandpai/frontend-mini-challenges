import Contribution from '@/components/modules/home/contribution/contribution';
import Features from '@/components/modules/home/features/features';
import Footer from '@/components/modules/home/footer/footer';
import Hero from '@/components/modules/home/hero/hero';
import Navbar from '@/components/common/navbar/navbar';
import Testimonials from '@/components/modules/home/testimonials/testimonials';
import ScrollBtn from '@/components/common/scroll-to-top/scroll-btn';
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
