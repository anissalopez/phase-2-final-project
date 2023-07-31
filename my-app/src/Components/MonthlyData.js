import React, { useState, useEffect } from "react";
import Habit from "./Habit";
import { weekday } from "../weekdata";
import { Table } from "react-bootstrap";
import {format, startOfWeek, addDays, startOfMonth, endOfWeek, endOfMonth, } from "date-fns";
import DateHeader from "./Header";



function MonthlyData({changeWeek, habits, updateWeekDay, removeHabit, activeDay, updateCompletedHabits}){

    const getWeekDaysNames = () => {
        const weekStartDate = startOfWeek(activeDay);
        const weekDays = [];
        for (let day = 0; day < 7; day++) {
          weekDays.push(
             <td>{format(addDays(weekStartDate, day), "E")}</td> 
          );
        }
        return <div className="weekContainer">{weekDays}</div>;
      };

      const generateDatesForCurrentWeek = (date) => {
        let currentDate = date;
        const week = [];
        for (let day = 0; day < 7; day++) {
          const cloneDate = currentDate;
          week.push(
            <td >
              {format(currentDate, "d")}
            </td>
          );
          currentDate = addDays(currentDate, 1);
        }
        return <tr>{week}</tr>;
      };
    
      const getDates = () => {
        const startOfTheSelectedMonth = startOfMonth(activeDay);
        const endOfTheSelectedMonth = endOfMonth(activeDay);
        const startDate = startOfWeek(startOfTheSelectedMonth);
        const endDate = endOfWeek(endOfTheSelectedMonth);
    
        let currentDate = startDate;
    
        const allWeeks = [];
    
        while (currentDate <= endDate) {
          allWeeks.push(
            generateDatesForCurrentWeek(currentDate, activeDay)
          );
          currentDate = addDays(currentDate, 7);
        }
    
        return <div className="weekContainer">{allWeeks}</div>;
      };




  
  const renderWeekDays = () => {
    let week = [];
    const startDate = startOfWeek(activeDay, { weekStartsOn: 1 });
    let currentDay = startDate;

      for(let day = 0; day < 7; day++){
        week.push(<th key={day}>{format(addDays(currentDay, day), "E")} {format(addDays(currentDay, day), "d")}</th>);
      }
    return <>{week}</> 
  }



  

    return(
        <div>
        <DateHeader activeDay={activeDay}/>
            <Table >
                <thead>
                    <tr>
                    {getWeekDaysNames()}
                    </tr>
                </thead>
                <tbody>
                  {getDates()}
                </tbody>
                </Table>
                <>{changeWeek()}</>

   
         
        </div>
       
     
    )
}

export default MonthlyData;