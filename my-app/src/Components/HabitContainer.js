import React, { useState } from "react";
import Habit from "./Habit";
import Header from "./Header";

function HabitContainer( { habits, trackHabit }){

    const dailyHabits = habits.map((habit) => <Habit key={habit.id} trackHabit={trackHabit} habits={habits}  habitName={habit.habit} />);

    return(
        <div>
        <Header />
            {dailyHabits}
        </div>
    )
}

export default HabitContainer;