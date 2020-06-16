import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Home from './src/screens/home';
import Product from './src/screens/product';
const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={Home} />
         <Stack.Screen
          name="Product"
          component={Product}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [{
              id:item.id,
              animation: 'fade',
             resize: 'clip',
             align: 'left-top'
            }];
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;


