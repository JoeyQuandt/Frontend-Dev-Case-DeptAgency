import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { Links, navLinks, countriesLinks, MapLinks } from "../utilis";
import { useScroll, motion } from "framer-motion";
import { useEffect } from "react";

export default function Navbar() {
  /*Menu*/
  const [menuShown, setMenuShow] = React.useState(false);
  /*Navigation bar*/
  const [hidden, setHidden] = React.useState(false);
  const { scrollY } = useScroll();

  /*Update function scroll onchange*/
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }
  useEffect(() => {
    return scrollY.onChange(() => update());
  });
  /*Handles menu state*/
  function handleClick() {
    setMenuShow((prevMenuShow) => !prevMenuShow);
  }

  return (
    <>
      <motion.nav
        className={styles.navBar}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -25 },
        }}
      >
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
      </motion.nav>
      <motion.div
        className={styles.menuShow}
        animate={menuShown ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "100%" },
        }}
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
    </>
  );
}
