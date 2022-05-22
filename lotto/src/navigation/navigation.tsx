import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen
import { Splash } from "../screen/Splash";
import { Home } from "../screen/Home";
import { Loader } from '../screen/Loader';
import { Numbers } from "../screen/Numbers" 

const defaultScreenOption = {
    headerShown: false,
    gestureEnabled: false
}

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={defaultScreenOption}>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Loader" component={Loader} />
            <Stack.Screen name="Numbers" component={Numbers} />
        </Stack.Navigator>
    );
};

export default Navigation;