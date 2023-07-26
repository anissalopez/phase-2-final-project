import HabitForm from "./HabitForm";
import HabitContainer from "./HabitContainer";
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import WeekData from "./WeekData";
import Cal from "./Calendar"


function App() {

  const [habits, setHabits] = useState([]);

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

  function updateWeekDay(updatedHabit){
    const newHabitArray = habits.map((habit) => {
      if(habit.id === updatedHabit.id){
        return {
        ...habit, ...updatedHabit
        };
     }
      else {
        return habit;
      };
  });
  setHabits(newHabitArray);
  };


  return (
     <div className="container">
      <NavBar />
        <Routes>
          <Route path="/Calendar" element={<Cal/>}></Route>
          <Route path="/AddHabit" element={<HabitForm habits={habits} updateHabitList={updateHabitList}/>} />
          <Route exact path="/WeekData" element ={<WeekData habits={habits}/>} />
          <Route exact path="/" element ={<HabitContainer removeHabit={removeHabit} updateWeekDay={updateWeekDay} habits={habits}/>} />
        </Routes>
        </div>
  
  );
};

export default App;
