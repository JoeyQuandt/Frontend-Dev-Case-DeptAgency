import styles from "./form.module.scss";

export default function Form() {
  return (
    <section className={styles.FormSection}>
      <h2>Question? We are here to help!</h2>
      <form>
        <div className={styles.FormNameEmail}>
          <div className={styles.FormItem}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.FormItem}>
            <label htmlFor="last">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <div className={styles.FormItem}>
          <label htmlFor="w3review">Message</label>
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
