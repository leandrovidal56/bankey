import React from 'react';
// import { TextInputProps } from 'react-native';

import { Container, Header, Description } from './styles';

interface TextProps {
  header: string;
  description: string;
}

const TextSubHeader: React.FC<TextProps> = ({ header, description }) => {
  return (
    <Container>
      <Header> {header} </Header>
      <Description>{description}</Description>
    </Container>
  );
};
export default TextSubHeader;
