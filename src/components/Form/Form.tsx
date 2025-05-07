import { PlusCircle } from "@phosphor-icons/react";
import { useState, type FormEvent } from "react";

import styles from "./Form.module.css";

interface FormaProps {
  handleCreateNewTask: (task: string) => void;
}

export function Form({ handleCreateNewTask }: FormaProps) {
  const [task, setTask] = useState("");

  function createNewTask(event: FormEvent) {
    event.preventDefault();

    handleCreateNewTask(task);

    setTask("");
  }

  function handleChangeTask(event: React.ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  return (
    <form onSubmit={createNewTask} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={handleChangeTask}
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
