import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/Button';
import TextSubHeader from '../../../components/TextSubHeader';
import {
  Container,
  Text,
  TextLink,
  Content,
  Last,
  Input,
  Line,
  Header,
} from './styles';

const Verify: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <TextSubHeader
          header="Verify Account"
          description="Enter 4-digit Code we have sent to at + 000 0000 0000"
        />
      </Header>
      <Content>
        <Input>
          <Line />
          <Line />
          <Line />
          <Line />
        </Input>
        <Text>Didn`t received the code</Text>
        <TextLink>Resend Code</TextLink>
      </Content>
      <Last>
        <Button onPress={() => navigation.navigate('CreatedAcount')}>
          Proced
        </Button>
        <Text>
          By clicking you agree to our <TextLink>Pricacy Police</TextLink>
        </Text>
        <Text>
          our <TextLink>Teams and Conditions</TextLink>
        </Text>
      </Last>
    </Container>
  );
};

export default Verify;
