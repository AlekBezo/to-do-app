import "./App.css";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      title: "Clean room",
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: "Go to the gym",
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: "learn javascript",
      isCompleted: false,
    },
  ]);
  const [inputIsShown, setInputIsShown] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <div id="container" className="App">
      <h1>
        To-Do List
        <i
          className="fa fa-toggle-on"
          id="btn"
          aria-hidden="true"
          onClick={() => {
            setInputIsShown((prevState) => !prevState);
          }}
        ></i>
      </h1>
      <input
        value={inputValue}
        type="text"
        placeholder="Add New Todo"
        className={!inputIsShown && "hideInput"}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            setTodos([
              ...todos,
              {
                id: Math.random(),
                title: inputValue,
                isCompleted: false,
              },
            ]);
            setInputValue("");
          }
        }}
      />
      <ul>
        {todos.map((firstMapItem) => (
          <li
            key={firstMapItem.id}
            className={firstMapItem.isCompleted ? "completed el" : "el"}
            onClick={(e) => {
              e.stopPropagation();
              setTodos(
                todos.map((todo) => {
                  return todo.id === firstMapItem.id
                    ? {
                        id: todo.id,
                        title: todo.title,
                        isCompleted: !todo.isCompleted,
                      }
                    : todo;
                })
              );
            }}
          >
            <span
              className="trash"
              onClick={(e) => {
                e.stopPropagation();
                setTodos(todos.filter((item) => item.id !== firstMapItem.id));
              }}
            >
              <i className="fa fa-trash"></i>
            </span>{" "}
            {firstMapItem.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
