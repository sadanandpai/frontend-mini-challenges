import styles from './footer.module.scss';

function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className={styles.footer}>Copyright © {currentYear}</footer>;
}

export default Footer;
