import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Welcome from '../screens/welcome';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Welcome'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Welcome" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;