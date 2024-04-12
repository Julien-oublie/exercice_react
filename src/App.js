import logo from './logo.svg';
import Review from './review';
import TaskList from './TaskList';
import { useState } from 'react';
import './css/App.css'

function App() {


  const [taskList, setTasklist] = useState([
    {
        tache: 'jouer',
        date: '2021-04-10'
    },
    {
        tache: 'jouer',
        date: '2021-04-10'
    },
    {
        tache: 'jouer',
        date: '2021-04-10'
    },
  ])

  function addTask() {
    const taskName = document.getElementById('taskName')
    const taskDate = document.getElementById('taskDate')

    const taskObject = {
        tache: taskName.value,
        date: taskDate.value
    }
    
    setTasklist([...taskList, taskObject])
  }
  
  function deleteTask(indexTodelete) {
    setTasklist(taskList.filter((element, index) =>  index !== indexTodelete))
  }

  return (
    <div className="App">
      <TaskList taskList={taskList} addTask={addTask}  deleteTask={deleteTask} />
    </div>
  );
}

export default App;
