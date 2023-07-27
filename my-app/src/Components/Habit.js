import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { format } from "date-fns";

function Habit({ habit, updateCompletedHabits, weekDays, removeHabit, refs }) {

  const currentDay = new Date();


  function handleClick(index) {

    console.log(refs.current[index])
    if(habit[refs.current[index]]){
        alert("this habit has been completed!")
    }



    if (refs.current[index].getDay() <= currentDay.getDay() && refs.current[index].getDay() > 0){
        
        
        const clickedDate = refs.current[index]
     

        const updateDays = {
            [clickedDate]: true};

        fetch(`http://localhost:3000/habits/${habit.id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify(updateDays)
        })
          .then(resp => resp.json())
          .then(data => updateCompletedHabits(data))
      }

      else{
        alert("You can not complete a habit for a future day")
      }
    }

    
     
  


  function handleDelete() {
    fetch(`http://localhost:3000/habits/${habit.id}`, {
      method: 'DELETE',
    })
      .then(resp => resp.json())
      .then(() => removeHabit(habit.id))
  }


  const weekButtons = weekDays.map((day, index) => {


    
    const completed = habit[refs.current[index]] ? <FontAwesomeIcon icon={faCheck} /> : null
    return (
      <td key={day}>
        <button className={habit[refs.current[index]] ? "btn btn-success" : "btn btn-outline-primary custom"} onClick={() => handleClick(index)}>{completed}</button>
 
      </td>)
  });

  return (
    <tr>
      <th scope="row">{habit.habit}</th>
      {weekButtons}
      <td><button onClick={handleDelete} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
    </tr>
  )
}

export default Habit;
