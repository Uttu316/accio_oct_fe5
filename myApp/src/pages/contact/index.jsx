import AppHeader from "../../components/header";
import Footer from "../../components/footer";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <AppHeader />
      <div className={styles.contactContent}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <p className={styles.contactText}>
          Get in touch with us! We would love to hear from you. Reach out for
          inquiries, support, or just to say hello.
        </p>
        <img
          className={styles.contactImage}
          src="/src/assets/react.svg"
          alt="Contact Us"
        />
        <div className={styles.contactInfo}>
          <p>Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, City, State 12345</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
