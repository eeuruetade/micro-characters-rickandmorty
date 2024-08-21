import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const CharacterScreen = ({route}) => {
  const {character} = route.params;

  return (
    <View style={styles.detailContainer}>
      <Image source={{uri: character.image}} style={styles.detailImage} />
      <Text style={styles.detailText}>Name: {character.name}</Text>
      <Text style={styles.detailText}>Status: {character.status}</Text>
      <Text style={styles.detailText}>Species: {character.species}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 18,
  },
  detailContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  detailImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  detailText: {
    fontSize: 20,
    marginBottom: 10,
  },
});
