import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background: #ffffff;
  padding: 0 30px;
  flex: 1;
  padding: 16px 30px ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 13px;
  margin-top: 21px;
`;

export const Down = styled.View`
  margin-bottom: 150px;
  padding: 0 30px;
  background: #ffffff;
`;
