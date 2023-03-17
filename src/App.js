import "./App.css";
import { useState, useEffect } from "react";
import { BsCircle, BsMoon, BsSun, BsCheck } from "react-icons/bs";
import List from './List'  


function App() {
  const [themeIcon, setThemeIcon] = useState(true);
  const [theme, setTheme] = useState("light");
  const [todo, setTodo] = useState([
    {
      name: "create todo application",
      status: "active",
      id: 1,
    },
    {
      name: "drink minimum 3L water",
      status: "active",
      id: 2,
    },
    {
      name: "run 20km",
      status: "active",
      id: 3,
    },
    {
      name: "buy vegetables",
      status: "active",
      id: 4,
    },
    {
      name: "read for 1h",
      status: "active",
      id: 5,
    },
    {
      name: "do 100 pushups",
      status: "active",
      id: 6,
    },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setNewTodo(e.target.value);
  };

  const themeSwitcher = () => {
    setThemeIcon(!themeIcon);
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const addTodo = (e) => {
    if (newTodo === "") return;
    if (e.key === "Enter" || e.type === "click") {
      const obj = {
        name: newTodo,
        status: "active",
        id: todo.length + 1,
      };
      setTodo(todo.concat(obj));
      setNewTodo("");
    }
  };

  return (
    <div className="App" id={theme}>
      <div className="header">
        <div className="name">
          <h1>TODO</h1>
          <button onClick={themeSwitcher}>
            {themeIcon ? (
              <BsMoon className="moon" />
            ) : (
              <BsSun className="sun" />
            )}
          </button>
        </div>
        <form className="input" onSubmit={(e) => e.preventDefault()}>
          <BsCircle className="circle" onClick={addTodo} />
          <input
            value={newTodo}
            onChange={handleInput}
            placeholder="Create a new todo..."
            onKeyDown={addTodo}
          />
        </form>
      </div>
      <div className="middleContainer">
        <div className="listContainer">
          <List todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
