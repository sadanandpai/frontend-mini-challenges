import styles from './features.module.scss';

const features = [
  {
    title: 'Free and open-source',
    info: 'Every challenge comes with the solution in multiple tech stacks & totally free forever',
  },
  {
    title: 'Designed for interviews',
    info: 'The challenges are handpicked collection from various interviews of top companies',
  },
  {
    title: 'Community vetted solutions',
    info: 'Solutions are reviewed by the community & follows the best industry practices',
  },
];

function Features() {
  return (
    <section id="whyUs">
      <h2 className={styles.heading}>Why Us?</h2>

      <div className={styles.features}>
        {features.map((feature, idx) => (
          <article key={idx}>
            <h3>{feature.title}</h3>
            <p>{feature.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Features;
