import { PlusCircle } from "phosphor-react";
import rocketImg from "./assets/rocket.svg";

import { Task, TaskType } from "./components/Task";
import { useState } from "react";
import { EmptyList } from "./components/EmptyList";

import "./global.css";
import styles from "./App.module.css";

const exampleTasks: TaskType[] = [
  {
    id: 1,
    task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: false,
  },
  {
    id: 2,
    task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: true,
  },
];

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>(exampleTasks);

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
        <form className={styles.newTask}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar
            <PlusCircle size={16} weight="bold" />
          </button>
        </form>

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
