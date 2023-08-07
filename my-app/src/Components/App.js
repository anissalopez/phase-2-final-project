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



function App() {

  const [habits, setHabits] = useState([]);
  const [activeDay, setActiveDay] = useState(new Date());


  console.log(habits)

  const user = localStorage.getItem('user')

  useEffect(()=>{

    if(user === "" || user === null){
      alert("please login")
    }

    else {
    fetch(`https://habittracker-rvvt.onrender.com/habits/${user}`)
    .then(res => res.json())
    .then(data => setHabits(data))

    }
  

  }, [])

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


  function updateHabitList(newHabit){
    const newHabits = {...habits}
    newHabits.habits = [...newHabits.habits, newHabit]

    console.log(newHabits)
    
   
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


console.log(user)

  return (
     <>

      <Navigation />
        <Routes>
          <Route path="/AddHabit" element={<HabitForm habits={habits} updateHabitList={updateHabitList} user={user}/>} />
          <Route exact path="/WeekData" element ={<WeekData changeWeek={changeWeek}  activeDay={activeDay} habits={habits}/>} />
          <Route exact path="/MonthlyData" element ={<MonthlyData setActiveDay={setActiveDay} changeWeek={changeWeek}  changeWeekHandle={changeWeekHandle} activeDay={activeDay} removeHabit={removeHabit} updateCompletedHabits={updateCompletedHabits} habits={habits}/>} />
          <Route exact path="/" element ={<HabitContainer changeWeek={changeWeek}  changeWeekHandle={changeWeekHandle} activeDay={activeDay} removeHabit={removeHabit} updateCompletedHabits={updateCompletedHabits} habits={habits}/>} />
          <Route exact path="/Login" element ={<Login  />} />
          <Route exact path="/NewUserForm" element ={<NewUserForm updateHabitList={updateHabitList}/>} />
        </Routes>

        </>
  
  );
};

export default App;
