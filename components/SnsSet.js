import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ControllContainer from '../actions/ControllContainer';
import getLink from '../actions/getLink';

function SnsSet() {
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <Text onPress={() => {getLink.getLink('Lafayette', 'faceBook')}}>Facebook</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => {getLink.getLink('Lafayette', 'twitter')}}>Twitter</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => {getLink.getLink('Lafayette', 'instargram')}}>Instagram</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => ControllContainer.getInstance().openButton("Main")}>BACK</Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
    </View>
  );
}

export default SnsSet;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#2ecc71',
  },
  gone: {
    width: 100,
    height: 100,
    margin: 5,
    opacity: 0.4,
  },
});
