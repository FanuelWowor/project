import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Buttons from '../../atoms/Buttons';
import Inputs from '../../atoms/Inputs';
import Axios from 'axios';

const Exercise7 = ({ButtonHandler, Button2Handler}) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const saveData = () => {
    const data = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      avatar: '../../../assets/pfp.jpg',
    };
    Axios.post('http://192.168.43.167:3004/users', data);
  };
  const regHandler = () => {
    ButtonHandler();
  }
  const regHandler2 = () => {
    Button2Handler();
  }

  return (
    <View style={{padding: 44}}>
      <Text style={{fontSize: 39, fontWeight: 'bold'}}>Exercise 7</Text>
      <Inputs
        label="Email"
        tempText="Enter email"
        text={email}
        setText={setEmail}
      />
      <Inputs
        label="First Name"
        tempText="Enter first name"
        text={firstName}
        setText={setFirstName}
      />
      <Inputs
        label="Last Name"
        tempText="Enter last name"
        text={lastName}
        setText={setLastName}
      />
      <Buttons label="Save Data" handler={saveData} />
      <Buttons label="List" handler={regHandler} />
      <Buttons label="Back" handler={regHandler2} />
    </View>
  );
};

module.exports = Exercise7;
