import { Contribution } from '@/components/modules/home/contribution/contribution';
import { Features } from '@/components/modules/home/features/features';
import { Footer } from '@/components/modules/home/footer/footer';
import { Hero } from '@/components/modules/home/hero/hero';
import { Link } from 'react-router-dom';
import Navbar from '@/components/common/navbar/navbar';
import styles from '@/styles.module.scss';

export function HomePage() {
  return (
    <>
      <Navbar>
        <Link to="/leaderboard">Leaderboard</Link>
      </Navbar>
      <div className={styles.container}>
        <Hero />
        <Features />
        <Contribution />
        <Footer />
      </div>
    </>
  );
}
