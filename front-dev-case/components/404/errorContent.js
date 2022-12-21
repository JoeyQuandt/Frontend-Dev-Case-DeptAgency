import Link from "next/link";
import styles from "./404.style.module.scss";

export default function ErrorContent() {
  return (
    <section className={styles.ErrorContent}>
      <div className={styles.text}>
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link href="/">Go Back Home</Link>
      </div>
    </section>
  );
}
