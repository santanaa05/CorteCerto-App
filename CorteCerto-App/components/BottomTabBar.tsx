import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export function BottomTabBar() {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity>
        <Ionicons name="home" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="search" size={24} color="#ccc" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="calendar-alt" size={22} color="#ccc" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="person" size={24} color="#ccc" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
