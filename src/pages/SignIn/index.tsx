import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import TextSubHeader from '../../components/TextSubHeader';
import Button from '../../components/Button';

import { Container, Text, TextViewForgot, TextViewSignUp } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TextSubHeader header="Welcome Back!" description="Sign in to continue" />
      <Input name="Email" placeholder="Email" />
      <Input name="Password" placeholder="Password" />
      <TextViewForgot>
        <Text>Forgot Password?</Text>
      </TextViewForgot>
      <Button>Sign in</Button>

      <TextViewSignUp>
        <Text onPress={() => navigation.navigate('SignUp')}>
          Do not thave an account? - Sign Up
        </Text>
      </TextViewSignUp>
    </Container>
  );
};

export default SignIn;
