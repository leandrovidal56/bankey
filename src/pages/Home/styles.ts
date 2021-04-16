import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: #019;
  padding: 0 30px;
  flex: 1;
  padding: 16px 30px ${16 + getBottomSpace()}px;
`;

export const StyledView = styled.View`
  flex: 1;
  background: #7165e3;
  justify-content: center;
  align-items: center;
  padding: 16px 30px ${16 + getBottomSpace()}px;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 70;
  font-style: normal;
  font-weight: bold;
`;
export const SubText = styled.Text`
  color: #ffffff;
  font-size: 20;
  margin-bottom: 5;
`;
