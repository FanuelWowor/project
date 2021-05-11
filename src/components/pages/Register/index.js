import { useState } from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import Inputs from '../../atoms/Input';
import firebase from '../../Firebase/index';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [schoolOrigin, setSchoolorigin] = useState('')
    const [chooseMajor, setChoosemajor] = useState ('')

    const resetForm = () => {
      setName ("");
      setEmail ("");
      setPhoneNumber ("");
      setAddress ("");
      setSchoolorigin ("");
      setChoosemajor ("");
    }

    const onSubmit = () => {
      const data = {
        name: name,
        email: email,
        phomeNumber: phoneNumber,
        address: address,
        schoolOrigin: schoolOrigin,
        chooseMajor: chooseMajor,
      }
      firebase.database().ref("Maba").push(data)
      resetForm()
    }
    return (
    <center>
    <div
        className="bg_image pb-5"
        style={{
          backgroundImage: `url("http://www.techandall.com/wp-content/uploads/2013/10/techandall_wallpaper_1.jpg")`,
          backgroundSize: "cover",
          height: "150vh",
          color: "black",
        }}> 
    <br/><img src="https://lh3.googleusercontent.com/proxy/Z3ebYHcElQTPR2-Q7E44FE3Vu5T0SfeKpyxb_kjBi2McZRkoN2X5OpL1suqTsGO_faiqF6busamRMT4AeAcDrRusklOPcf9eZ-Hv7d8q3Ymy1u565wXtcgFN7ckggLBtSIG-8BH6i8L-aypsjX9kgkc" alt="" height="80px"/>
    <br /><div className="card" style={{ width: '50rem' }}>
    
      <div style={{display: "flex"}}>
      <Container style={{flex: "1 0 1px"}}/>
      <Container style={{flex: "4 0 1px"}}>
        <br></br>
        <h3>ISIKAN DATA DIRI ANDA SECARA LENGKAP DAN JUJUR !</h3>
      <Form>
      <Inputs placeholder="Fullname" value ={name} onChange={(e)=>setName(e.target.value)}/>
      <Inputs placeholder="E-mail" value ={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Inputs placeholder="Phone Number" value ={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
      <Inputs placeholder="Address" value ={address} onChange={(e)=>setAddress(e.target.value)}/>
      <Inputs placeholder="School Origin" value ={schoolOrigin} onChange={(e)=>setSchoolorigin(e.target.value)}/>
      <Inputs placeholder="The Major You Will Choose" value ={chooseMajor} onChange={(e)=>setChoosemajor(e.target.value)}/>
      <br/>
      <Button type="button" onClick={onSubmit} className="btn btn-primary btn-customized">Submit</Button>
      </Form>
      </Container>
      <Container style={{flex: "1 0 1px"}}/>
    </div>
    </div></div></center>
    )
}

export default Register