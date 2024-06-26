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
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-square-youtube"></i>
          <i className="fa-brands fa-square-twitter"></i>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <h4>Contacts</h4>
          <ul>
            <li>
              <i className="fa-solid fa-location-dot"></i> Bulgaria, Haskovo
            </li>
            <li>
              <i className="fa-solid fa-phone"></i> 0888 112 433
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i> travel-world@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <h4>Payment</h4>
          <ul>
            <li>
              <i className="fa-brands fa-cc-visa"></i> Visa
            </li>
            <li>
              <i className="fa-brands fa-cc-mastercard"></i> MasterCard
            </li>
            <li>
              <i className="fa-solid fa-shop"></i> Easy Pay
            </li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>
              <i className="fa-solid fa-headset"></i> Customer Suppor
            </li>
            <li>
              <i className="fa-solid fa-question"></i> FAQ
            </li>
            <li>
              <i className="fa-regular fa-handshake"></i> Help Center
            </li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <ul>
            <li>Sign Up for News</li>
            <li>
              <input type="email" placeholder=" Email" />
            </li>
            <button className={styles.sbcrbBtn}>Subscribe</button>
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
