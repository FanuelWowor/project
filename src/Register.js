import { useState } from 'react';
import {Button, Form, Container} from 'react-bootstrap';

const Register = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    return (
    <div className="card p-4">
      <div className="card p-4" style={{display: "flex"}}>
      <Container style={{flex: "1 0 1px"}}/>
      <Container style={{flex: "4 0 1px"}}>
        <br></br>
        <h3 className="row justify-content-center">Register</h3><br></br><br></br>
      <Form>
      <Form.Group>
        <Form.Label className="row justify-content-center">Full Name</Form.Label>
        <br/>
        <Form.Control placeholder="Enter Full Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="row justify-content-center">Username</Form.Label>
        <br/>
        <Form.Control placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="row justify-content-center">email</Form.Label>
        <br/>
        <Form.Control placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="row justify-content-center">Phone Number</Form.Label>
        <br/>
        <Form.Control placeholder="Enter Phone Number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="row justify-content-center">Address</Form.Label>
        <br/>
        <Form.Control placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
      </Form.Group>
      <br/>
      <Button variant="primary" type="submit" onClick={(e)=>{
          e.preventDefault()
          console.log(name, username, email, phoneNumber, address)}}> 
        Submit
      </Button> 
      </Form>
      </Container>
      <Container style={{flex: "1 0 1px"}}/>
    </div>
    </div>
    )
}

export default Register