import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import {GetPokemonList} from '../actions';
import {Link} from 'react-router-dom';
import {View} from 'react-native';
import axios from 'axios';
// import ReactPaginate from "react-paginate";

const PokemonList = props => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList);
  React.useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };
const getPokemon = async () => {
    try {
        dispatch({
          type: "POKEMON_MULTIPLE_LOADING"
        });
    
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
        dispatch({
          type: "POKEMON_MULTIPLE_SUCCESS",
          payload: res.data,
          pokemonName: pokemon
        })
      } catch (e) {
        dispatch({
          type: "POKEMON_MULTIPLE_FAIL",
        })
      }
 }
  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return (
        <View>
          {pokemonList.data.map(el => {
            return (
              <View>
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>View</Link>
              </View>
            );
          })}
        </View>
      );
    }

    if (pokemonList.errorMsg !== '') {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <View>
      {/* <View >
        <p>Search: </p>
        <input type="text" onChange={e => setSearch(e.target.value)}/>
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>Search</button>
      </View> */}
      {/* {ShowData()} */}
      {/* {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )} */}

      <View>
        {(pokemonList.data || []).map(el => {
          return (
            <View>
              <p>{el.name}</p>
              {/* <Link to={`/pokemon/${el.name}`}>View</Link> */}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PokemonList;
