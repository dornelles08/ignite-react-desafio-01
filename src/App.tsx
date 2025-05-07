import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";

import "./global.css";

import { useState } from "react";
import styles from "./App.module.css";
import { EmptyList } from "./components/EmptyList/EmptyList";
import { Task } from "./components/Task/Task";

export interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "Estudar React",
      isCompleted: false,
    },
    {
      id: 2,
      content: "Estudar TypeScript",
      isCompleted: false,
    },
    {
      id: 3,
      content: "Estudar JavaScript",
      isCompleted: false,
    },
  ]);

  function handleCreateNewTask(task: string) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        content: task,
        isCompleted: false,
      },
    ]);
  }

  function handleDeleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function handleToggleTask(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.container}>
        <Form handleCreateNewTask={handleCreateNewTask} />

        <div className={styles.tasks}>
          <div className={styles.info}>
            <span className={styles.created}>
              Tarefas criadas <strong>{tasks.length}</strong>
            </span>
            <span className={styles.done}>
              Concluídas{" "}
              <strong>
                {tasks.filter((t) => t.isCompleted).length} de {tasks.length}
              </strong>
            </span>
          </div>

          <div className={styles.tasksList}>
            {tasks.length ? (
              <ul>
                {tasks.map((task) => {
                  return (
                    <Task
                      key={task.id}
                      task={task}
                      onDeleteTask={handleDeleteTask}
                      onToggleTask={handleToggleTask}
                    />
                  );
                })}
              </ul>
            ) : (
              <EmptyList />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
