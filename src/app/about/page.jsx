import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "<@>/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/11451731/pexels-photo-11451731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.img}></div>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers.</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            sed est iste saepe nemo praesentium. Laudantium unde voluptas dolor
            culpa commodi iure, ullam modi error in aspernatur corporis,
            blanditiis optio id, placeat alias ipsam hic corrupti?
            <br /> Exercitationem aut magnam veritatis, reprehenderit nobis
            dolore illo natus molestiae beatae modi et tenetur!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            sed est iste saepe nemo praesentium. Laudantium unde voluptas dolor
            culpa commodi iure, ullam modi error in aspernatur corporis,
            blanditiis optio id, placeat alias ipsam hic corrupti?
            <br />- Creative Illustrations
            <br />- Dynamic Websites
            <br />- Fast and Handy Mobile
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
