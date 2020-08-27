import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const List = styled.View`
  padding: 8px 0 0;
`;

export const ChannelContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  margin-bottom: 25px;
  padding-right: 14px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  background: ${colors.tag};
  height: 48px;
  width: 48px;
  border-radius: 24px;
`;

export const Column = styled.View`
  margin-left: 10px;
`;

export const Username = styled.Text`
 color: ${colors.black};
 font-family: roboto_500;
 font-size: 16px;
`;

export const Info = styled.Text`
  color: ${colors.gray};
  font-size: 13px;
  margin-top: 1px;
`;

export const RightSide = styled.View``;

export const WhiteCircle = styled.View`
  background: ${colors.black};
  height: 9px;
  width: 9px;
  border-radius: 4.5px;
  opacity: 0.85;
`;
