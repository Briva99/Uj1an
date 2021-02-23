import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home/Index'
import Addusers from '../pages/Addusers/Index'
import DetailKontak from '../pages/DetailKontak/Index';
import editUser from '../pages/editUser/Index'

const Stack =  createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Addusers" component={Addusers}  options={{title :'Tambah Laporan'}}/>
            <Stack.Screen name="DetailKontak" component={DetailKontak}  options={{title :'Detail Laporan'}}/>
            <Stack.Screen name="editUser" component={editUser} options={{title :'Edit Laporan'}} />
        </Stack.Navigator>
    )
}

export default Router
