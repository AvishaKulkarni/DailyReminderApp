import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            {/* if we write {onDelete(todo)} it will render everytime because of "function calling" */}
            {/* onClick={ () => {onDelete(todo)}} but if we write it inside an arrow function we are 
            "passing that function" and it will act only when we click on the button */}
            <button className="btn btn-sm btn-danger" onClick={ () => {onDelete(todo)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
