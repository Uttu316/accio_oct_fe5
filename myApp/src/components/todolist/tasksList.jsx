import TaskItem from "./taskItem";
import styles from "./todo.module.css";

const TasksList = ({
  tasks,
  setTasks,
  setCurrEdit,
  setTaskInput,
  isEditMode,
}) => {
  const isEmpty = tasks.length === 0;
  return (
    <div className={styles.tasksList}>
      {isEmpty && <div className={styles.empty}>Task List is Empty</div>}

      {!isEmpty &&
        tasks.map((item, index) => (
          <TaskItem
            key={item.id}
            setTasks={setTasks}
            isEditMode={isEditMode}
            setTaskInput={setTaskInput}
            index={index}
            taskItem={item}
            setCurrEdit={setCurrEdit}
          />
        ))}
    </div>
  );
};
export default TasksList;
