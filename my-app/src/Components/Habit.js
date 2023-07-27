import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { format } from "date-fns";

function Habit({ habit, updateCompletedHabits, weekDays, removeHabit, refs }) {

  const currentDay = new Date();
  const [completedDays, setComplete] = useState([]);




  function handleClick(index) {

    
    const convertedDates = habit.dates.map((day) => {
        try {
          return format((new Date(day)), "MM dd")
        } catch (error) {
          console.error("Error parsing date:", day);
          return null;
        }
      });

    

    
  
    if (convertedDates.includes(format((refs.current[index]), "MM dd"))) {
      alert("You have already completed this habit for the selected day.");
    } else {
      if (refs.current[index].getDay() <= currentDay.getDay() && refs.current[index].getDay() > 0) {
        const clickedDate = refs.current[index]
        setComplete([...completedDays, clickedDate]);

        const updateDays = { dates: [...completedDays, clickedDate] };

        fetch(`http://localhost:3000/habits/${habit.id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify(updateDays)
        })
          .then(resp => resp.json())
          .then((data) => {updateCompletedHabits(data)})
      }else{
        alert("You can not check off a future habit");
      }
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

    const date = refs.current[index];
    const completedDate = date
    const isCompleted = completedDays.includes(completedDate);
   
    const completed = isCompleted ? <FontAwesomeIcon icon={faCheck} /> : null
    return (
      <td key={day}>
        <input type="button" className={isCompleted ? "btn btn-success" : "btn btn-outline-primary custom"} onClick={() => handleClick(index)} />
        {completed}
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
