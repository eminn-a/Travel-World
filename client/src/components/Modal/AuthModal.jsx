import styles from "./AuthModal.module.css";
import { useState, useEffect, useRef } from "react";

const AuthModal = ({ show, closeModal }) => {
  const [register, setRegister] = useState(true);

  return (
    <>
      {show ? (
        <div className={styles.modalContainer} onClick={closeModal}>
          <div className={styles.wrapper}>
            <div className={styles.closeBtn}>
              <button onClick={closeModal}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className={styles.titleText}>
              {register ? (
                <div className={`${styles.title} ${styles.signup}`}>
                  Sign Up{" "}
                </div>
              ) : (
                <div className={`${styles.title} ${styles.login}`}>Login </div>
              )}
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formInner}>
                <form className={styles.login}>
                  <div className={styles.field}>
                    <input type="text" placeholder="Email Address" />
                  </div>
                  <div className={styles.field}>
                    <input type="password" placeholder="Password" />
                  </div>
                  {register ? (
                    <div className={styles.field}>
                      <input type="password" placeholder="Re-Password" />
                    </div>
                  ) : (
                    <div className={styles.passLink}>
                      <a href="#">Forgot password?</a>
                    </div>
                  )}
                  <div className={`${styles.field} ${styles.btn}`}>
                    <div className={styles.btnLayer}></div>
                    <input
                      type="submit"
                      value={register ? "Register" : "Login"}
                    />
                  </div>
                </form>
                {!register ? (
                  <div className={styles.signupLink}>
                    Not a member?{" "}
                    <p onClick={() => setRegister(true)}>Signup now</p>
                  </div>
                ) : (
                  <div class={styles.signupLink}>
                    Already registered?{" "}
                    <p onClick={() => setRegister(false)}>Login now</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AuthModal;
