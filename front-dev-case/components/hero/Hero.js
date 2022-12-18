import Styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={Styles.hero}>
      <div className={Styles.heroText}>
        <p>Work</p>
        <h1>
          A selection of projects that <strong>pioneer tech</strong> and{" "}
          <strong>marketing</strong> to help brands stay ahead.
        </h1>
      </div>
    </section>
  );
}
