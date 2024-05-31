import styles from "./TasksInfo.module.css";

interface TasksInfoProsp {
  totalTasks: number;
  completedTasks: number;
}

export function TasksInfo({ totalTasks, completedTasks }: TasksInfoProsp) {
  return (
    <div className={styles.info}>
      <div className={styles.status}>
        <span>Tarefas criadas</span>
        <span className={styles.countBadge}>{totalTasks}</span>
      </div>
      <div className={styles.status}>
        <span>Concluídas</span>
        <span className={styles.countBadge}>
          {totalTasks > 0 ? `${completedTasks} de ${totalTasks}` : 0}
        </span>
      </div>
    </div>
  );
}
