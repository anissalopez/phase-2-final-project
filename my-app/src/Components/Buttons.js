import React, {useState} from "react";


function Button ({ habit, trackHabit }){

const [complete, setComplete] = useState(false);

function handleClick(habit){
        trackHabit(habit);
        setComplete((completed) => !completed);
    };

    return (
        <div className="buttonDiv">
            <button id={habit} className={complete ? "checked" : "button"}onClick={()=>handleClick(habit)}>{complete ? "✔️" : null}</button>
        </div>
    )
}
export default Button;


