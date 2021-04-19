import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Inputs = ({label, tempText, text, setText}) => {
  return (
    <View style={{marginVertical: 7}}>
      <Text style={{marginBottom: 5, fontWeight: 'bold'}}>{label}</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderRadius: 10,
          paddingVertical: 15,
          paddingLeft: 10,
          borderColor: '#C4C4C4',
        }}
        placeholder={tempText}
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

module.exports = Inputs;
