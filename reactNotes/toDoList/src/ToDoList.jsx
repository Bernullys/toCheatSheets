import { useState } from "react"

function ToDoList () {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange (event) {
        setNewTask(event.target.value)
    }
    
    function addTask () {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
        }
        setNewTask("")
    }

    function deleteTask (index) {
        const updatedTasks =  tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp (index) {
        if (index > 0) {
            const updatedTasks = [...tasks]
            [updatedTasks[index], updatedTasks[index -1]] = [updatedTasks[index -1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown (index) {
        if (index > tasks.length -1) {
            const updatedTasks = [...tasks]
            [updatedTasks[index], updatedTasks[index  + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }


    return (
        <section>
            <h1>To Do List</h1>
            <input type="text" value={newTask} onChange={handleInputChange} placeholder="type what you have to do"/>
            <button onClick={addTask}>Add</button>
            <section>
                <ol>
                    {
                        tasks.map((task, index) =>
                            <li key={index}>
                                <span>{task}</span>
                                <button onClick={() => deleteTask(index)}>Delete</button>
                                <button onClick={() => moveTaskUp(index)}>👆</button>
                                <button onClick={() => moveTaskDown(index)}>👇</button>
                            </li>
                        )
                    }
                </ol>
            </section>
        </section>
    )
}

export default ToDoList