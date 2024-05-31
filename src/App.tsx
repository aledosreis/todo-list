import rocketImg from "./assets/rocket.svg";

import { useState } from "react";

import { Task, TaskType } from "./components/Task";
import { EmptyList } from "./components/EmptyList";
import { NewTaskForm } from "./components/NewTaskForm";

import "./global.css";
import styles from "./App.module.css";

import { tasks as exampleTasks } from "./data/tasks";
import { TasksInfo } from "./components/TasksInfo";

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>(exampleTasks);

  function createTask(newTask: TaskType) {
    setTasks([...tasks, newTask]);
  }

  function handleToggleCompletion(taskToChange: TaskType) {
    const updatedTasks = [...tasks];
    const taskToChangeIndex = updatedTasks.findIndex(
      (task) => task.id === taskToChange.id
    );
    updatedTasks[taskToChangeIndex]["done"] =
      !updatedTasks[taskToChangeIndex]["done"];

    setTasks(updatedTasks);
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
          <TasksInfo
            totalTasks={tasks.length}
            completedTasks={tasks.filter((task) => task.done === true).length}
          />

          {tasks.length > 0 ? (
            <div className={styles.tasks}>
              {tasks.map((task) => {
                return (
                  <Task
                    task={task}
                    key={task.id}
                    onDeleteTask={deleteTask}
                    onToggleTaskCompletion={handleToggleCompletion}
                  />
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
