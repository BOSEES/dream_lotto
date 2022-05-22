import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from "./src/navigation/navigation";
import { RecoilRoot } from "recoil"; 

const App = () => {

  return (
    <NavigationContainer >
      <RecoilRoot>
        <MainNavigator />
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
