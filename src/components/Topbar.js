import React from 'react';
import {Appbar} from 'react-native-paper';
import {COLORS} from '../config/Colors';

const Topbar = (props) => {
  return (
    <Appbar.Header style={{backgroundColor: COLORS.SECONDARY}}>
      {props.left && (
        <Appbar.Action
          icon={props.left.icon ? props.left.icon : 'menu'}
          onPress={props.left.onPress}
        />
      )}
      <Appbar.Content title={props.title} />
      {props.right && (
        <Appbar.Action icon={props.right.icon} onPress={props.right.onPress} />
      )}
    </Appbar.Header>
  );
};

export default Topbar;
