import { useForm } from "react-hook-form";
import styles from "./AuthModal.module.css";
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../../validations/loginValidation";

const AuthModal = ({ show, closeModal }) => {
  const [registered, setRegistered] = useState(false);

  const validationSchema = loginValidation(registered);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset({ rePassword: "" });
  };

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
              {registered ? (
                <div className={`${styles.title} ${styles.signup}`}>
                  Register now
                </div>
              ) : (
                <div className={`${styles.title} ${styles.login}`}>
                  Sign in{" "}
                </div>
              )}
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formInner}>
                <form
                  className={styles.login}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className={styles.field}>
                    <input
                      {...register("email")}
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className={styles.field}>
                    <input
                      {...register("password")}
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  {registered && (
                    <div className={styles.field}>
                      <input
                        {...register("rePassword")}
                        reset
                        type="password"
                        placeholder="Re-Password"
                      />
                    </div>
                  )}
                  <div className={styles.passLink}>
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className={`${styles.field} ${styles.btn}`}>
                    <div className={styles.btnLayer}></div>
                    <input
                      type="submit"
                      value={registered ? "Register" : "Sign In"}
                    />
                  </div>
                </form>
                {errors && (
                  <p className="errorMsg">
                    {errors[Object.keys(errors)[0]]?.message}
                  </p>
                )}
                {!registered ? (
                  <div className={styles.signupLink}>
                    <hr />
                    Not a member?
                    <p onClick={() => setRegistered(true)}>Register now</p>
                    <hr />
                  </div>
                ) : (
                  <div className={styles.signupLink}>
                    <hr />
                    Already registered?
                    <p onClick={() => setRegistered(false)}>Sign in now</p>
                    <hr />
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
