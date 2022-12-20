import styles from "./clients.module.scss";
import Image from "next/image";

export default function Clients() {
  const Companies = [
    "google",
    "levis",
    "spotify",
    "patagonia",
    "adyen",
    "audi",
    "tesla",
    "asos",
    "triumph",
    "netflix",
    "takeaway",
    "fujitsu",
  ];

  const CompaniesImages = Companies.map((company) => {
    const logo = `/images/companies/${company}.svg`;
    return <img className={styles.companyLogo} src={logo} alt="Logo" />;
  });

  return (
    <section className={styles.Clients}>
      <div className={styles.Clientstext}>
        <h2>Clients</h2>
        <p>
          We value a great working relationship with our clients above all else.
          It’s why they often come to our parties. It’s also why we’re able to
          challenge and inspire them to reach for the stars.
        </p>
      </div>
      <div className={styles.Clientsgrid}>{CompaniesImages}</div>
    </section>
  );
}
