import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="habitForm">
            <Form.Label>Habit Form</Form.Label>
            <Form.Control type="text" placeholder="please enter a habit" value={habit} onChange={(e) => setHabit(e.target.value)}/>
            <Button variant="primary" type="submit">
            Submit
            </Button>
         </Form.Group>
        </Form>
    );
};

export default HabitForm;