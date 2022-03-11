import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [tasks, setTasks] = useState([
  ]);

  const handleTaskAddition = (taskTitle) =>{
    const newTask = [
      ... tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false 
      }
    ];
    setTasks(newTask);
  }

  return(
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} />
      </div>      
    </>    
  )
};

export default App;