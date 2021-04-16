import React from 'react';
import { StatusBar, Image } from 'react-native';
import 'react-native-gesture-handler';

import { StyledView, Text, SubText } from './styles';

import Logo from '../../assets/bro.svg';

const Home: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <StyledView>
        <Text>Bankey</Text>
        {/* <Button onPress={() => navigation.navigate('Splash')}>Splash</Button> */}
        <SubText>Your friendly bank</SubText>
        <Image source={Logo} />
      </StyledView>
    </>
  );
};

export default Home;
