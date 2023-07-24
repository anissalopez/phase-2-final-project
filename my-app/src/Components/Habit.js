import React, {useState} from "react";
import { weekday } from "../weekdata";
import Button from "./Buttons"


function Habit({ habitName, trackHabit}){

 const weekButtons = weekday.map((day) => <Button key={day} habit={habitName} trackHabit={trackHabit}/> )

    return (
        <div className="container">
           <p>{habitName}</p> 
           {weekButtons}
        </div>

    )
}

export default Habit;


