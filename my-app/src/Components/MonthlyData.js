import React, { useState, useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import { subMonths, addMonths, getDaysInMonth, format, addDays, startOfMonth, endOfMonth, startOfDay } from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function MonthlyData({habits}){
   
    const [activeDate, setActiveDate] = useState((new Date()));
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    let monthlyButtons = [];
    let habitCount = {};
   


      const generateDatesForCurrentMonth = (date) => {
        let currentDate = startOfTheSelectedMonth;
        const monthDays = [];
             while (currentDate <= endOfTheSelectedMonth)  {
                monthDays.push(
                <td key={currentDate}>
                {format(currentDate, "d")}
                </td>
            );
        currentDate = addDays(currentDate, 1);
        };
        return <>{monthDays}</>
      };


    habits.forEach((habit) => {
        habitCount[habit.habit] = []
        Object.keys(habit).forEach((key) => {
            if(new Date(key) >= startOfTheSelectedMonth &&  new Date(key) <= endOfTheSelectedMonth)
            habitCount[habit.habit].push(key)
            });
    
       });

      
       
 

      for (let i = 0; i < getDaysInMonth(activeDate); i++){
        let currentDate = startOfTheSelectedMonth
        let className;
        console.log(className)


        habits.forEach((habit) => {
            habitCount[habit.habit].forEach((date) => {
                if(date.includes(addDays((activeDate), i))){
                    className = "active"
                }
            })
        })
         monthlyButtons.push(
                <td key={i}><button  className={className === "active" ? "btn btn-primary" : null} ></button>
                </td>);       
        }

    const habitDisplay = habits.map((habit) => {
 
    

        return (
            <tr key={habit.habit}><td>{habit.habit}</td>
            {monthlyButtons}
           
           
            </tr>
        );
    });
          
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
    };

    return(
        <div>
            <h2 className="dateHeader">{format((activeDate), "MMMM yyyy")}</h2>
            <Table className="table-sm monthlyData">
                <thead>
                 <tr>
                    <th>Habits</th>
                    {generateDatesForCurrentMonth(activeDate)}
                 </tr>
                </thead>
                <tbody>
                    {habitDisplay}
                </tbody>
                </Table>
                <>{changeWeek()}</>
        </div>
    );
};

export default MonthlyData;