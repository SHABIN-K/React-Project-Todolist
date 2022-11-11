import React from 'react';
import { useState } from 'react';
import './App.css';
import CompletedTask from './Components/CompletedTask';
import Header from './Components/Header';
import Todolist from './Components/Todolist';




function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')
  return (
    <div className="app">
       <Header/>
       <Todolist
        toDos={toDos}
        setTodos={setTodos}
        toDo={toDo}
        setTodo={setTodo}
       />
       <CompletedTask
       toDos={toDos}
       />
    </div>
  );
}

export default App;