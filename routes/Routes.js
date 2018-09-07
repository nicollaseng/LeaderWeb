import React from 'react'
import {Router, Stack, Scene }from 'react-native-router-flux'

import Login from '../src/components/Login'
import HomeScreen from  '../src/HomeScreen'

export default Routes = () => (
    <Router>
        <Stack key="root">
            <Scene key="homeScreen" component={HomeScreen} title="HomeScreen" hideNavBar/>
            <Scene key="login" component={Login} title="Login" hideNavBar initial/>
        </Stack>
    </Router>
)