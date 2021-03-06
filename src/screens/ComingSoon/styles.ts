import Constants from 'expo-constants';
import { Platform } from 'react-native';

import styled from 'styled-components/native';

import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;


export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: ${colors.primary};
  padding-top: ${statusBarHeight + 'px'};
`;

export const Heading = styled.Text`
  color: ${colors.purple};
  font-family: roboto_500;
  font-size: 30px;
`;