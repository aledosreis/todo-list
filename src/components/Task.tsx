import { Trash } from "phosphor-react";

import styles from "./Task.module.css";
import { useState } from "react";

export interface TaskType {
  id: number;
  task: string;
  done: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (task: TaskType) => void;
}

export function Task({ task, onDeleteTask }: TaskProps) {
  const [isDone, setIsDone] = useState(task.done);

  function toggleTaskCompletion() {
    setIsDone(!isDone);
  }

  function deleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        id={task.id.toString()}
        checked={isDone}
        onClick={toggleTaskCompletion}
      />
      <label htmlFor="task">{task.task}</label>
      <Trash size={24} onClick={deleteTask} />
    </div>
  );
}
