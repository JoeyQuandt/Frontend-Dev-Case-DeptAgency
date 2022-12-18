import styles from "./clientcard.module.scss";
import Image from "next/image";

export default function ClientCard(props) {
  return props.highlight ? (
    <div
      className={styles.ClientCardHighLight}
      style={props.reverseRow && { flexDirection: "row-reverse" }}
    >
      <div className={styles.Clientcard}>
        <Image
          src="/images/work/special.png"
          width={964}
          height={568}
          alt="idk"
        />
        <div className={styles.ClientcardText}>
          <p>Bol.com</p>
          <h2>A Summer island in the Netherlands</h2>
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
        <div className={styles.ClientCardArticle}>
          <h2>Microsoft</h2>
          <p>
            Tapping into Ireland’s unique gaming culture and bringing a fresh
            flavour to their Xbox social media channels
          </p>
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
        <div className={styles.ClientCardArticle}>
          <h2>O'Neill</h2>
          <p>
            Integrating existing content into O'Neills's new e-commerce platform
          </p>
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
        <div className={styles.ClientCardArticle}>
          <h2>O'Neill</h2>
          <p>
            Integrating existing content into O'Neills's new e-commerce platform
          </p>
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
      </div>
    </div>
  ) : (
    <div className={styles.Clientcard}>
      <Image src="/images/work/work.png" alt="idk" width={720} height={568} />
      <div className={styles.ClientcardText}>
        <p>Bol.com</p>
        <h2>A Summer island in the Netherlands</h2>
        <a href="/" className={styles.Readmore}>
          <Image src="/images/readmore.svg" height={25} width={25} />
          Read more
        </a>
      </div>
    </div>
  );
}
