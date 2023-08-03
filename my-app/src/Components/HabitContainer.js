import React from "react";
import Habit from "./Habit";
import { Table, Container } from "react-bootstrap";
import {format, startOfWeek, addDays} from "date-fns";
import DateHeader from "./Header";

function HabitContainer({changeWeek, habits, updateWeekDay, removeHabit, activeDay, updateCompletedHabits}){

  const renderWeekDays = () => {
    let week = [];
    const startDate = startOfWeek(activeDay, { weekStartsOn: 1 });
    let currentDay = startDate;
      for(let day = 0; day < 7; day++){
        week.push(<th key={day}>{format(addDays(currentDay, day), "E")} {format(addDays(currentDay, day), "d")}</th>);
      };
    return <>{week}</> 
  };

  const dailyHabits = habits.map((habit) => <Habit activeDay={activeDay} updateCompletedHabits={updateCompletedHabits} removeHabit={removeHabit} updateWeekDay={updateWeekDay}   key={habit.id} habit={habit} />);
  
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
                    {dailyHabits}
                </tbody>
                </Table>
                <>{changeWeek()}</>
        </Container>   
      </>
    );
};

export default HabitContainer;