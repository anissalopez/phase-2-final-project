import React, { useState } from "react";
import Habit from "./Habit";
import Header from "./Header";
import {weekday} from "../weekdata"

function HabitContainer( {habits, updateWeekDay}){

    const dailyHabits = habits.map((habit) => <Habit updateWeekDay={updateWeekDay} weekDays={weekday}  key={habit.id} habit={habit} />);
 

    return(
        <div>
        <Header />
            {dailyHabits}
        </div>
    )
}

export default HabitContainer;