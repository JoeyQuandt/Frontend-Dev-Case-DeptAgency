import styles from "./clients.module.scss";
import { v4 as uuidv4 } from "uuid";
import { Companies } from "../utilis";

export default function Clients() {
  const CompaniesImages = Companies.map((company) => {
    const logo = `/images/companies/${company}.svg`;
    return (
      <img
        className={styles.companyLogo}
        src={logo}
        alt="Logo"
        key={uuidv4()}
      />
    );
  });

  return (
    <section className={styles.Clients}>
      <div className={styles.Clientstext}>
        <h2>Clients</h2>
        <p>
          We value a great working relationship with our clients above all else.
          It’s why they often come to our parties. It’s also why we’re able to
          challenge and inspire
        </p>
        <p>them to reach for the stars.</p>
      </div>
      <div className={styles.Clientsgrid}>{CompaniesImages}</div>
    </section>
  );
}
