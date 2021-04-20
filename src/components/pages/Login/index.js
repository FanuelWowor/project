import { useState } from 'react';
import {Button, Form, Container, Card} from 'react-bootstrap';
import Inputs from '../../atoms/Input';


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
    <center><Card style={{ width: '50rem' }}><div >
      <div style={{display: "flex"}} >
      <Container style={{flex: "1 0 1px"}}/>
      <Container style={{flex: "1 0 1px"}}>
        <br></br>
        <h3>Log in</h3>
      <Form >
      <Inputs placeholder="Username" value ={username} onChange={(e)=>setUsername(e.target.value)}/>
      <Inputs placeholder="Password" value ={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br/>
      <Button variant="success" type="submit" onClick={(e)=>{
          e.preventDefault()
          console.log(username, password)}}> 
        Log in
      </Button> 
      </Form>
     
      </Container>
      <Container style={{flex: "1 0 1px"}}/>
    </div>
    </div></Card></center>
    )
}

export default Login