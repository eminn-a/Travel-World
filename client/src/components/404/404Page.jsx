import styles from "./404.module.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section className={styles.error} id="error">
      <div className="error-text">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/404-7304110-5974976.png?f=webp"
          alt=""
        />
        <h2>
          You lost? <br></br> Go back to <Link to="/">Home</Link>
        </h2>
      </div>
    </section>
  );
};

export default Page404;
