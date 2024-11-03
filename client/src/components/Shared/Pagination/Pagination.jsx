import styles from "./PaginationStyles.module.css";

export default function Pagination(number) {
  return (
    <>
      <div className={styles.pagination}>
        <a href="#">
          <i className="fa-solid fa-chevron-left"></i>
        </a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">
          <i className="fa-solid fa-chevron-right"></i>
        </a>
      </div>
    </>
  );
}
