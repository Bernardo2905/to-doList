import { Trash } from "phosphor-react"
import React, { FormEvent } from "react";
import styles from "./Task.module.css"
import { } from 'react';
import { useTask } from "../../hooks/useTask";


interface TaskProps {
  id: string;
  content: string;
  // line: boolean;
}


export function Task({ id, content }: TaskProps) {
  const { handleDeleteTask } = useTask()
  return (
    <div className={styles.boxTask}>
      <input type="checkbox" className={styles.buttonComplete} />

      <p className={styles.task}>{content}</p>



      <button type="button" className={styles.deleteTask} onClick={() => handleDeleteTask(id)} >
        <Trash size={24} color="#808080" className={styles.trash} />
      </button>
    </div>
  )
}
