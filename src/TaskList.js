import { useState } from "react";
import Review from "./review";
import Task from "./Task";
import './css/TaskList.css'


function TaskList(props){
    
    return (
        <div className="taskList">
            <ul className="content-task">
                {props.taskList.map((task, i)=> {
                    return <Task task={task} deleteTask={props.deleteTask} index={i}/>
                })}
            </ul>
            <div className="content-add-task">
                <div className="input-content">
                    <input id='taskName'/>
                    <input id='taskDate' type='Date'/>
                </div>
                <div>
                    <button className="add-task" onClick={props.addTask}> Ajouter la tache</button>           
                </div>
            </div>
        </div>
    )
}

export default TaskList