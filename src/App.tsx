import { Header } from "./Header";
import { Task } from "./Task";
import { TaskInput } from "./TaskInput";
import styles from './App.module.css';
import { useState } from "react";
import { TaskHeader } from "./TaskHeader";
import { NoTask } from "./NoTask";

export interface task {
  id: string;
  text: string;
  completed: boolean;
}

export function App() {
  const taskListFromLocalStorage: task[] = JSON.parse(localStorage.getItem('taskList') || '[]');
  let count = 0;
  const [tasks, setTasks] = useState(taskListFromLocalStorage);
  const [tasksAmount, setTaskAmount] = useState(tasks?.length ?? 0);
  tasks.map((task) => {

    task.completed ? count++ : count;

  });
  const [tasksCompleted, setTaskCompleted] = useState(count);


  function onHandleDelete(id: string, checked: boolean) {
    const newList = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(newList);
    setTaskAmount(newList.length);
    setTaskCompleted((actualValue) => checked ? actualValue - 1 : actualValue);
    localStorage.setItem('taskList', JSON.stringify(newList));
  }

  function handleTasksCompleted(id: string, checked: boolean) {
    const newList = tasks.map((task) => {
      if (task.id !== id) {
        return task
      } else {
        return {
          ...task,
          completed: checked
        }
      }
    })
    setTaskCompleted((actualValue) => checked ? actualValue + 1 : actualValue - 1);
    localStorage.setItem('taskList', JSON.stringify(newList));
  }

  function handleAddNewTask({ id, text, completed }: task) {
    const newList = [...tasks, { id, text, completed }];
    setTasks(newList);
    setTaskAmount(newList.length);
    localStorage.setItem('taskList', JSON.stringify(newList));
  }

  return (
    <>
      <Header />
      <TaskInput handleAddNewTask={handleAddNewTask} />
      <main className={styles.main}>
        <TaskHeader tasksAmount={tasksAmount} tasksCompleted={tasksCompleted} />
        {tasks.length > 0 &&
          tasks.map((task) => <Task key={task.id} {...task} onHandleDelete={onHandleDelete} onHandleTaskChecked={handleTasksCompleted} />)
        }
        {tasks.length <= 0 &&
          <NoTask />
        }
      </main>
    </>
  )
}