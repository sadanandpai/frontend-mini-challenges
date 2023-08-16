import Contribution from '@/components/contribution/Contribution';
import Navbar from '@/components/navbar/Navbar';
import styles from './styles.module.scss';

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <main className="container text-center">
          <figure>
            <img
              className={styles.hero}
              src="https://github.com/sadanandpai/frontend-mini-challenges/raw/main/cover.png"
              alt="brand"
            />
            <figcaption>Collection of frontend challenges for learning and interviews</figcaption>
          </figure>

          <h2 className={styles.links}>
            <a href="/frontend-mini-challenges/native/">JavaScript challenges</a>
            <a href="/frontend-mini-challenges/react/dist/#/challenges">React challenges</a>
          </h2>
        </main>

        <hr className={styles.hr} />

        <Contribution />
      </div>
    </>
  );
}

export default Home;
