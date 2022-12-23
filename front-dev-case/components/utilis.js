import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

/*Navbar links*/
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
/*Companies svg*/
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

/*Mapping over link array*/
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
/*Fade when visible*/
function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 5 },
      }}
    >
      {children}
    </motion.div>
  );
}

export {
  Links,
  navLinks,
  countriesLinks,
  Companies,
  MapLinks,
  FadeInWhenVisible,
};
