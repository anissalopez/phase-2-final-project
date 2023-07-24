import React, {useState} from "react";

function Habit({ habit, updateWeekDay, weekDays}){

    function handleClick(day){
        fetch(`http://localhost:3000/habits/${habit.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({[day]: !habit[day]})
        })
        .then(resp => resp.json())
        .then(data => updateWeekDay(data))
        .catch(error => console.log(error))
    };


 const weekButtons = weekDays.map((day) => {return(
    <div key={day} className ="buttonDiv">
        <button key={day} className={habit[day] ? "checked" : null} onClick={()=>handleClick(day)}>{habit[day] ? "✔️" : null}
        </button>
    </div>)});

    return (
        <div className="container">
           <p>{habit.habit}</p> 
           {weekButtons}
        </div>

    )
}

export default Habit;


