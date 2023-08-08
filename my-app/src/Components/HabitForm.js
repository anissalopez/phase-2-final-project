import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form }from 'react-bootstrap'

function HabitForm({ updateHabitList, currentUserHabits, habits}){
    const [habit, setHabit] = useState("")


    console.log(currentUserHabits)



    const navigate = useNavigate();

    function handleSubmit(e){

        console.log(currentUserHabits)

 
        e.preventDefault();
        

       /* fetch(`https://habittracker-rvvt.onrender.com/habits/${user}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify()
        })
        .then(resp => resp.json())
        .then((data) => {
           console.log(data)
        }); 

        */
    };

    return(
        <Container id="formContainer" className="d-grid h-75">
        <Form id="habitForm" className="text-center w-60" onSubmit={handleSubmit}>
            <Form.Group  controlId="habitForm">
            <Form.Label className="mb-4 fs-4">Add Habit</Form.Label>
        
            <Form.Control className="mb-4" type="text" placeholder="please enter a habit" onChange={(e) => setHabit(e.target.value)}/>
            <Button variant="primary" type="submit">
            Submit
            </Button>
         </Form.Group>
        </Form>
        </Container>
    );
};

export default HabitForm;