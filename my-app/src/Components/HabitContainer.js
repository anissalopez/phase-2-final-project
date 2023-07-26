import React, { useState } from "react";
import Habit from "./Habit";
import Header from "./Header";
import { weekday } from "../weekdata";
import { Table } from "react-bootstrap";


function HabitContainer( {habits, updateWeekDay, removeHabit}){

    const dailyHabits = habits.map((habit) => <Habit removeHabit={removeHabit} updateWeekDay={updateWeekDay} weekDays={weekday}  key={habit.id} habit={habit} />);
    const weekDays= weekday.map(day => <th className="p-3"  key={day}>{day}</th>);

    return(
        <div>
            <Header />
            <Table >
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
                </Table>
        </div>
       
     
    )
}

export default HabitContainer;