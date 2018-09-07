import React, { Component } from "react"
import { StyleSheet, TouchableOpacity, Image} from "react-native"
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
                <Item style={{marginBottom: 20}}>
                    <Input placeholder='Senha' />
                </Item>
                <Item style={loginButtonStyle} onPress={() => alert('Login')}>
                    <Image source={require('../../img/loginbutton.png')} />
                </Item>
            </Form>
            <Form style={{flex: 1, alignItems: 'center'}} >
            <TouchableOpacity onPress={() => alert('Login Com Facebook')}>
                <Image source={require('../../img/facebook.png')} />
            </TouchableOpacity>
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
  },
  textLoginButtonStyle: {
    color: '#fff',
    textAlign: 'center',
    padding: 15
  },
  loginButtonStyle: {
      borderColor: 'transparent',
      marginBottom: 20
  }
})

const {container, logoFormStyle, loginStyle, loginButtonStyle} = styles