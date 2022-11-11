import React from 'react'


function Todolist({
    toDo,
    setTodo,
    toDos,
    setTodos,
}) {
  return (
    <div className='todo-main'>
        <div className="input">
           <input 
           value={toDo} 
           onChange={(e)=>setTodo(e.target.value)} 
           type="text" 
           placeholder="🖊️ Add item..." />
           <i 
           onClick={()=>setTodos([...toDos,{id:Date.now() ,text: toDo,status:false}])} 
           className="fas fa-plus">
            </i> 
        </div>
        <div className="todos">
            { toDos.map((obj, index) =>{
                return(
        <div className="todo" key={index}>
          <div className="left">
            <input 
            onChange={(e) => {
                console.log(e.target.checked);
                console.log(obj);
                setTodos(toDos.filter(objTwo =>{
                    if(objTwo.id===obj.id){
                        objTwo.status=e.target.checked
                    } return objTwo
                }))
            }}
            value={obj.status}
            type="checkbox" 
             />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
        )})}
      </div> 
    </div>
    
  )
}

export default Todolist