import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import textPokemon from '../../assets/img/pokemon-text.png';


const PokemonList = ({navigation}) => {
  const [pokemons, setPokemons] = useState([]);
  const [searchfeild, setSearchfeild] = useState('');
  useEffect(() => {
    fetchPokemons();
  }, []);
  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons.results));
  };

  return (
    <SafeAreaView>
      <View>
        <View>
          <Image source={textPokemon} style={styles.text} />
        </View>
        
        <View style={styles.searchCont}>
          <TextInput
            style={styles.searchfeild}
            placeholder="Search Pokemons"
            onChangeText={value => setSearchfeild(value)}
            value={searchfeild}
          />
        </View>
        <ScrollView>
          <View style={styles.container}>
            {pokemons
              .filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchfeild.toLowerCase()),
              )
              .map((pokemon, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={index}
                    style={styles.card}
                    onPress={() => navigation.navigate('Details')}>
                    <Image
                      style={{width: 150, height: 150}}
                      source={{
                        uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                      }}
                    />
                    <Text>{pokemon.name}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default PokemonList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    padding: 10,
    height: 150,
    width: 350,
    resizeMode: 'center',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 8,
    padding: 10,
  },
  searchCont: {
    position: 'relative',
    padding: 20,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    zIndex: 1,
    // backgroundColor: 'orange',
  },
  searchfeild: {
    height: 50,
    borderWidth: 1,
    textAlign: 'center',
    width: 350,
    borderRadius: 50,
    borderColor: 'orange',
  },
});
