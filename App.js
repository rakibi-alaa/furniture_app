import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Home from './src/screens/home';
const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen
          name="Detail"
          component={DetailScreen}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [`item.${item.id}.photo`];
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;


