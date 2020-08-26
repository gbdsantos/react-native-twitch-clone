import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const List = styled.View`
  padding: 8px 0 24px;
`;

export const StreamContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;

  margin-bottom: 24px;
  margin-right: 24px;
`;

export const StreamColumn = styled.View`
  flex: 1;
  margin-left: 11px;
`;

export const StreamThumbnail = styled.Image`
  height: 119px;
  width: 119px;
`;

export const StreamRow = styled.View`
  height: 66px;
  justify-content: space-between;
`;

export const StreamHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StreamAvatar = styled.View`
  background: ${colors.black};
  height: 20px;
  width: 20px;
  border-radius: 10px;
`;

export const StreamUsername = styled.Text`
  color: ${colors.black};
  font-family: roboto_700;
  margin-left: 5px;
`;

export const StreamDescription = styled.Text`
  color: ${colors.black};
`;

export const StreamCategory = styled.Text`
  color: ${colors.gray};
  font-family: roboto_500;
`;

export const TagRow = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const TagView = styled.View`
  background: ${colors.tag};
  margin-right: 5px;
  padding: 2px 8px;
  border-radius: 10px;
`;

export const TagText = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 13px;
`;
