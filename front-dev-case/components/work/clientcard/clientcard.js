import styles from "./clientcard.module.scss";
import Image from "next/image";
import Article from "./article";

export default function ClientCard(props) {
  return props.highlight ? (
    <div
      className={styles.ClientCardHighLight}
      style={props.reverseRow && { flexDirection: "row-reverse" }}
    >
      <div className={styles.Clientcard}>
        <Image
          src={props.thumbnail}
          width={964}
          height={568}
          alt={props.subject}
          quality={100}
        />
        <div className={styles.ClientcardText}>
          <p>{props.subject}</p>
          <h2>{props.tagLine}</h2>
          <a href="/" className={styles.Readmore}>
            <Image
              src="/images/readmore.svg"
              height={25}
              width={25}
              alt="readmore"
            />
            Read more
          </a>
        </div>
      </div>
      <div className={styles.ClientCardNote}>
        {props.news.map((highlight) => {
          return (
            <Article
              title={highlight.title}
              description={highlight.description}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div className={styles.Clientcard}>
      <Image
        src={props.thumbnail}
        alt="idk"
        width={720}
        height={568}
        quality={100}
      />
      <div className={styles.ClientcardText}>
        <p>{props.subject}</p>
        <h2>{props.tagLine}</h2>
        <a href="/" className={styles.Readmore}>
          <Image src="/images/readmore.svg" height={25} width={25} />
          Read more
        </a>
      </div>
    </div>
  );
}
