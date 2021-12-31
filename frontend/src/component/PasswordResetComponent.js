import React ,{useState}from 'react'
import axios from "axios";
import {ButtonToggle, Container, Form, FormGroup} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PasswordResetComponent(){
    const [email,setEmail]=useState("");
    const [password,setPass]=useState("");
    const [updatePassword,setUpdatePass]=useState("");

    function resetPassword(){
        axios.put("http://127.0.0.1:3000/api/v1/user/reset",{
            email: email,
            password: password,
            updatePassword:updatePassword

        }).then((response)=>{
                console.log(response.status)
                if(response.status===200){
                    toast.success("password updated");
                    toast.clearWaitingQueue();
                }
                
                else {
                    toast.error(response.body.msg);
                }
        })
    }

    return(
        <Container className="forms">
            <Form >
                <h1>Reset Password</h1>
                <FormGroup>
                    Username:<input type="text" name="username" placeholder="username" onChange={(event => setEmail(event.target.value))}/><br/>
                </FormGroup>
                <FormGroup>
                    Password:<input type="text" name="password" placeholder="old password" onChange={(event => setPass(event.target.value))}/><br/>
                </FormGroup>
                <FormGroup>
                   Reset Password:<input type="text" name="password" placeholder="new password" onChange={(event => setUpdatePass(event.target.value))}/><br/>
                </FormGroup>
                    <FormGroup>
                    <ButtonToggle color="primary" size="md" onClick={resetPassword}>Reset Password </ButtonToggle>{' '}
                    <ToastContainer
                        position="bottom-right"
                        autoClose={2000}
                    />
                    </FormGroup>

            </Form>
        </Container>

    )
}

