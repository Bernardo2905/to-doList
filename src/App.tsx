import { useState } from "react";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/Newtask";
import styles from "./styles/App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.pageMain}>
        <div className={styles.containerMain}>
          <NewTask />
        </div>
      </div>


    </div>
  )
}

