import React, { Component } from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import {Container, Label, Form, Item} from 'native-base'

// import IndexScreen from './src/components/IndexScreen';

export default class HomeScreen extends Component {

  render() {
    return (
        <Container style={container}>
          <Form style={logoFormStyle}> 
            <Image source={require('../img/logo.png')} />
          </Form>
          <Form style={sloganStyle}>
            <Form style={{flex:1}}>
              <Label style={{textAlign: 'center'}}>Todos os serviços na palma de sua mão</Label>
              <Item onPress={() => alert('foi')} style={associatedStyle}>
                <Image source={require('../img/callAssociated.png')} />
              </Item>
            </Form>
          </Form>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sloganStyle: {
    flex: 2,
  },
  logoFormStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  associatedStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const {container, logoFormStyle, associatedStyle, sloganStyle} = styles