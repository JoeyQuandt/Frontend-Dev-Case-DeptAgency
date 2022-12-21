import styles from "./clientcard.module.scss";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import Image from "next/image";
import Article from "./article";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

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
        <FadeInWhenVisible>
          <div className={styles.ClientcardText}>
            <p>{props.subject}</p>
            <h2>{props.tagLine}</h2>
            <a href="/" className={styles.Readmore}>
              <img src="/images/readmore.svg" alt="readmore" />
              Read more
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
      <div className={styles.ClientCardNote}>
        <FadeInWhenVisible>
          {props.news.map((highlight) => {
            return (
              <Article
                title={highlight.title}
                description={highlight.description}
                key={uuidv4()}
              />
            );
          })}
        </FadeInWhenVisible>
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
      <FadeInWhenVisible>
        <div className={styles.ClientcardText}>
          <p>{props.subject}</p>
          <h2>{props.tagLine}</h2>
          <a href="/" className={styles.Readmore}>
            <img src="/images/readmore.svg" alt="readmore" />
            Read more
          </a>
        </div>
      </FadeInWhenVisible>
    </div>
  );
}
