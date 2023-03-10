import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  title?: string;
}
const Header: FC<HeaderProps> = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    paddingTop: 0,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 35,
  },
});

export default Header;
