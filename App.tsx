import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ListCharactersScreen} from './src/screens/ListCharactersScreen';
import {CharacterScreen} from './src/screens/CharacterScreen';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
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
    // </NavigationContainer>
  );
};

export default App;
