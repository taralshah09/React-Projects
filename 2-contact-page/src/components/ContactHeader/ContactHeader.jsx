import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  console.log(styles);
  return (
    <div className={styles.contactheader}>
      <h1>Contact Us</h1>
      <p>
        LEt's connect we're here to help you and we'd love to hear from you!
        whether you have a question. comment or just want to chat , you can
        reach us out through the contact form of this page or by phone email or
        social media.
      </p>
    </div>
  );
};

export default ContactHeader;
