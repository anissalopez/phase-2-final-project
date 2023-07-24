import React, { useState } from "react";


function WeekData({ habits, habitsArray }){

    const elementCounts = {};

    habitsArray.forEach(habit => {
        elementCounts[habit] = (elementCounts[habit] || 0) + 1;
    })

const habitData = habits.map((habit) => {
 
    return (
        <div>
        <p>{habit.habit}</p>
        <p>Percentage of Goal: {elementCounts[habit.habit] / 7} </p>
        </div>
    )
})


    return (
        <div>{habitData}</div>
    )
}

export default WeekData;