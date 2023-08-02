import React from 'react'
import { RootState } from '../store/store'
import {useSelector} from 'react-redux'
import { Todo } from '../utlit/interface'

export const TodoDisplay = () => {

 const todos : Todo[]= useSelector((s:RootState)=> s.todoReducer).value
  return (
    <div style={{margin:'auto',background:'aqua',display:"inline-block",marginTop:"25px"}}>
      <table >
        <thead style={{padding:'10px'}}>
            <th>Sr.No</th>
            <th>Task</th>
            <th>Completed</th>
        </thead>
        <tbody  style={{padding:'10px'}}>
            {todos.map ((todo,ind)=>{
                return <tr>
                    <td>{ind+1}</td>
                    <td>{todo.title}</td>
                    <td>{todo.status ? 'completed' : 'Pending'}</td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}
