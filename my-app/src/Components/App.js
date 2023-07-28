import HabitForm from "./HabitForm";
import HabitContainer from "./HabitContainer";
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import WeekData from "./WeekData";
import Cal from "./Calendar";
import {subWeeks, addWeeks, format} from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function App() {

  const [habits, setHabits] = useState([]);
  const [activeDay, setActiveDay] = useState(new Date());

  const dateHeader = () => {<h2 className="dateHeader">{format((activeDay),"MMM yyyy")}</h2>};

  const changeWeek = () => {
    return (
        <div className="row">
          <div className= "col" onClick={() => changeWeekHandle("prev")}><FontAwesomeIcon pull="right" size="lg" className= "leftArrow" icon={faArrowLeft} /></div>
          <div className="col" onClick={() => changeWeekHandle("next")}><FontAwesomeIcon pull="left" size="lg" className="rightArrow" icon={faArrowRight}/></div>
        </div>
    );
  };

  const changeWeekHandle = (btnName) => {
    if (btnName === "prev") {
      setActiveDay(subWeeks(activeDay, 1));
    };
    if (btnName === "next") {
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
    const newHabitArray = habits.map((habit) => {
      if (habit.id === updatedHabit.id) {
        return {
          ...habit,
          ...updatedHabit 
        };
      } else {
        return habit;
      }
    });
  
    setHabits(newHabitArray);
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
