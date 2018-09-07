import React, { Component } from "react"
import { StyleSheet, Text, View, Image} from "react-native"
import {Container, Label, Form, Input, Item} from 'native-base'

export default class Login extends Component {

  render() {

    return (
        <Container style={container}>
        <Form style={logoFormStyle}> 
          <Image source={require('../../img/logo.png')} />
        </Form>
        <Form style={loginStyle}>
            <Form style={{flex:1}}>
                <Label style={{textAlign: 'center'}}>Botoes de Teste</Label>
            </Form>
            <Form style={{flex: 2}}>
                <Item>
                    <Input placeholder='Email' />
                </Item>
                <Item>
                    <Input placeholder='Senha' />
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
  loginStyle: {
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

const {container, logoFormStyle, associatedStyle, loginStyle} = styles