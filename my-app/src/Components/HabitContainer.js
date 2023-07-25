import React, { useState } from "react";
import Habit from "./Habit";
import Header from "./Header";
import { weekday } from "../weekdata";
import { Container } from "./Container.style"

function HabitContainer( {habits, updateWeekDay}){

    const dailyHabits = habits.map((habit) => <Habit updateWeekDay={updateWeekDay} weekDays={weekday}  key={habit.id} habit={habit} />);
 

    return(
        <Container>
        <Header />
            {dailyHabits}
        </Container>
    )
}

export default HabitContainer;