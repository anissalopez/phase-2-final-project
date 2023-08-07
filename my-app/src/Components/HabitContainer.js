import React from "react";
import Habit from "./Habit";
import { Table, Container } from "react-bootstrap";
import {format, startOfWeek, addDays} from "date-fns";
import DateHeader from "./Header";
import { useNavigate } from "react-router-dom";

function HabitContainer({changeWeek, habits, updateWeekDay, removeHabit, activeDay, updateCompletedHabits}){
  const navigate = useNavigate();
  const renderWeekDays = () => {
    let week = [];
    const startDate = startOfWeek(activeDay, { weekStartsOn: 1 });
    let currentDay = startDate;
      for(let day = 0; day < 7; day++){
        week.push(<th key={day}>{format(addDays(currentDay, day), "E")} {format(addDays(currentDay, day), "d")}</th>);
      };
    return <>{week}</> 
  };

  
  
  
  function userDisplay(user){
    console.log(user)

    if(user.habit === 'undefined'){
      alert('please add habits')
      navigate('/AddHabit')
    }
  }

 



  /*const dailyHabits = habits.map((habit) => {
    if(habit.habit.length === "" || habit.habit === null){
      alert('Please add habits')
     
    }
  <Habit activeDay={activeDay} updateCompletedHabits={updateCompletedHabits} removeHabit={removeHabit} updateWeekDay={updateWeekDay}   key={habit.id} habit={habit} />});
  */
    return(
      <>
        <DateHeader activeDay={activeDay}/>
        <Container id="habitContainer" fluid className="d-grid pt-5">
            <Table responsive>
                <thead>
                    <tr>
                        <th>Habits</th>
                        {renderWeekDays()}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
               {userDisplay(habits)}
                </tbody>
                </Table>
                <>{changeWeek()}</>
        </Container>   
      </>
    );
};

export default HabitContainer;