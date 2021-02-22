import React from 'react';
import {View, StyleSheet} from 'react-native';

function Separator() {
  return <View style={StyleSheet.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: 1,
    borderColor: '#888888',
  },
});

export default Separator;
