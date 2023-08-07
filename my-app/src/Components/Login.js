import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container, Button } from "react-bootstrap";

function Login({ updateHabitList }){

    const [form, setForm] = useState({
        userName: "",
        passWord: ""
    });

    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");


    const navigate = useNavigate();

    console.log(form)

    function handleSubmit(e){
        e.preventDefault();
        
     const newUser = {
        userName: username,
        passWord: password
     }

     setForm(newUser)
        
    fetch('https://habittracker-rvvt.onrender.com/habits', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(resp => resp.json())
        .then((data) => {
            updateHabitList(data)
            navigate('/')
        }); 
    };

    return(
        <Container id="formContainer" className="d-grid h-75">
        <Form id="userForm" className="text-center w-60" onSubmit={handleSubmit}>
            <Form.Label className="mb-4 fs-4">UserName: </Form.Label>
            <Form.Control className="mb-4" type="text" placeholder="please enter a username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
            <Form.Label className="mb-4 fs-4">Password: </Form.Label>
            <Form.Control className="mb-4" type="text" placeholder="please enter a password" value={password} onChange={(e)=>setPassWord(e.target.value)}/>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        </Container>
    );
};

export default Login;
