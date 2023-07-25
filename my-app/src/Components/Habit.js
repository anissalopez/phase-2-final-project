import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faSquareCheck } from '@fortawesome/free-solid-svg-icons'





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
        <td><button key={day} className="btn btn-primary" onClick={()=>handleClick(day)}>{habit[day] ? <FontAwesomeIcon icon={faSquareCheck} /> : null}</button>
        </td>
        )});

    return (
            <tr>
            <td>{habit.habit}</td> 
            {weekButtons}
            <td><button className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt}/></button></td>
            </tr>    
    )
}

export default Habit;


