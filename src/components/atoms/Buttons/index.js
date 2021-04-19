import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Buttons = ({label, handler}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 35,
          marginTop: 25,
          marginVertical: 5,
          backgroundColor: '#C237CE',
          borderRadius: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={handler}>
        <Text style={{color: 'white'}}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

module.exports = Buttons;
