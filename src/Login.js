import { useState } from 'react';
import {Button, Form, Container} from 'react-bootstrap';



const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (

    <div className="card p-4">
      <div className="card p-4" style={{display: "flex"}}>
      <Container style={{flex: "1 0 1px"}}/>
      <Container style={{flex: "4 0 1px"}}>
        <br></br>
        <h3 className="row justify-content-center">Login</h3><br></br><br></br>
      <Form>
      <Form.Group>
        <Form.Label className="row justify-content-center">Username</Form.Label>
        <br/>
        <Form.Control placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Group>
        <br/>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="row justify-content-center">Password</Form.Label>
        <br/>
        <Form.Control type="password " placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
      </Form.Group>
      <br/>
      <Button variant="primary" type="submit" onClick={(e)=>{
          e.preventDefault()
          console.log(username, password)}}> 
        Submit
      </Button> 
      </Form>
      </Container>
      <Container style={{flex: "1 0 1px"}}/>
    </div>
    </div>
    )
}

export default Login