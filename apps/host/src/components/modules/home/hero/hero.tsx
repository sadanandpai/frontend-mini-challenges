import { coverTransparent, cssImg, jsImg, reactImg, vueImg, angularImg } from '@fmc/assets/images';
import styles from './hero.module.scss';
import { HashLink } from 'react-router-hash-link';

const allImg = [
  {
    title: 'css',
    imgSrc: cssImg,
  },
  {
    title: 'JS',
    imgSrc: jsImg,
  },
  {
    title: 'react',
    imgSrc: reactImg,
  },
  {
    title: 'vue',
    imgSrc: vueImg,
  },
  {
    title: 'angular',
    imgSrc: angularImg,
  },
];

function Hero() {
  return (
    <main className={styles.hero}>
      <div>
        <h1>
          Prepare for <span>UI coding interviews</span>
        </h1>

        <p>by solving the collection of challenges from Frontend Mini Challenges</p>

        <h3 className={styles.link}>
          <HashLink to="javascript">Get Started</HashLink>
        </h3>
        <div className={styles.heroTechImg}>
          {allImg.map((item) => (
            <img
              key={item.title}
              src={item.imgSrc}
              width={35}
              height={35}
              alt={`${item.title}-img`}
            />
          ))}
        </div>
      </div>

      <figure className={styles.figure}>
        <img className={styles.heroImage} src={coverTransparent} alt="brand" />
        <figcaption>Collection of frontend challenges for learning and interviews</figcaption>
      </figure>
    </main>
  );
}

export default Hero;
