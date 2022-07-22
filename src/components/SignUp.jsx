
import React,{useState} from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
const SignUp = (props) => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const res = await fetch('http://localhost:7600/api/auth/signup',{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({name,email,password})
        })
        const resData = await res.json()
        if(res.status === 201){
            console.log({resData});
            localStorage.setItem('token',resData.token)
            navigate('/login')
            props.showAlert("success","success","Signup Successfully")  
        }else{
            props.showAlert("danger","danger",resData)   
        }
        
    }
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col className='col-5'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            SignUp
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp