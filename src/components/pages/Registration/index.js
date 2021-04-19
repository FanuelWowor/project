import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Buttons from '../../atoms/Buttons';
import Inputs from '../../atoms/Inputs';

const Regis = ({Button1Handler, Button2Handler}) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const setPhoneNumberHandler = value => {
    value = value.replace(/\D/g, '');
    setPhoneNumber(value);
  };

  const regHandler2 = () => {
    Button2Handler();
  };

  const regHandler = () => {
    console.log(`Name = ${name}`);
    console.log(`Username = ${userName}`);
    console.log(`Email = ${email}`);
    console.log(`Address = ${address}`);
    console.log(`Phone Number = ${phoneNumber}`);
    Button1Handler();
  };

  return (
    <View style={{padding: 44}}>
      <Text style={{fontSize: 39, fontWeight: 'bold'}}>Registration </Text>
      <Inputs
        label="Name"
        tempText="Masukkan nama lengkap anda"
        text={name}
        setText={setName}
      />
      <Inputs
        label="Username"
        tempText="Masukkan usernama anda"
        text={userName}
        setText={setUserName}
      />
      <Inputs
        label="Email"
        tempText="Masukan email anda"
        text={email}
        setText={setEmail}
      />
      <Inputs
        label="Address"
        tempText="Masukkan alamat anda"
        text={address}
        setText={setAddress}
      />
      <Inputs
        label="Phone Number"
        tempText="Masukkan Phone number anda"
        text={phoneNumber}
        setText={setPhoneNumberHandler}
      />
      <Buttons label="Register" handler={regHandler} />
      <Buttons label="Exercise7" handler={regHandler2} />
    </View>
  );
};

module.exports = Regis;
