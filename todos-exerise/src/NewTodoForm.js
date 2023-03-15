import {React, useState} from "react";
import {v4 as uuid} from "uuid";

const NewTodoForm = ({createTodo}) => {
    //as always, we useState
    const[todoTask, setTodoTask] = useState('');
    //one text input for the task to created
    //we need to handle change and handle submit
    const handleChange = (e) => {
        setTodoTask(e.target.value)
    }
    //a view function to handleSubmit
    const handleSubmit = (e) => {
        //prevent the form resetting
        e.preventDefault();
        createTodo({todoTask, id: uuid()})
        setTodoTask('');
    }

    //we need a form with submit, delete button
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="newTask"> New Task:</label>
                <input 
                    type = "text"
                    id = "newTask"
                    name = "newTask"
                    value = {todoTask}
                    onChange = {handleChange}
                />
                <button> Create a new task!</button>
            </form>

            
        </div>
    )
}

export default NewTodoForm;