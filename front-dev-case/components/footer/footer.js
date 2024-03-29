import styles from "./footer.module.scss";
import Image from "next/image";
import { navLinks, MapLinks } from "../utilis";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <section className={styles.footer}>
        <div className={styles.footerLinksWrapper}>
          <div className={styles.footerLinks}>
            <Image
              className={styles.navLogoWhite}
              priority
              src="/images/dept_logo_white.svg"
              alt="Logo"
              width={88}
              height={25}
            />
            {MapLinks(navLinks)}
          </div>
          <div className={styles.footerSocials}>
            <Image
              priority
              src="/images/facebook.svg"
              alt="Logo"
              width={27}
              height={27}
            />
            <Image
              priority
              src="/images/twitter.svg"
              alt="Logo"
              width={27}
              height={27}
            />
            <Image
              priority
              src="/images/instagram.svg"
              alt="Logo"
              width={27}
              height={27}
            />
          </div>
        </div>
        <span className={styles.line}></span>
        <div className={styles.companyinfo}>
          <div className={styles.companyinfoCommerce}>
            <p>Chamber of commerce: 6346101</p>
            <p>VAT: NL 8552.47.502.B01</p>
            <p>Terms and conditions</p>
          </div>
          <p className={styles.copyRight}>© 2022 Dept Agency</p>
        </div>
      </section>
      <a href="#hero" className={styles.topArrow}>
        <Image
          priority
          src="/images/arrow.svg"
          alt="Logo"
          width={18}
          height={36}
        />
        <p>Top</p>
      </a>
    </footer>
  );
}
