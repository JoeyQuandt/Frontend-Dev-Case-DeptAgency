import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const [menuShown, setMenuShow] = React.useState(false);
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

  const navLinks = [
    "work",
    "culture",
    "services",
    "insights",
    "careers",
    "contact",
  ];

  const countriesLinks = [
    "global",
    "nederland",
    "united states",
    "ireland",
    "united kingdom",
    "deutschland",
    "schweiz",
  ];

  const LinkElements = Links.map((link) => {
    return (
      <Link href="/" key={Links.indexOf(link)}>
        {link}
      </Link>
    );
  });

  const navElements = navLinks.map((link) => {
    return (
      <Link href="/" key={navLinks.indexOf(link)}>
        {link}
      </Link>
    );
  });

  const countrieElements = countriesLinks.map((link) => {
    return (
      <Link href="/" key={countriesLinks.indexOf(link)}>
        {link}
      </Link>
    );
  });

  function handleClick() {
    setMenuShow((prevMenuShow) => !prevMenuShow);
  }

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
        <div className={styles.navbarLinks}>{navElements}</div>
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
      <div
        className={styles.menuShow}
        style={menuShown ? { display: "block" } : { display: "none" }}
      >
        <div className={styles.menuLogoClose}>
          <div className={styles.menuLogo}>
            <Link href="/">
              <Image
                priority
                src="/images/dept_logo_white.svg"
                alt="Logo"
                width={88.04}
                height={25}
              />
            </Link>
          </div>
          <button onClick={handleClick}>
            <Image src="/images/cross.svg" alt="cross" width={25} height={25} />
          </button>
        </div>
        <div className={styles.menuLinks}>
          {LinkElements}
          <div className={styles.countrieLinks}>
            <h2>Landen</h2>
            {countrieElements}
          </div>
        </div>
      </div>
    </nav>
  );
}
