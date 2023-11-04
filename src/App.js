import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setTask(e.target.value);
      setTaskList([...taskList, { name: task, isChecked: false }]);
    }
  };

  const handleCompletedTask = (index) => {
    const newTasks = [...taskList];
    newTasks[index].isChecked = !newTasks[index].isChecked;
    setTaskList(newTasks);
  };

  const handleDelete = (targetIndex) => {
    const newTasks = taskList.filter((task, index) => index !== targetIndex);
    setTaskList(newTasks);
  };
  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnter}
      />
      {taskList.map((task, index) => (
        <div
          style={{ textDecoration: task.isChecked ? "Line-through" : "none" }}
          key={index}
        >
          {task.name}
          <input
            type="checkbox"
            checked={task.isChecked}
            onChange={() => handleCompletedTask(index)}
          />
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}
