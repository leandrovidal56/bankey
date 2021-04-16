import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 16px 30px ${16 + getBottomSpace()}px;
  width: 100%;
  background-color: #ffffff;
`;

export const TextViewForgot = styled.View`
  align-items: flex-end;
  margin-top: 20px;
  /* justify-content: center; */
`;

export const Text = styled.Text``;

export const TextViewSignUp = styled.View`
  align-items: center;
  margin-top: 20px;
  /* justify-content: center; */
`;
