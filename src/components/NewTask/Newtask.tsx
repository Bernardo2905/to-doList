import { PlusCircle } from "phosphor-react";
import { useTask } from "../../hooks/useTask";
import { Task } from "../Task/Task";
import styles from "./NewTask.module.css"

export function NewTask() {
  const { content, setContent, handleCreateNewTask, tasks } = useTask()
  return (
    <>
      <div className={styles.containerTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className={styles.inputTask}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />

        <button
          className={styles.buttonInputTask}
          onClick={handleCreateNewTask}
        >
          Criar
          <PlusCircle size={15} color="white" />
        </button>
      </div>

      <div className={styles.titleTasks}>
        <div className={styles.titleL}>
          <h1>Tarefas criadas</h1> <span className={styles.spanL}>{tasks.length}</span>
        </div>

        <div className={styles.titleR}>
          <h1>Concluídas</h1> <span className={styles.spanR}>2 de {tasks.length}</span>
        </div>
      </div>

      <div>
        {tasks.map(task => (
          <Task key={task.id} id={task.id} content={task.content} />
        ))}
      </div>

    </>



  )
}