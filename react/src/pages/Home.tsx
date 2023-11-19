import Contribution from '@/components/contribution/Contribution';
import Features from '@/components/features/features';
import Footer from '@/components/footer/Footer';
import { HashLink } from 'react-router-hash-link';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/Navbar';
import Testimonials from '@/components/testimonials/testimonials';
import styles from './styles.module.scss';
import ScrollBtn from '@/components/scroll-to-top/ScrollBtn';
import LeaderBoard from '@/components/leaderboard/LeaderBoard';

function Home() {
  return (
    <>
      <Navbar>
        <HashLink to="/#whyUs">Why us?</HashLink>
        <HashLink to="/#testimonials">Testimonials</HashLink>
        <HashLink to="/#contributors">Contributors</HashLink>
      </Navbar>

      <div className={styles.container}>
        <Hero />
        <hr className={styles.hr} />
        <Features />
        <hr className={styles.hr} />
        <Testimonials />
        <hr className={styles.hr} />
        <Contribution />
        <hr className={styles.hr} />
        <LeaderBoard/>

        <Footer />
        <ScrollBtn/>
      </div>
    </>
  );
}

export default Home;
