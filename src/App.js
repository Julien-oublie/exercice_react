import logo from './logo.svg';
import Review from './review';
import TaskList from './TaskList';
import { useState } from 'react';
import React, { useEffect } from 'react';
import './css/App.css'

function App() {


  const [taskList, setTasklist] = useState([
    {
        tache: 'jouer',
        date: '2021-04-10'
    },
    {
        tache: 'Mr chaouche en voiture',
        date: '2021-04-10'
    },
    {
        tache: 'prier',
        date: '2021-04-10'
    },
  ])

  const [saveList, setSaveList] = useState([])


  useEffect(() => {
    setSaveList(taskList)
  }, []);
  
  function deleteTask(indexTodelete) {
    setTasklist(taskList.filter((element, index) =>  index !== indexTodelete))
    setSaveList(taskList)
  }
  
  
  function addTask() {
    const taskName = document.getElementById('taskName')
    const taskDate = document.getElementById('taskDate')

    const taskObject = {
        tache: taskName.value,
        date: taskDate.value
    }
    
    setTasklist([...taskList, taskObject])
    setSaveList([...taskList, taskObject])
  }


  function search(value) {
    const searchTask = saveList.filter((element) => element.tache.toLowerCase().includes(value.toLowerCase()))
    if(searchTask){
      setTasklist([...searchTask])
    }
  }

  return (
    <div className="App">
      <TaskList taskList={taskList} addTask={addTask} search={search} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
