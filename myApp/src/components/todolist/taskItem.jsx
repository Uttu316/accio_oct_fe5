import { MdEdit as EditIcon, MdDelete as DeleteIcon } from "react-icons/md";
import styles from "./todo.module.css";

const TaskItem = ({
  taskItem,
  index,
  setTaskInput,
  setCurrEdit,
  isEditMode,
  setTasks,
}) => {
  const { task, id } = taskItem;

  const onEdit = () => {
    const curreditTask = taskItem;
    curreditTask.index = index;
    setCurrEdit(curreditTask);
    setTaskInput(task);
  };

  const onDlt = () => {
    setTasks((currTasks) => currTasks.filter((item) => item.id !== id));
  };
  return (
    <div className={styles.taskItem}>
      <p className={styles.taskText}>{task}</p>
      <div className={styles.todoItemActions}>
        <button
          disabled={isEditMode}
          onClick={onEdit}
          className={styles.editBtn}
        >
          <EditIcon />
        </button>
        <button disabled={isEditMode} onClick={onDlt} className={styles.dltbtn}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
