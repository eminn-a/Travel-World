import styles from "./FooterStyles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div>
          <h1>Travel-World</h1>
          <p>Your unforgettable memories!</p>
        </div>
        <div className={styles.icons}>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-square-youtube"></i>
          <i class="fa-brands fa-square-twitter"></i>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <h4>First Section</h4>
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third!</li>
          </ul>
        </div>
        <div>
          <h4>Second Section</h4>
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third!</li>
          </ul>
        </div>
        <div>
          <h4>Third Section</h4>
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third!</li>
          </ul>
        </div>
        <div>
          <h4>Third Section</h4>
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third!</li>
          </ul>
        </div>
      </div>
      <h5 className={styles.rights}>
        <hr />
        All rights reserved © 2024 Emin Apturaim
      </h5>
    </div>
  );
};

export default Footer;
