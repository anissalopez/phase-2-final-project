import HabitForm from "./HabitForm";
import HabitContainer from "./HabitContainer";
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import WeekData from "./WeekData";


function App() {
  const [habits, setHabits] = useState([]);

  useEffect(()=> {
      fetch('http://localhost:3000/habits')
      .then(response => response.json())
      .then(data => setHabits(data))

  }, []);

  function updateHabitList(newHabit){
    const newHabits = [...habits, newHabit]
    setHabits(newHabits)
  }


  const [habitsArray, setArray] = useState([])

  function trackHabit(habit){

      const habits =[
          ...habitsArray, 
          habit
      ]

     setArray(habits)
     console.log(habitsArray)


  }

  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/AddHabit" element={<HabitForm habits={habits} updateHabitList={updateHabitList}/>} />
          <Route exact path="/WeekData" element ={<WeekData habits={habits} habitsArray={habitsArray}/>} />
          <Route exact path="/" element ={<HabitContainer trackHabit={trackHabit} habits={habits}/>} />
        </Routes>
    </div>
  );
}

export default App;
