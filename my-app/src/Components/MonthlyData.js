import React, { useState, useEffect } from "react";
import Habit from "./Habit";
import { weekday } from "../weekdata";
import { Table } from "react-bootstrap";
import {subMonths, addMonths, getDaysInMonth, format, startOfWeek, addDays, startOfMonth, endOfWeek, endOfMonth, } from "date-fns";
import DateHeader from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function MonthlyData({habits, updateWeekDay, removeHabit, activeDay, updateCompletedHabits}){
   
const [activeDate, setActiveDate] = useState((new Date()))
const endOfTheSelectedMonth = endOfMonth(activeDate);
const startOfTheSelectedMonth = startOfMonth(activeDate)

      const generateDatesForCurrentMonth = (date) => {
        let currentDate = startOfTheSelectedMonth;
        const monthDays = [];
        while (currentDate <= endOfTheSelectedMonth)  {
          monthDays.push(
            <td >
              {format(currentDate, "d")}
            </td>
          );
          currentDate = addDays(currentDate, 1);
        }
        return <>{monthDays}</>
      };


    const habitDisplay = habits.map((habit) => {
        return (
            <tr>
                <td>{habit.habit}</td>
             
            </tr>
        )
    })
          


    const changeWeek = () => {
        return (
            <div className="row">
              <div className= "col" onClick={() => changeMonth("prev")}><FontAwesomeIcon size="lg" className= "leftArrow fa-pull-left" icon={faArrowLeft} /></div>
              <div className="col" onClick={() => changeMonth("next")}><FontAwesomeIcon size="lg" className="rightArrow fa-pull-right" icon={faArrowRight}/></div>
            </div>
        );
      };
    
  

    function changeMonth(btnName){
        if (btnName === "prev") {
            setActiveDate(subMonths(activeDate, 1));
          };
          if (btnName === "next") {
            setActiveDate(addMonths(activeDate, 1));
          };

    }

    return(
        <div>
            <h2 className="dateHeader">{format((activeDate), "MMMM yyyy")}</h2>
            <Table >
                <thead>
                 <tr>
                    <th>Habits</th>
                    {generateDatesForCurrentMonth(activeDay)}
                 </tr>
                </thead>
                <tbody>
                    {habitDisplay}
                </tbody>
                </Table>
                <>{changeWeek()}</>

   
         
        </div>
       
     
    )
}

export default MonthlyData;