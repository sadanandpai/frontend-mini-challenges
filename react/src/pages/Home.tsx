import Contribution from '@/components/contribution/Contribution';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/Navbar';
import styles from './styles.module.scss';

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <hr className={styles.hr} />
        <Contribution />
      </div>
    </>
  );
}

export default Home;
