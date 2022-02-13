import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from "./src/navigation/navigation";

const App = () => {

  return (
    <NavigationContainer >
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
