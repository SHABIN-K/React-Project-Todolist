import React from 'react'

function CompletedTask({toDos}) {
  return (
    <div>
        {toDos.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null
         })}
    </div>
  )
}

export default CompletedTask