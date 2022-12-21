import styles from "./work.module.scss";
import ClientCard from "./clientcard/clientcard";
import { v4 as uuidv4 } from "uuid";
import Quote from "../quote/Quote";
import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
          <label htmlFor="industry">in</label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          >
            <option value="all">all industries</option>
            <option value="Marketing">Marketing</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Web3">Web3</option>
            <option value="ICT">ICT</option>
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
        {!formData.work ||
        (formData.work == "all" && formData.industry === "all")
          ? workElements
          : workArray
              .filter(
                (work) =>
                  work.typeofWork === formData.work ||
                  work.typeOfIndustry === formData.industry
              )
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
