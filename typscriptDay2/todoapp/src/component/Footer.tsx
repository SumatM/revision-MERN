import { useEffect, useState } from "react"
import { RootState } from "../store/store"
import { useSelector } from 'react-redux'
import { Todo } from "../utlit/interface"

export const Footer = () => {
    const todos: Todo[] = useSelector((s: RootState) => s.todoReducer).value
    let [totalcompetedTodos, setTotalCompletedTodos] = useState(0)

    useEffect(() => {
        let competedTodocount = 0;
        todos.filter((todo) => {
            if (todo.status) {
                competedTodocount++;
            }
        })
        setTotalCompletedTodos(competedTodocount);
    }, [])


    return (
        <div>
            <h1>Footer</h1>
            <div>
                <h3>Total:{todos.length}</h3>
                <h3>competed:{totalcompetedTodos}</h3>
                <h3>Pending : {todos.length - totalcompetedTodos}</h3>
            </div>
        </div>
    )
}
