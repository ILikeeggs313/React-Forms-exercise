import React from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    //we start with an empty array
    const [todos, setTodos] = useState([]);

    const createNewTodo = (newTodo) =>{
        setTodos(todos => [...todos, newTodo]);
    }
    //delete a task by id
    const remove = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    //finally, we need to map the components of the newtodoform
    const todoMap = todos.map(todo => {
        <Todo 
            remove = {remove}
            key = {todo.id}
            id = {todo.id}
            task = {todo.task}
            
        />
    })
    return(
        <div>
            <NewTodoForm createTodo={create} />
            {todoMap}
        </div>
    )
}

export default TodoList;
