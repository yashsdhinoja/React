import './App.css';
import Todo from "./Todo.jsx";
import {useState} from "react";
function App() {
  const [task,setTask] = useState("");
  const [tasks,setTasks] = useState([]);
  let handleSubmit = () => {
    setTasks([...tasks,{text:task,completed:false}]);
  }
  let handleInput = () => {
    setTask(event.target.value);
  }
    tasks.map((item,idx) => {
      if(text === item.text){
        return {...item,completed:!item.completed}
      }
    });
  // let handleCheckBox = () => {
  // }
  return (
    <>
      <label>Enter the Task: 
        <input type="text" onChange={handleInput}/>&nbsp;
        <button onClick={handleSubmit}>Submit</button>
      </label>
      {tasks.map((item,idx) => {
        return (
          <div>
            <span>
              <input type="checkbox" onChange={handleCheckBox}/>
              <span style={{textDecoration : completed ? "line-through" : "none"}}>{item.text}</span>
            </span>
          </div>
        );
       }
      )}
      <h1>Completed Tasks</h1>
    </>
  )
}
export default App