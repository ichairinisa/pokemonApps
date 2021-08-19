import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetPokemon} from "../actions";
import _ from "lodash";
import { View, Image } from "react-native";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector(state => state.Pokemon);
  React.useEffect(() => {
    dispatch(GetPokemon(pokemonName))
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return(
        <View >
          <View >
            <View>Sprites</View>
            <Image source={pokeData.sprites.front_default} alt=""/>
            <Image source={pokeData.sprites.back_default} alt=""/>
            <Image source={pokeData.sprites.front_shiny} alt=""/>
            <Image source={pokeData.sprites.back_shiny} alt=""/>
          </View>
          <View >
            <View>Stats</View>
            {pokeData.stats.map(el => {
              return <View>{el.stat.name} {el.base_stat}</View>
            })}
          </View>
          <View >
            <View>Abilities</View>
            {pokeData.abilities.map(el => {
              return <View>{el.ability.name}</View>
            })}
          </View>
        </View>
      )
    }

    if (pokemonState.loading) {
      return <View>Loading...</View>
    }

    if (pokemonState.errorMsg !== "") {
      return <View>{pokemonState.errorMsg}</View>
    }

    return <View>error getting pokemon</View>
  }

  return(
    <View >
      <View>{pokemonName}</View>
      {ShowData()}
    </View>
  )
};

export default Pokemon