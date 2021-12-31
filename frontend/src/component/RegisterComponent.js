import React ,{useState}from 'react'
import axios from "axios";
import {ButtonToggle, Container, Form, FormGroup} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterComponent(){
    const [email,setEmail]=useState("");
    const [password,setPass]=useState("");
    const [res,setRes]=useState("");
  
    function registerUser(){
        axios.post("http://127.0.0.1:3000/api/v1/user/register",{
            email: email,
            password: password

        }).then((response)=>{
                if(response.status===200){
                    toast.success("you are registered");
                }
                else {
                    toast.error("some error");
                }
        })
    }

    return(
        <Container className="forms">
            <Form >
                <h1>Registration</h1>
                <FormGroup>
                    Username:<input type="text" name="username" placeholder="username" onChange={(event => setEmail(event.target.value))}/><br/>
                </FormGroup>
                <FormGroup>
                    Password:<input type="text" name="password" placeholder="password" onChange={(event => setPass(event.target.value))}/><br/>
                </FormGroup>
                    <FormGroup>
                    <ButtonToggle color="primary" size="md" onClick={registerUser}>Register </ButtonToggle>{' '}
                    <ToastContainer
                        position="bottom-right"
                        autoClose={2000}
                    />
                    </FormGroup>

            </Form>
        </Container>

    )
}

