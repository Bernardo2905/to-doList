import { useState } from "react"
import { v4 } from "uuid"

interface TasksProps {
  id: string
  content: string
  line: boolean
}

export function useTask() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [content, setContent] = useState('')



  function handleCreateNewTask() {
    //Vai pegar o valor do input e adicionar no array

    const data = {
      id: v4(),
      content,
      line: false
    }

    setTasks([...tasks, data])
    console.log(tasks)
  }

  function handleDeleteTask(id: string) {

    const deleteTask = tasks.filter(task => task.id !== id)

    setTasks(deleteTask)
  }

  return {
    handleCreateNewTask,
    handleDeleteTask,
    tasks,
    content,
    setContent,
  }
}


// function handleUpdateTask(id: string) {
//   //Pelo id vai atualizar o elemento e riscar o texto

//    const filterTask: any = tasks.find(task => task.id === id)
//    const newFormatTask = {
//      ...filterTask,
//      line: !filterTask.line
//    }
//    const deleteTask = tasks.filter(task => task.id !== id)
//    const total = [...deleteTask, newFormatTask]

//    console.log(filterTask)
//   console.log(tasks)

//    setTasks(total)
// }