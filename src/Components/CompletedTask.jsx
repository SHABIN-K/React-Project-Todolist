import React from 'react'

function CompletedTask({toDos}) {
  return (
    <div className='Com-task'>
     <div>
        {toDos.map((obj, index)=>{
          if(obj.status){
            return(<div key={index}><h1>{obj.text}</h1></div>
            )
          }
          return null
         })}    
     </div>
    </div>
  )
}

export default CompletedTask