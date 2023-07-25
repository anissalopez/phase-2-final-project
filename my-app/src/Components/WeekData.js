import React, { useEffect } from "react";
import { weekday } from "../weekdata";


function WeekData({ habits}){
    let habitCount = {};

    const habitDetails = habits.forEach((habit) => {
     habitCount[habit.habit] = 0;
      weekday.forEach((day) =>  {if(habit[day]){habitCount[habit.habit] = habitCount[habit.habit]  + 1};
      });
    });

    const habitData = habits.map((habit) => {
        const percent = `${(habitCount[habit.habit]/7 * 100).toFixed(0)}%`;
        return (
            <div className="row gy-1"key={habit.habit}>
                <p className="col">{habit.habit}</p>
                <p className="col">{habitCount[habit.habit] > 0 ?  percent : `0%`} </p>
            </div>
           
    )
})


    return (
        <div>{habitData}</div>
    )
}

export default WeekData;