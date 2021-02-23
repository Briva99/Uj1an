import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home/Index'
import Addusers from '../pages/Addusers/Index'
import DetailKontak from '../pages/DetailKontak/Index';

const Stack =  createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Addusers" component={Addusers}  />
            <Stack.Screen name="Addusers" component={DetailKontak}  />
        </Stack.Navigator>
    )
}

export default Router
