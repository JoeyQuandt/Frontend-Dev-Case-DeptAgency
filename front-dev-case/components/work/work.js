import React from "react";
import styles from "./work.module.scss";
import ClientCard from "./clientcard/clientcard";
import Quote from "../quote/quote";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { v4 as uuidv4 } from "uuid";

export default function Work(props) {
  /*Form*/
  const [formData, setFormData] = React.useState({
    industry: "",
    work: "",
  });

  const workArray = props.works;
  const [animationParent] = useAutoAnimate();

  const workElements = workArray.map((work) => {
    return (
      <ClientCard
        thumbnail={work.thumbnail.url}
        subject={work.subject}
        tagLine={work.tagline}
        highlight={work.highlight}
        news={work.highlights}
        key={uuidv4()}
      />
    );
  });
  //Add quote to workelements
  workElements.splice(12, 0, <Quote key={uuidv4()} />);

  /*handle form change*/
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <section className={styles.work}>
      <div className={styles.workSelection}>
        <div className={styles.industryTypeSelect}>
          <label htmlFor="work">in</label>
          <select
            id="work"
            name="work"
            value={formData.work}
            onChange={handleChange}
          >
            <option value="all">all industries</option>
            <option value="Retail">Retail</option>
            <option value="Strategy">Strategy</option>
            <option value="Travel">Travel</option>
            <option value="Culture">Culture</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        <div className={styles.workTypeSelect}>
          <label htmlFor="work">Show me</label>
          <select
            id="work"
            name="work"
            value={formData.work}
            onChange={handleChange}
          >
            <option value="all">all work</option>
            <option value="Retail">Retail</option>
            <option value="Strategy">Strategy</option>
            <option value="Travel">Travel</option>
            <option value="Culture">Culture</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
      </div>
      <div className={styles.workGrid} ref={animationParent}>
        {!formData.work || formData.work === "all"
          ? workElements
          : workArray
              .filter((work) => work.typeofWork === formData.work)
              .map((work) => {
                return (
                  <ClientCard
                    thumbnail={work.thumbnail.url}
                    subject={work.subject}
                    tagLine={work.tagline}
                    highlight={work.highlight}
                    news={work.highlights}
                    key={uuidv4()}
                  />
                );
              })}
      </div>
    </section>
  );
}
