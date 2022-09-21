import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./data/Task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task){
    setTasks([...tasks,{
      title: task.title,
      id:tasks.length,
      description: task.description
    }])
  }

  function deleteCard (TaskId){

  }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteCard={deleteCard}/>
    </>
  );
}

export default App;
