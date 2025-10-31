import AppHeader from "../../components/header";
import Footer from "../../components/footer";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <AppHeader />
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutTitle}>About Us</h1>
        <p className={styles.aboutText}>
          Welcome to our company! We are dedicated to providing high-quality
          products and services to our customers. Our team is passionate about
          innovation and excellence.
        </p>
        <img
          className={styles.aboutImage}
          src="/src/assets/react.svg"
          alt="About Us"
        />
        <p className={styles.aboutText}>
          Learn more about our mission, vision, and the values that drive us
          forward.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
