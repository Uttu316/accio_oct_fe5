import { useState } from "react";
import TaskForm from "./taskForm";
import TasksList from "./tasksList";
import styles from "./todo.module.css";

const TodoList = () => {
  const [taskInput, setTaskInput] = useState(""); // store userinput
  const [tasks, setTasks] = useState([]); // store tasks
  const [currEdit, setCurrEdit] = useState(null); // store current edit item

  const isEditMode = currEdit !== null;

  const onSave = () => {
    if (taskInput.length < 3) return;
    const currPos = currEdit.index;
    setTasks((currTasks) => {
      currTasks[currPos] = {
        ...currEdit,
        task: taskInput,
      };
      return currTasks;
    });
    setTaskInput("");
    setCurrEdit(null);
  };

  return (
    <div className={styles.todoContainer}>
      <TaskForm
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        setTasks={setTasks}
        isEditMode={isEditMode}
        onSave={onSave}
      />
      <TasksList
        isEditMode={isEditMode}
        setCurrEdit={setCurrEdit}
        tasks={tasks}
        setTaskInput={setTaskInput}
        setTasks={setTasks}
      />
    </div>
  );
};
export default TodoList;
