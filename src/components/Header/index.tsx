import React from 'react';
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons';

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';

import colors from '../../styles/colors';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons
            color={colors.black}
            name="notifications-none"
            size={26}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            color={colors.black}
            name="message-outline"
            size={26}
          />
        </Button>

        <Button>
          <Feather
            color={colors.black}
            name="search"
            size={26}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;