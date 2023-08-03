import React, { useState, useEffect, useRef } from "react";
import { Table, Container } from "react-bootstrap";
import { subMonths, addMonths, getDaysInMonth, format, addDays, startOfMonth, endOfMonth } from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function MonthlyData({habits}){
   
    const [activeDate, setActiveDate] = useState((new Date()));
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    
    function handleButtons(habit) {
        const buttons = [];
        for (let i = 0; i < getDaysInMonth(activeDate); i++) {
          const currentDate = addDays(startOfTheSelectedMonth, i);
          const isCompleted = habit[currentDate.toString()] === true;
      
          buttons.push(
            <td key={currentDate}>
              <button
                className={isCompleted ? "monthBtn btn btn-success" : "monthBtn btn btn-outline-primary" }
              ></button>
            </td>
          );
        };
        return buttons;
      };
      
    const habitDisplay = habits.map((habit) => (
        <tr key={habit.habit}>
          <td>{habit.habit}</td>
          {handleButtons(habit)}
        </tr>
      ));
      
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
     
    const changeDates = () => {
        return (
            <div className="row h-15 w-15 col">
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
        <>
        <Container fluid className="mt-5 mb-5">
        <h1 className="dateHeader">{format((activeDate), "MMMM yyyy")}</h1>
        </Container>
        <Container  fluid className="d-grid pt-5">
        <Table responsive size="sm" >
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
        <>{changeDates()}</>
        </Container> 
        </>

    );
};

export default MonthlyData;