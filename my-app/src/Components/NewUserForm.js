import React, {useState} from "react";
import {Form, Container, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"

function NewUserForm({ updateHabitList, habits }){

const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    id: "",
    password: "",
    habits: []
})
const navigate = useNavigate();



function handleChange(e){
    const updatedForm = {
        ...form, [e.target.name]: e.target.value
    }


    setForm(updatedForm)
}


function validateNewUser(){
    let newUser = true;

    if(form.firstName === "" || form.firstName === null){
        newUser = false;
        alert("please enter a valid first name")
    }

    if(form.lastName === "" || form.lastName === null){
        newUser = false;
        alert("please enter a valid last name")
    }
    if(form.id === "" || form.id === null){
        newUser = false;
        alert("please enter a valid username")
    }
    if(form.password === "" || form.password === null){
        newUser = false;
        alert("please enter a valid password")
    }

    /* need to add functionality to create an alert if username is already taken habits.forEach((habit) => {
        if(form.username === habit.id){
            newUser = false;
            alert("this username is taken")
        }
    })*/

    console.log(habits)
    return newUser;
}



function handleSubmit(e){
    e.preventDefault();
    console.log(e)

    if(validateNewUser()){
        fetch('https://habittracker-rvvt.onrender.com/habits', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(form)
        })
        .then(resp => resp.json())
        .then((data) => {
            updateHabitList(data)
            navigate('/')
        }); 
        
    }

}




    return(
        <Container id="formContainer" className="mt-5 d-grid h-75">
        <NavBar ></NavBar>
        <h2 className="mt-5">Welcome to Habit App</h2>
        <Form id="userForm" className="mt-3 text-center w-60" onSubmit={handleSubmit}>
            <Form.Label className="mb-4 fs-4">First Name </Form.Label>
            <Form.Control className="mb-4" type="text" placeholder="enter first name" value={form.firstName} name="firstName" onChange={handleChange}/>
            <Form.Label className="mb-4 fs-4">Last Name </Form.Label>
            <Form.Control className="mb-4" type="text" placeholder="please last name" value={form.lastName} name="lastName" onChange={handleChange}/>
            <Form.Label className="mb-4 fs-4">User Name </Form.Label>
            <Form.Control className="mb-4" type="username" placeholder="please username" value={form.id} name="id" onChange={handleChange}/>
            <Form.Label className="mb-4 fs-4">Password </Form.Label>
            <Form.Control className="mb-4" type="password" placeholder="enter password" value={form.password} name="password" onChange={handleChange}/>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        <p>Have an account? <button>Login</button></p>
        </Container>
    )
}

export default NewUserForm;