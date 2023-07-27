import HabitForm from "./HabitForm";
import HabitContainer from "./HabitContainer";
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import WeekData from "./WeekData";
import Cal from "./Calendar";
import {subWeeks, addWeeks, format} from "date-fns";


function App() {

  const [habits, setHabits] = useState([]);
  const [activeDay, setActiveDay] = useState(new Date());

  const dateHeader = () => {
    const dateFormat = "MMM yyyy";
    return (
          <h2 className="dateHeader">{format(activeDay, dateFormat)}</h2> 
    );
  };


  const changeWeek = () => {
    return (
        <div className="row">
          <div className= "col" onClick={() => changeWeekHandle("prev")}>prev week</div>
          <div className="col" onClick={() => changeWeekHandle("next")}>next week</div>
        </div>
    );
  };

  const changeWeekHandle = (btnType) => {
    if (btnType === "prev") {
      setActiveDay(subWeeks(activeDay, 1));
    };
    if (btnType === "next") {
      setActiveDay(addWeeks(activeDay, 1));
    };
  };

  useEffect(()=> {
      fetch('http://localhost:3000/habits')
      .then(response => response.json())
      .then(data => setHabits(data))

  }, []);

  function updateHabitList(newHabit){
    const newHabits = [...habits, newHabit];
    setHabits(newHabits);
  };

  function removeHabit(habitID){
    const newHabits = habits.filter((habit) => habit.id != habitID);
    setHabits(newHabits);
  };

  function updateCompletedHabits(updatedHabit){
    console.log(updatedHabit)
  };



  return (
     <div className="container">
      <NavBar />
        <Routes>
          <Route path="/Calendar" element={<Cal/>}></Route>
          <Route path="/AddHabit" element={<HabitForm habits={habits} updateHabitList={updateHabitList}/>} />
          <Route exact path="/WeekData" element ={<WeekData changeWeek={changeWeek} dateHeader={dateHeader} activeDay={activeDay} habits={habits}/>} />
          <Route exact path="/" element ={<HabitContainer changeWeek={changeWeek} dateHeader={dateHeader} changeWeekHandle={changeWeekHandle} activeDay={activeDay} removeHabit={removeHabit} updateCompletedHabits={updateCompletedHabits} habits={habits}/>} />
        </Routes>
        </div>
  
  );
};

export default App;
