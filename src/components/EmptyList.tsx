import clipboardImg from "../assets/clipboard.svg";

import styles from "./EmptyList.module.css";

export function EmptyList() {
  return (
    <div className={styles.empty}>
      <img src={clipboardImg} alt="clipboard image" />
      <div className={styles.info}>
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
