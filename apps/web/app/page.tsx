"use client";

import { AppButton, NativeButton } from "ui";
// import { WebButton } from "ui";
import styles from "../styles/index.module.css";
import { useMyCustomHook } from "models";
import { isValidArray } from "myutils";

export default function Web() {
  const data = useMyCustomHook("Heyyy");
  console.log("data>>>", data)
  const dataArray = []
  console.log(isValidArray(dataArray, true))
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <div className={styles.content}>

          <h1 className={styles.headerTitle}>Employee Investment Programssss</h1>
          <p className={styles.headerDescription}>For over 30 years, Apollo has offered industry-leading alternative investments to some of the most sophisticated investors in the world. We are proud to offer eligible employees the opportunity to invest in Apollo products side by side with those investors, often on a no-fee, no-carry basis.</p>
        </div>
      </div>
      <div className={styles.bodyContent}>
        <AppButton primary={true} label='Web Button - small' size='small' />
        <AppButton primary={true} label='Web Button - medium' size='medium' />
        <AppButton primary={true} label='Web Button - large' size='large' />

        <NativeButton text='Native Button' onClick={() => { alert("Clicked") }} />
      </div>

    </div >
  );
}
