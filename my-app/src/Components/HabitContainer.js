import React, { useState } from "react";
import Habit from "./Habit";
import Header from "./Header";
import { weekday } from "../weekdata";


function HabitContainer( {habits, updateWeekDay}){

    const dailyHabits = habits.map((habit) => <Habit updateWeekDay={updateWeekDay} weekDays={weekday}  key={habit.id} habit={habit} />);
    const weekDays= weekday.map(day => <p className="col" key={day}>{day}</p> );

    return(
        <div class="container">
        <Header />
            <div className="row">
            <p className="col">Habits</p>
            {weekDays}
            </div>
            {dailyHabits}
            </div>  
     
    )
}

export default HabitContainer;