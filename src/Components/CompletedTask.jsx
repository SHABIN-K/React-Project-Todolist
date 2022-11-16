import React from 'react'

function CompletedTask({
  toDo,
  setTodo,
  toDos,
  deleteTodo,
  setTodos,
}) {
  return (
    <div className='todo-main'>
       <h1>Completed Task</h1>
     <div className='todo-form'>
     <div className="todos">
        {toDos.map((obj, index)=>{
          if(obj.status){
            return(<div className='todo' key={index}>
              <div className="left">
              <p>{obj.text}</p>
              </div>
              <div className="right">
            <i onClick={()=>setTodos([...toDos,{id:Date.now() ,text: toDo, status:false}])} className="fas fa-times"></i>
          </div>
        </div>
            )
          }
          return null
         })} 
       </div>   
     </div>
    </div>
  )
}

export default CompletedTask