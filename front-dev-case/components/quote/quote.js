import styles from "./quote.module.scss";

export default function Quote() {
  return (
    <section className={styles.Quote}>
      <div className={styles.QuoteText}>
        <h2>
          “Dept helped us tell our story through a bold new identity and a
          robust online experience. To the tone of 60% growth in online bookings
          in just one month””
        </h2>
        <p>Mattijs ten drink - Ceo, Transavia</p>
      </div>
    </section>
  );
}
