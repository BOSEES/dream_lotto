import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen
import { Splash } from "../screen/Splash";
import { Home } from "../screen/Home";

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
        </Stack.Navigator>
    );
};

export default Navigation;