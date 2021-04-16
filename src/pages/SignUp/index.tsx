import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import TextSubHeader from '../../components/TextSubHeader';
// import Button from '../../components/Button';

import Button from '~/components/Button';

import { Container, Text, Down } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <TextSubHeader
          header="Welcome!"
          description="Please provide following details for your new account"
        />
        <Input name="name" placeholder="Full Name" />
        <Input name="email" placeholder="Email Address" />
        <Input name="password" placeholder="Password" />
        <Text>
          By creating your account you agree with to our Terms and Conditions.
        </Text>
        <Button onPress={() => navigation.navigate('SignIn')}>Sign Up</Button>
      </Container>
      <Down>
        <Button onPress={() => navigation.navigate('SignUpPhone')}>
          Sign up with Phone Number
        </Button>
      </Down>
    </>
  );
};

export default SignUp;
