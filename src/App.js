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

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnter}
      />
      {taskList.map((task, index) => (
        <div key={index}>
          {task.isChecked} - {task.name}
        </div>
      ))}
    </>
  );
}
