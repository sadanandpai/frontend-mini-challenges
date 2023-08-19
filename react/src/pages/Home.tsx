import Contribution from '@/components/contribution/Contribution';
import Features from '@/components/features/features';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/Navbar';
import Testimonials from '@/components/testimonials/testimonials';
import styles from './styles.module.scss';

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Hero />
        <hr className={styles.hr} />
        <Features />
        <hr className={styles.hr} />
        <Testimonials />
        <hr className={styles.hr} />
        <Contribution />
        <Footer />
      </div>
    </>
  );
}

export default Home;
