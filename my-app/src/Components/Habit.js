import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck} from '@fortawesome/free-solid-svg-icons';
import { format } from "date-fns";

function Habit({ habit, updateWeekDay, weekDays, removeHabit}){

    const dateFormat = "MMM dd yyyy";
    const date = format(new Date(), dateFormat)



    function handleClick(e){
            console.log(e.target.parentNode.parentNode.id)
        
        fetch(`http://localhost:3000/habits/${habit.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({[date]: true})
        })
        .then(resp => resp.json())
        .then(data => updateWeekDay(data))
        .catch(error => console.log(error))
    };

    function handleDelete(){
        fetch(`http://localhost:3000/habits/${habit.id}`, {
            method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(() => removeHabit(habit.id))
    }

    const weekButtons = weekDays.map((day) => {
        const completed = habit[day]? <FontAwesomeIcon icon={faCheck} /> : null
            return(
                <td key={day}>
                    <input type="button"  className={habit[day] ? "btn btn-success" : "btn btn-outline-primary custom"} onClick={handleClick} />
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


