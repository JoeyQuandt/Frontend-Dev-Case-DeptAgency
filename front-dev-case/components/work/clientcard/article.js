import styles from "./clientcard.module.scss";
import Image from "next/image";

export default function Article(props) {
  return (
    <div className={styles.ClientCardArticle}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href="/" className={styles.Readmore}>
        <Image
          src="/images/readmore.svg"
          height={25}
          width={25}
          alt="readmore"
        />
        Read more
      </a>
      <span className={styles.ClientCardNoteLine}></span>
    </div>
  );
}
