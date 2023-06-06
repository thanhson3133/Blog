import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Tsonn right hand. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          className={styles.icon}
          width={15}
          height={15}
          alt="TS Dev Facebook"
        />
        <Image
          src="/2.png"
          className={styles.icon}
          width={15}
          height={15}
          alt="TS Dev Instagram"
        />
        <Image
          src="/3.png"
          className={styles.icon}
          width={15}
          height={15}
          alt="TS Dev Twitter"
        />
        <Image
          src="/4.png"
          className={styles.icon}
          width={15}
          height={15}
          alt="TS Dev Youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
