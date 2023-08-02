import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form }from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


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
        <Container id="formContainer" className="d-grid h-100">
        <Form id="habitForm" className="text-center w-60" onSubmit={handleSubmit}>
            <Form.Group  controlId="habitForm">
            <Form.Label className="mb-4 fs-4">Add Habit</Form.Label>
        
            <Form.Control className="mb-4" type="text" placeholder="please enter a habit" value={habit} onChange={(e) => setHabit(e.target.value)}/>
            <Button variant="primary" type="submit">
            Submit
            </Button>
         </Form.Group>
        </Form>
        </Container>
    );
};

export default HabitForm;