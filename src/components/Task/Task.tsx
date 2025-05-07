import { Trash } from "@phosphor-icons/react";

import type { Task } from "../../App";
import styles from "./Task.module.css";

interface TaskProps {
  task: Task;
  onDeleteTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

export function Task({ task, onDeleteTask, onToggleTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }
  function handleToggleTask() {
    onToggleTask(task.id);
  }

  return (
    <li>
      <div className={styles.checkbox}>
        <input type="checkbox" id={task.id.toString()} onChange={handleToggleTask} />
        <label htmlFor={task.id.toString()}>{task.content}</label>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </li>
  );
}
