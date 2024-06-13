import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../../validations/loginValidation";
import styles from "./AuthModal.module.css";
import { login, create } from "../../services/authServices";
import { setUserData } from "../../utils/utils";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const AuthModal = ({ show, closeModal, setUser }) => {
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

  const loginUserMutation = useMutation({
    mutationFn: (data) => login(data.email, data.password),
    onSuccess: (user) => {
      if (user) {
        setUserData(user);
        setUser({ ...user });
        closeModal();
        reset();
      }
      setRegistered(false);
      toast.success(`Hello, ${user.email}`);
    },
  });

  const createUserMutation = useMutation({
    mutationFn: (data) => create(data.email, data.password),
    onSuccess: (user) => {
      if (user) {
        setUserData(user);
        setUser({ ...user });
        closeModal();
        reset();
      }
      setRegistered(false);
      toast.success(`Hello, ${user.email}`);
    },
  });

  const onSubmit = async (data) => {
    if (!registered) {
      loginUserMutation.mutate(data);
    } else {
      createUserMutation.mutate(data);
    }
  };

  return (
    <>
      {show ? (
        <div className={styles.modalContainer}>
          <div className={styles.wrapper}>
            <div className={styles.closeBtn}>
              <button
                onClick={() => {
                  closeModal();
                  reset();
                  setRegistered(false);
                }}
              >
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
                  {registered ? (
                    <div className={styles.field}>
                      <input
                        {...register("rePassword")}
                        type="password"
                        placeholder="Re-Password"
                      />
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
                    <p
                      onClick={() => {
                        setRegistered(true);
                        reset();
                      }}
                    >
                      Register now
                    </p>
                    <hr />
                  </div>
                ) : (
                  <div className={styles.signupLink}>
                    <hr />
                    Already registered?
                    <p
                      onClick={() => {
                        setRegistered(false);
                        reset();
                      }}
                    >
                      Sign in now
                    </p>
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
