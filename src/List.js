import { useState, useEffect } from "react";
import {  BsCheck } from "react-icons/bs";


const List = ({ todo, setTodo }) => {
    const [todoCopy, setTodoCopy] = useState([...todo]);
    const [activeButton, setActiveButton] = useState([
      "active",
      "inactive",
      "inactive",
    ]);
    const [enableStatus, setEnableStatus] = useState(true);
    useEffect(() => {
      setTodoCopy([...todo]);
    }, [todo]);
  
    const changeStatus = (e) => {
      console.log(activeButton);
      if (activeButton[1] === "active") setActiveButton([
        "active",
        "inactive",
        "inactive",
      ]);
  
      if (enableStatus === false) return;
      const changedArray = [...todo];
      let changed = changedArray.find((s) => s.id === e.id);
      changed.status = "completed";
      setTodo(changedArray);
      setTodoCopy([...todo]);
    };
    const completedSwitcher = () => {
      setEnableStatus(false);
      setTodoCopy(todo.filter((s) => s.status === "completed"));
      setActiveButton(["inactive", "inactive", "active"]);
    };
    const activeSwitcher = () => {
      setTodoCopy(todo.filter((s) => s.status === "active"));
      setActiveButton(["inactive", "active", "inactive"]);
    };
    const allSwitcher = () => {
      setEnableStatus(true);
      setTodoCopy([...todo]);
      setActiveButton(["active", "inactive", "inactive"]);
    };
  
    const clearCompleted = () => {
      setEnableStatus(true);
      setTodo(todo.filter((s) => s.status === "active"));
      setActiveButton(["active", "inactive", "inactive"]);
    };
    return (
      <div className="listWrapper">
        {todoCopy.map((s) => {
          if (s.status === "active")
            return (
              <div
                className="todoFlex"
                onClick={() => changeStatus(s)}
                key={s.id}
              >
                <div className="iconNameWrapper">
                  <BsCheck className="listCircle" />
                  <p>{s.name}</p>
                </div>
  
                <span className="line"></span>
              </div>
            );
          return (
            <div className="todoFlex" key={s.id}>
              <div className="completedIconNameWrapper">
                <BsCheck className="completedCheck" />
                <p>{s.name}</p>
              </div>
              <span className="line"></span>
            </div>
          );
        })}
        <div className="menuSwitcher">
          <span className="spanButtonsStyle ssss">
            {todoCopy.length} items left
          </span>
          <div className="menuButtons">
            <span className={activeButton[0]} onClick={allSwitcher}>
              All
            </span>
            <span className={activeButton[1]} onClick={activeSwitcher}>
              Active
            </span>
            <span className={activeButton[2]} onClick={completedSwitcher}>
              Completed
            </span>
          </div>
          <span className="spanButtonsStyle hovv" onClick={clearCompleted}>
            Clear Completed
          </span>
        </div>
      </div>
    );
  };

  export default List