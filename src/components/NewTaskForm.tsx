import { PlusCircle } from "phosphor-react";
import { TaskType } from "./Task";
import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./NewTaskForm.module.css";

interface NewTaskFormProps {
  onCreateTask: (task: TaskType) => void;
}

export function NewTaskForm({ onCreateTask }: NewTaskFormProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    const newTask: TaskType = {
      id: Math.floor(Math.random() * 100 + 1), // Generate a random number between 1 and 100
      task: newTaskText,
      done: false,
    };

    onCreateTask(newTask);

    setNewTaskText("");
  }

  return (
    <form onSubmit={handleCreateTask} className={styles.newTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskTextChange}
        required
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
