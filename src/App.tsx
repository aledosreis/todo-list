import rocketImg from "./assets/rocket.svg";

import { useState } from "react";

import { Task, TaskType } from "./components/Task";
import { EmptyList } from "./components/EmptyList";
import { NewTaskForm } from "./components/NewTaskForm";

import "./global.css";
import styles from "./App.module.css";

import { tasks as exampleTasks } from "./data/tasks";

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>(exampleTasks);

  function createTask(newTask: TaskType) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskToDelete: TaskType) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete.id;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <div className={styles.header}>
        <img src={rocketImg} alt="Desenho de um foguete" />
        <div>
          <span>to</span>
          <span>do</span>
        </div>
      </div>

      <div className={styles.container}>
        <NewTaskForm onCreateTask={createTask} />

        <div className={styles.taskContainer}>
          <div className={styles.info}>
            <div className={styles.created}>
              <span>Tarefas criadas</span>
              <span>0</span>
            </div>
            <div className={styles.done}>
              <span>Concluídas</span>
              <span>0</span>
            </div>
          </div>

          {tasks.length > 0 ? (
            <div className={styles.tasks}>
              {tasks.map((task) => {
                return (
                  <Task task={task} key={task.id} onDeleteTask={deleteTask} />
                );
              })}
            </div>
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
    </div>
  );
}
