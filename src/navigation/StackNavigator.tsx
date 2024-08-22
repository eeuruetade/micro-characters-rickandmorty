import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListCharactersScreen} from '../screens/ListCharactersScreen';
import {CharacterScreen} from '../screens/CharacterScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ListCharacters">
      <Stack.Screen
        name="ListCharacters"
        component={ListCharactersScreen}
        options={() => ({
          headerLeft: () => null,
          title: 'List Characters',
        })}
      />
      <Stack.Screen
        name="Character"
        component={CharacterScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('ListCharacters')}
              title="Return"
              color="#019DF4"
            />
          ),
          headerLeft: () => null,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
