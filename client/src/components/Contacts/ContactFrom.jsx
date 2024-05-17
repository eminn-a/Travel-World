import styles from "./ContactFormStyles.module.css";

const ContactForm = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Send a message to us !</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Title" />
        <textarea name="" id="" placeholder="Your message" rows="7"></textarea>
        <button>Send message</button>
      </form>
    </div>
  );
};

export default ContactForm;
