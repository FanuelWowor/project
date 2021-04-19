import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Card from '../../molecules/Card';
import Axios from 'axios';
import Buttons from '../../atoms/Buttons';

const HomeScreen = ({ButtonHandler}) => {
  const [users, setUsers] = useState([]);
  const regHandler = () => {
    ButtonHandler();
  };
  useEffect(() => {
    //Fetch
    // fetch('https://reqres.in/api/users')
    //   .then(res => res.json())
    //   .then(json => setUsers(json.data));
    //Axios
    if(users.length === 0)
    Axios.get('http://192.168.43.167:3004/users').then(({data}) => {
      setUsers(data)
    }
    );

  }, [users]);

  return (
    <View>
      <Text style={styles.title}> Home Screen </Text>
      <Buttons label="Back" handler={regHandler} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(item => (
          <Card
            key={item.id}
            fullName={`${item.first_name} ${item.last_name}`}
            email={item.email}
            imageUrl={item.avatar}
          />
        ))}
      </ScrollView>
    </View>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 39,
    fontWeight: 'bold',
  },
  card: {
    marginTop: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
});
