import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen
import { Splash } from "../screen/Splash";
import { Home } from "../screen/Home";
import { Loader } from '../screen/Loader';
import { Numbers } from "../screen/Numbers";
import { ScreenAdd } from '../screen/ScreenAdd';


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
            <Stack.Screen name="ScreenAdd" component={ScreenAdd} />
            <Stack.Screen name="Loader" component={Loader} />
            <Stack.Screen name="Numbers" component={Numbers} />
        </Stack.Navigator>
    );
};

export default Navigation;