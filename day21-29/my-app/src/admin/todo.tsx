import React, { useState } from "react";
import "./router.css";

type Todo = {
    id: number;
    task: string;
    isCompleted: boolean;
};

function ToDo() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState<string>("");

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (task.trim().length === 0) {
            alert("Please enter a value!");
            return;
        }

        const todo: Todo = {
            id: Date.now(),
            task: task,
            isCompleted: false,
        };

        setTodos([todo, ...todos]);

    };

    const handleChangeChecked = (todo: Todo) => {
        const index = todos.indexOf(todo);
        todo.isCompleted = !todo.isCompleted;
        todos.splice(index, 1, todo);
        //updatestate
        setTodos([...todos]);
    };

    const handleDelete = (id: number) => {
        const index = todos.findIndex((todo) => todo.id === id);
        //delete
        todos.splice(index, 1);
        //update
        setTodos([...todos]);
    };

    return (
        <div className="maintodo">
            <h4> Manage Tasks</h4><br/>
            <form onSubmit={handleFormSubmit} className="formtodo">
                <label> Describe task in short:</label><br/>
                <input type="text" name="task" value={task} onChange={handleInput} className="inputtodo" placeholder="Task Title"/>
                <button type="submit" className="buttontodo">Add Task</button>
            </form><br/>

            <ul className="listtodo">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                        <input className="inputtodo" type="checkbox" checked={todo.isCompleted} onChange={() => handleChangeChecked(todo)}/><br/><br/>
                        
                    </li>
                ))}
            </ul>
            <button onClick={() => handleDelete(todos.Todo)} className="buttontodo">Remove</button>
        </div>
    );
}

export default ToDo;

