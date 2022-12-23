import Styles from "./hero.module.scss";
import { FadeInWhenVisible } from "../utilis";

export default function Hero() {
  return (
    <section id="hero" className={Styles.hero}>
      <div className={Styles.heroText}>
        <FadeInWhenVisible>
          <p>Work</p>
          <h1>
            A selection of projects that <strong>pioneer tech</strong> and{" "}
            <strong>marketing</strong> to help brands stay ahead.
          </h1>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
