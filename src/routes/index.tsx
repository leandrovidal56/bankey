import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../pages/Splash';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import SignUpPhone from '../pages/SignUpPhone';
import SignUpPhoneVerify from '../pages/SignUpPhone/Verify';
// import CreatedAcount from '../pages/CreatedAcount';

const Open = createStackNavigator();

const OpenRoutes: React.FC = () => (
  <Open.Navigator headerMode="none" initialRouteName="Home">
    <Open.Screen name="Splash" component={Splash} />
    <Open.Screen name="Home" component={Home} />
    <Open.Screen name="SignUp" component={SignUp} />
    <Open.Screen name="SignIn" component={SignIn} />
    <Open.Screen name="SignUpPhone" component={SignUpPhone} />
    <Open.Screen name="SignUpPhoneVerify" component={SignUpPhoneVerify} />
    {/* <Open.Screen name="CreatedAcount" component={CreatedAcount} /> */}
  </Open.Navigator>
);

export default OpenRoutes;
