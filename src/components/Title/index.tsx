import React from 'react';

import { Container } from './styles';

import colors from '../../styles/colors';

const Title: React.FC = ({ children }) => {
  return <Container> {children}</Container>;
};

export default Title;