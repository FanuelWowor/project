import { useState } from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import Inputs from '../../atoms/Input';
import Axios from 'axios';


const Exercise5 = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const saveData = () => {
      const data = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        avatar: 'https://reqres.in/img/faces/9-image.jpg',
      };
      Axios.post('http://localhost:3004/users', data);
    };

    return (
    <center><div className="card" style={{ width: '50rem' }}>
      <div style={{display: "flex"}}>
      <Container style={{flex: "1 0 1px"}}/>
      <Container style={{flex: "4 0 1px"}}>
        <br/>
        <h3>Updated Page #Ex5</h3>
        <br/>
      <Form>
      <Inputs placeholder="E-mail" value ={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Inputs placeholder="First Name" value ={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      <Inputs placeholder="Last Name" value ={lastName} onChange={(e)=>setLastName(e.target.value)}/>
      <br/>
      <Button variant="success" type="submit" onClick={(e)=>{
          e.preventDefault()
          console.log(email, firstName, lastName)
          saveData();
        }}> 
        Save Data
      </Button> 
      </Form>
      </Container>
      <Container style={{flex: "1 0 1px"}}/>
    </div>
    </div></center>
    )
}

export default Exercise5