import {useNavigation} from '@react-navigation/native';
import axios from 'redaxios';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';

export const ListCharactersScreen = () => {
  const navigation = useNavigation();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener personajes
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // onPress={() => navigation.navigate('Character', {character: item})}

  const renderItem = ({item}: any) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Button
        color={'#019DF4'}
        title="View..."
        onPress={() => navigation.navigate('Character', {character: item})}
      />
    </View>
  );

  return (
    <View>
      <FlatList
        data={characters}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  viewCharacter: {
    color: '#3b5998',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 18,
    color: '#e1e1e1',
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
