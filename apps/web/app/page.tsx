"use client";

import { WebButton } from "ui";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web Next App</h1>
      <WebButton onClick={() => alert("WebButton Clicked!")} text="Web Button Component" />
    </div>
  );
}
