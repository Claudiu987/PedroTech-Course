import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const HandleChange = (event) => {
    setNewTask(event.target.value);
  };

  const changeColor = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={HandleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div style={{ color: task.completed ? "green" : "black" }}>
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}>x</button>
              <button onClick={() => changeColor(task.id)}>Complete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
