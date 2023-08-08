import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container, Button } from "react-bootstrap";

function Login({ }){

    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    


    const navigate = useNavigate();

    function validateLogin(){
        let login = true;
        if(username === "" || username === null){
            login = false;
            alert("please enter a valid username");
        }
        if(password === "" || password === null){
            login = false
            alert("please enter a valid password")
        }

        
        return login;
    };

    function handleSubmit(e){
        e.preventDefault();

     if(validateLogin()){



    }
    };


 


    function newUserHandler(){
        navigate('/NewUserForm')
    }



    return(
        <Container id="formContainer" className="d-grid h-75">
        <Form id="userForm" className="text-center w-60" onSubmit={handleSubmit}>
            <Form.Label className="mb-4 fs-4">User Name </Form.Label>
            <Form.Control className="mb-4" type="text" placeholder="please enter a username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
            <Form.Label className="mb-4 fs-4">Password </Form.Label>
            <Form.Control className="mb-4" type="text" placeholder="please enter a password" value={password} onChange={(e)=>setPassWord(e.target.value)}/>
            <Button variant="primary" type="submit">
            Submit
            </Button>
            <Button variant="primary" onClick={newUserHandler}>
            New User
           </Button>
        </Form>
        </Container>
    );
};

export default Login;
