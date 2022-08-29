import React from 'react';
import SignUp from './src/screens/Auth/SignUp';
import SignIn from './src/screens/Auth/SignIn';
import ForgotPassword from './src/screens/Auth/ForgotPassword';
import SetPassword from './src/screens/Auth/SetPassword';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import Home from './src/screens/Home/index';
import DetailProduct from './src/screens/DetailProduct/index';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{title: 'SignUp'}}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{title: 'SignIn'}}
              />

              <Stack.Screen
                name="SetPassword"
                component={SetPassword}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="DetailProduct"
                component={DetailProduct}
                options={{title: 'Detail'}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      </PersistGate>
    </Provider>
  );
};

export default App;
