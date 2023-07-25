import React, { useState } from "react";
import Habit from "./Habit";
import Header from "./Header";
import { weekday } from "../weekdata";


function HabitContainer( {habits, updateWeekDay}){

    const dailyHabits = habits.map((habit) => <Habit updateWeekDay={updateWeekDay} weekDays={weekday}  key={habit.id} habit={habit} />);
    const weekDays= weekday.map(day => <th key={day}>{day}</th> );

    return(
        <div>
        <Header />
            <table className="table table-striped table-hover table-sm">
             <thead>
                <tr>
                    <th>Habits</th>
                    {weekDays}
                    <th></th>
                </tr>
            </thead>
                <tbody>
                {dailyHabits}
                </tbody>
            </table>
            </div>  
     
    )
}

export default HabitContainer;