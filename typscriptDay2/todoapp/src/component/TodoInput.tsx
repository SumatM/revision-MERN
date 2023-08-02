import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodos } from '../redux/todoReducer'

export const TodoInput = () => {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }

    function addTodo() {
        if (!title) {
            return alert('Please Types something to add Todo')
        }
        let todo = {
            title, status: false
        }
        dispatch(AddTodos(todo))
        setTitle("")
    }

    return (
        <div>
            <input type='text' placeholder='Enter your Task' onChange={handleOnChange} value={title} />
            <button onClick={addTodo}>Add Task</button>
        </div>
    )
}
