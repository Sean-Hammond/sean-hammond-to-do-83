export const Task = ({ taskItem, taskIndex, deleteTask }) => {
  console.log("taskItem:", taskItem);
  console.log("taskIndex:", taskIndex);
  return (
    <div>
      {taskItem}
      <button
        onClick={() => {
          deleteTask(taskIndex);
        }}
      >
        X
      </button>
    </div>
  );
};
