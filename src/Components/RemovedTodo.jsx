import React from 'react'

function RemovedTodo({
  toDo,
  setTodo,
  toDos,
  deleteTodo,
  setTodos,
}) {
  return (
    <div className='todo-main'>
       <h1>Removed Task</h1>
       <div className="todo-from">
        <div className="todos">
          {toDos.map((obj,index,text,checked,deleted) =>{
            if (!checked && !deleted) return null;
            if (!deleted) return null;
            return(
              <div className="todo" key={index}>
                <div className="left">
                  <p>{obj.text}</p>
                </div>
              </div>
            )
          })}
        </div>
       </div>
    </div>
  )
}

export default RemovedTodo