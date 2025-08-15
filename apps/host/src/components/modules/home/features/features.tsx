import { FeatureCard } from '@/pages/types';
import styles from './features.module.scss';

const features: FeatureCard[] = [
  {
    title: '100+ Challenges',
    description:
      'Practice with a wide variety of frontend challenges that cover different concepts and difficulty levels.',
    icon: '🎯',
  },
  {
    title: 'Multiple Frameworks',
    description:
      'Solutions available in JavaScript, React, Vue, Angular, and more. Learn your favorite tech stack!',
    icon: '⚡',
  },
  {
    title: 'Interview Ready',
    description:
      'Prepare for technical interviews with real-world frontend challenges and solutions.',
    icon: '💼',
  },
  {
    title: 'Community Driven',
    description:
      'Join a community of developers contributing and learning together. Open source and free forever!',
    icon: '👥',
  },
];

export function Features() {
  return (
    <section className={styles.features}>
      <h2 className={styles.featuresTitle}>Why Frontend Mini Challenges?</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featuresCard}>
            <div style={{ fontSize: '2.5rem' }}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
