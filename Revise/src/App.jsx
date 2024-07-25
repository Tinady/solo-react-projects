import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [item, setItem]= useState("")
  const [todos, setTodos]= useState([])


  function handleSubmit(e){
     e.preventDefault()
     setTodos((currentTodos)=>{
      return[
        ...currentTodos, {id:crypto.randomUUID(), title:item, completed:false}
      ]
     })

     setItem("")
  }

  function toggletodo(id, completed){
    setTodos((currentTodos)=>{
         
    })
  }

  return (
    <>
     
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={item} onChange={e=>setItem(e.target.value)}  type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1>Todo List</h1>
      <ul className="list">
        {todos.map((todo)=>{return( <li key={todo.id}> 
  <label>
    <input type="checkbox" checked={todo.completed} onChange={toggletodo(todo.id, todo.completed)} />
    {todo.title}
  </label>
  <button className="btn btn-danger">Delete</button>
</li>)
 
        })}
        
      </ul>
    </>
  );
};

export default App;
