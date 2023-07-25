import React, { useState } from "react";
import Habit from "./Habit";
import Header from "./Header";
import { weekday } from "../weekdata";


function HabitContainer( {habits, updateWeekDay, removeHabit}){

    const dailyHabits = habits.map((habit) => <Habit removeHabit={removeHabit} updateWeekDay={updateWeekDay} weekDays={weekday}  key={habit.id} habit={habit} />);
    const weekDays= weekday.map(day => <th  className="p-3" scope="col" key={day}>{day}</th>);

    return(
        <div>
            <Header />
                <table className="table table-responsive-lg">
                    <thead className="table-group-divider">
                        <tr>
                            <th className="p-3" scope="col">Habits</th>
                            {weekDays}
                            <th className="p-3" scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {dailyHabits}
                    </tbody>
                </table>
        </div>
       
     
    )
}

export default HabitContainer;