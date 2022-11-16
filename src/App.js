import React from 'react';
import { useState } from 'react';
import './App.css';
import CompletedTask from './Components/CompletedTask';
import Header from './Components/Header';
import RemovedTodo from './Components/RemovedTodo';
import Todolist from './Components/Todolist';



function App() {
  const [toDos,setTodos] = useState([]);
  const [toDo,setTodo] = useState('');

  const deleteTodo = (id) => {
    let dToDo = toDos.filter((objtodo) => {
      if(objtodo.id === id) {
        if(objtodo.deleted) {
          return false
        }else{
          return true
        }
      }return objtodo;
    })
    setTodos(dToDo);
  }
 


  return (
    <div className="app">
      <Header/>
      <div className="row">
       <Todolist
        toDos={toDos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        toDo={toDo}
        setTodo={setTodo}
       />
       <CompletedTask
       toDos={toDos}
       deleteTodo={deleteTodo}
       setTodos={setTodos}
       toDo={toDo}
       setTodo={setTodo}
       />
       <RemovedTodo 
       toDos={toDos}
       />
       </div>
    </div>
  );
}

export default App;