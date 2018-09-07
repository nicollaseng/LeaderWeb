import React, { Component } from "react"
import { StyleSheet, Text, View, Image} from "react-native"
import {Container, Label, Form, Item} from 'native-base'
import Swiper from 'react-native-swiper'

import Service from './components/Service'
import Professionals from './components/Professionals'
import Comfort from './components/Comfort'

export default class HomeScreen extends Component {

  render() {
    return (
      <Swiper>
        <Service />
        <Professionals />
        <Comfort />
      </Swiper>
    )
  }
}