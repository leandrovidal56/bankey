import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 16px 30px ${16 + getBottomSpace()}px;
  justify-content: space-between;
`;

export const Header = styled.View`
  height: 200px;
`;

export const Content = styled.View`
  height: 250px;
  justify-content: center;
`;

export const Input = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Line = styled.View`
  border-bottom-color: black;
  border-bottom-width: 2px;
  width: 45px;
  margin-right: 5%;
`;
export const Last = styled.View`
  height: 50px;
  justify-content: flex-end;
`;

export const Text = styled.Text`
  /* margin-top: 20px; */
  text-align: center;
  font-size: 15px;
`;
export const TextLink = styled.Text`
  margin-top: 20px;
  color: #7165e3;
  width: 100%;
  text-align: center;
  font-size: 18px;
`;
