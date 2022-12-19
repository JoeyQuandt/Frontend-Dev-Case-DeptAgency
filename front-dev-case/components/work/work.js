import styles from "./work.module.scss";
import ClientCard from "./clientcard/clientcard";
import Quote from "../quote/Quote";




export default function Work() {
  return (
    <section className={styles.work}>
      <div className={styles.workSelection}>
        <div className={styles.industryTypeSelect}>
          <label htmlFor="cars">in</label>
          <select id="cars" name="carlist" form="carform">
            <option value="volvo">all industries</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className={styles.workTypeSelect}>
          <label htmlFor="cars">Show me</label>
          <select id="cars" name="carlist" form="carform">
            <option value="volvo">all work</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div className={styles.workGrid}>
        <ClientCard />
        <ClientCard />
        <ClientCard highlight={true} />
        <ClientCard />
        <ClientCard />
        <ClientCard highlight={true} reverseRow={true} />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <Quote />
        <ClientCard />
        <ClientCard />
      </div>
    </section>
  );
}
