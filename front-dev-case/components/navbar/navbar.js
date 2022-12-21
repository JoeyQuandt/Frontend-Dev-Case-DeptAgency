import { v4 as uuidv4 } from "uuid";
import styles from "./navbar.module.scss";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const [menuShown, setMenuShow] = React.useState(false);

  /*Links menu navbar*/
  const Links = [
    "home",
    "work",
    "culture",
    "services",
    "partners",
    "stories",
    "careers",
    "events",
    "contact",
  ];
  /*Links home navbar*/
  const navLinks = [
    "work",
    "culture",
    "services",
    "insights",
    "careers",
    "contact",
  ];
  /*Links countries*/
  const countriesLinks = [
    "global",
    "nederland",
    "united states",
    "ireland",
    "united kingdom",
    "deutschland",
    "schweiz",
  ];

  function MapLinks(links) {
    return links.map((link) => {
      return (
        <Link
          className="link link--bar"
          href={`/${link != "home" ? link : ""}`}
          key={uuidv4()}
        >
          {link}
        </Link>
      );
    });
  }

  function handleClick() {
    setMenuShow((prevMenuShow) => !prevMenuShow);
  }

  const menuAnimation = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.navLogo}>
        <Link href="/">
          <Image
            className={styles.navLogoWhite}
            priority
            src="/images/dept_logo_white.svg"
            alt="Logo"
            width={88}
            height={25}
          />
          <Image
            className={styles.navLogoBlack}
            priority
            src="/images/dept_logo_black.svg"
            alt="Logo"
            width={52}
            height={15}
          />
        </Link>
      </div>
      <div className={styles.navbarDesktop}>
        <div className={styles.navbarLinks}>{MapLinks(navLinks)}</div>
        <button onClick={handleClick}>
          <Image
            priority
            src="/images/hamburger.svg"
            alt="Logo"
            width={50}
            height={50}
          />
        </button>
      </div>
      <button className={styles.mobileHamburger} onClick={handleClick}>
        Menu
      </button>
      <motion.div
        className={styles.menuShow}
        animate={menuShown ? "open" : "closed"}
        variants={menuAnimation}
      >
        <div className={styles.menuLogoClose}>
          <div className={styles.menuLogo}>
            <Link href="/">
              <Image
                priority
                src="/images/dept_logo_white.svg"
                alt="Logo"
                width={88}
                height={25}
              />
            </Link>
          </div>
          <button onClick={handleClick}>
            <Image src="/images/cross.svg" alt="cross" width={25} height={25} />
          </button>
        </div>
        <div className={styles.menuLinks}>
          {MapLinks(Links)}
          <div className={styles.countrieLinks}>
            <h2>Landen</h2>
            {MapLinks(countriesLinks)}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
