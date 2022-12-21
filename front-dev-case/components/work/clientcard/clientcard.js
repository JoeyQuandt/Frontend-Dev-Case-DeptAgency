import styles from "./clientcard.module.scss";
import { v4 as uuidv4 } from "uuid";
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
            <img src="/images/readmore.svg" alt="readmore" />
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
              key={uuidv4()}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div className={styles.Clientcard}>
      <Image
        src={props.thumbnail}
        alt="thumbnail"
        width={720}
        height={568}
        quality={100}
      />
      <div className={styles.ClientcardText}>
        <p>{props.subject}</p>
        <h2>{props.tagLine}</h2>
        <a href="/" className={styles.Readmore}>
          <img src="/images/readmore.svg" alt="readmore" />
          Read more
        </a>
      </div>
    </div>
  );
}
