

function Task (props) {
    return (
        <div>
            <li >{props.task.tache} Le: {props.task.date}  <button onClick={() => props.deleteTask(props.index)}> Supprimer</button> </li>
        </div>
    )
}

export default Task