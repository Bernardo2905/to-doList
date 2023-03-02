import { Rocket } from "phosphor-react";
import styles from "./Header.module.css"

export function Header() {
  return (
    <div className={styles.header}>
      <Rocket size={50} color="#4EA8DE" className={styles.icon} />
      <h1>
        <span className={styles.titleSpan}>To</span>Do
      </h1>

    </div>
  )
}



//cor do header #0D0D0D