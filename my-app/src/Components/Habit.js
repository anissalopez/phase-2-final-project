import React, { useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck} from '@fortawesome/free-solid-svg-icons';
import { format } from "date-fns";

function Habit({ habit, updateWeekDay, weekDays, removeHabit, refs}){

    const [dates, setDates] = useState([new Date()])
    const formattedDate = format((new Date()), "MM dd")
    const currentDay = new Date()

    console.log(dates)
    

    function handleClick(index){
        
        if(refs.current[index] != formattedDate){
           alert("please check off a habit for the correct date")
        }


        const filteredDates = dates.filter((day) => day != currentDay)
    

        console.log(dates)
      
            fetch(`http://localhost:3000/habits/${habit.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({"dates": filteredDates})
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    
        
    };

    function handleDelete(){
        fetch(`http://localhost:3000/habits/${habit.id}`, {
            method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(() => removeHabit(habit.id))
    }

    const weekButtons = weekDays.map((day, index) => {
        const completed = habit[day]? <FontAwesomeIcon icon={faCheck} /> : null
            return(
                <td key={day}>
                    <input type="button"  className={habit[day] ? "btn btn-success" : "btn btn-outline-primary custom"} onClick={()=>handleClick(index)} />
                        {completed}
                </td>)
    });
     
    return (
            <tr>
            <th scope="row">{habit.habit}</th> 
             {weekButtons}
            <td><button onClick={handleDelete} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt}/></button></td>
            </tr>   
    )
}

export default Habit;


