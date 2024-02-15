import React from "react";
import styles from "@/styles/projet.module.css";
import Image from "next/image";

export default function ModalProject({ sary, desc }) {
  return (
    <div className={styles.sary}>
      <Image src={sary} alt={desc} />
    </div>
  );
}
