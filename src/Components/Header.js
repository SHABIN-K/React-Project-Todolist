import React from 'react'

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dayName = days[new Date().getDay()];


function Header() {
  return (
    <div className='todo-header'>
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's {dayName} 🌝 ☕ </h2>
    </div>
  </div>
  )
}

export default Header