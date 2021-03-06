import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAm8W1O7eCai0zaqaSLkheGElyLwajJ3JY',
      authDomain: 'auth-87f79.firebaseapp.com',
      databaseURL: 'https://auth-87f79.firebaseio.com',
      projectId: 'auth-87f79',
      storageBucket: 'auth-87f79.appspot.com',
      messagingSenderId: '701060929041'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
        }
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
