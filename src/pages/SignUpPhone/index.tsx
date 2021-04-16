import React from 'react';
import { useNavigation } from '@react-navigation/native';
import TextSubHeader from '../../components/TextSubHeader';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Center } from './styles';

const SignUpPhone: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TextSubHeader
        header="Mobile Number"
        description="Please enter your phone number. We will send you 4-digit code to verify your account."
      />
      <Center>
        <Input
          keyboardType="numeric"
          name="phone"
          placeholder="+ 00 0000 00000"
        />
        <Button onPress={() => navigation.navigate('SignUpPhoneVerify')}>
          Send Code
        </Button>
      </Center>
    </Container>
  );
};

export default SignUpPhone;
