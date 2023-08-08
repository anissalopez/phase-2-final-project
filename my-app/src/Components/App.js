import HabitForm from "./HabitForm";
import HabitContainer from "./HabitContainer";
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./NavBar";
import WeekData from "./WeekData";
import {subWeeks, addWeeks} from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MonthlyData from "./MonthlyData";
import Login from "./Login";
import NewUserForm from "./NewUserForm";
import Dashboard from "./Dashboard";
import Preferences from "./Preferences";



function App() {

  const [habits, setHabits] = useState([]);
  const [activeDay, setActiveDay] = useState(new Date());
  const [token, setToken] = useState();

  if(!token){
    return <NewUserForm setToken={setToken} />
  }
  
  




  const changeWeek = () => {
    return (
        <div className="row">
          <div className= "col" onClick={() => changeWeekHandle("prev")}><FontAwesomeIcon size="lg" className= "leftArrow fa-pull-left" icon={faArrowLeft} /></div>
          <div className="col" onClick={() => changeWeekHandle("next")}><FontAwesomeIcon size="lg" className="rightArrow fa-pull-right" icon={faArrowRight}/></div>
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


  function updateHabitList(newUser){
    const newHabitList = [...habits, newUser]


    setHabits(newHabitList)
    
   
  };

  function removeHabit(habitID){
    const newHabits = habits.filter((habit) => habit.id !== habitID);
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
     <>

      <Navigation />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/AddHabit" element={<HabitForm />} />
          <Route exact path="/WeekData" element ={<WeekData changeWeek={changeWeek}  activeDay={activeDay} habits={habits}/>} />
          <Route exact path="/MonthlyData" element ={<MonthlyData setActiveDay={setActiveDay} changeWeek={changeWeek}  changeWeekHandle={changeWeekHandle} activeDay={activeDay} removeHabit={removeHabit} updateCompletedHabits={updateCompletedHabits} habits={habits}/>} />
          <Route exact path="/" element ={<HabitContainer changeWeek={changeWeek}  changeWeekHandle={changeWeekHandle} activeDay={activeDay} removeHabit={removeHabit} updateCompletedHabits={updateCompletedHabits} habits={habits}/>} />
          <Route exact path="/NewUserForm" element ={<NewUserForm updateHabitList={updateHabitList} habits={habits} />} />
        </Routes>

        </>
  
  );
};

export default App;
