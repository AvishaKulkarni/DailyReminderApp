//! cntrl+c to terminate the batch.
//!npm i react-router-dom to add some thing to About of nav bar we are using router

import { useEffect, useState } from 'react';
import './App.css';
import { AddTodo } from './MyComponents/AddTodo';
import  {Footer}  from './MyComponents/Footer';
import Header from './MyComponents/Header.js';
// import  {TodoItem}  from './MyComponents/TodoItem';
import {Todos}  from './MyComponents/Todos';
import {
  BrowserRouter as Router,
  Routes,             
  Route
}from "react-router-dom";
import { About } from './MyComponents/About';


export default function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
      // Deleting V  this way will not work in react
      // let index = todos.indexOf(todo);
      // todos.splice(index, 1);
      setTodos(todos.filter((e)=>{
        return e!==todo;
      }));
      localStorage.setItem("todos", JSON.stringify(todos));
    }

  const addTodo = (title, desc) => {
  
    let sno;
    if(todos.length === 0){
      sno = 1;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    
  }  
    const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  // dependency array here is representing that when todos change this call useeffect 
  
  return (
        <>
          
          <Router>
            <Header title="My Todos List" searchBar={false}/>
              <Routes> 
                 {/* by writting exact we tell it to match exactly and don't render by just matching it with "/"  */}
                {/* <Route exact path="/" 
                rander={() => {
                return(
                <> 
                  <AddTodo addTodo={addTodo}/>
                  <Todos todos={todos} onDelete = {onDelete}/>
                </>)
                }}
                >
                </Route>
                <Route exact path="/about">
                  <About/>
                </Route>  */}
                <Route path="/" element={
                  <>
                  <AddTodo addTodo={addTodo}/>
                  <Todos todos={todos} onDelete = {onDelete}/> 
                  </> 
                } />
                <Route path="about" element={<About />}/>
              </Routes> 
                {/* <TodoItem/> */}
            <Footer/>
          </Router> 
        </>

        );
      }