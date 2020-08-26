import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  
`;

export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px; 
`;

export const CategoryContainer = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const CategoryImage = styled.Image`
  height: 130px;
  width: 98px;
`;

export const CategoryName = styled.Text`
  color: ${colors.black};
  font-family: roboto_700;
  font-size: 13.5px;
  margin-top: 5px;
  max-width: 98px;
`;

export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RedCircle = styled.View`
    background: ${colors.red};
    height: 9px;
    width: 9px;
    border-radius: 4.5px;
`;

export const Info = styled.Text`
  color: ${colors.gray};
  font-family: roboto_500;
  margin-left: 4px;
  padding-bottom: 1px;
`;
