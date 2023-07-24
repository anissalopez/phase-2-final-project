import React from "react";
import { weekday } from "../weekdata";

function Header() {

  const weekData = weekday.map(day => <p key={day}>{day}</p>);
  
  return (
    <div>
    <header>
      <h1 className="text-center">Habit Tracker</h1>
    </header>
    <div className = "habitContainer">
      <p>Habits</p>
      {weekData}
    </div>
    </div>
  );
}

export default Header;