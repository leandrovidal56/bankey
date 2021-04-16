import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputText } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <InputText
        keyboardAppearance="dark"
        placeholderTextColor="black"
        {...rest}
      >
        {name}, {icon}
      </InputText>
    </Container>
  );
};

export default Input;
