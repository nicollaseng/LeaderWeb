import React, { Component } from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import {Container, Label, Form} from 'native-base'

// import IndexScreen from './src/components/IndexScreen';

export default class HomeScreen extends Component {

  render() {
    return (
        <Container style={container}>
          <Form style={logoFormStyle}> 
            <Image source={require('../img/logo.png')} />
          </Form>
          <Form style={{flex: 2}}>

          </Form>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoFormStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const {container, logoFormStyle} = styles