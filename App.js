import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Regis from './src/components/pages/Registration';
import Userslist from './src/components/pages/Userlist';
import Exercise7 from './src/components/pages/Exercise7';
import HomeScreen from './src/components/pages/Homescreen';

const App = () => {
  const [page, setPage] = useState('Registration');

  if (page === 'Registration')
    return (
      <View>
        <Regis
          Button1Handler={() => setPage('List')}
          Button2Handler={() => setPage('Exercise7')}
        />
      </View>
    );
  else if (page === 'List')
    return (
      <View>
        <Userslist />
      </View>
    );
  else if (page === 'Exercise7')
    return (
      <View>
        <Exercise7
          ButtonHandler={() => setPage('Homescreen')}
          Button2Handler={() => setPage('Registration')}
        />
      </View>
    );
  else if (page === 'Homescreen')
    return (
      <View>
        <HomeScreen ButtonHandler={() => setPage('Exercise7')} />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  },
});

export default App;
