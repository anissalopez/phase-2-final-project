import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HabitForm({ updateHabitList, habits }){
    const [form, setForm] = useState({
        habit: "",
        completed: false,
    });

    const [habit, setHabit] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const newHabit = {...form, habit: habit};
        setForm(newHabit);

        fetch('http://localhost:3000/habits', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(newHabit)
        })
        .then(resp => resp.json())
        .then((data) => {
            updateHabitList(data)
            navigate('/')
        }); 
    };


    return(
        <div className="formBody">
        <div>
         <header className="formHeader">Enter a Habit</header>
        </div>
        <div className ="parent">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="please enter a habit" value={habit} onChange={(e) => setHabit(e.target.value)}></input>
                <div className="submit"><input type="submit"></input></div>
            </form>
        </div>
        </div>
    )
}

export default HabitForm;