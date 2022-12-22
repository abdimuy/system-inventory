import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import {
  Container,
  Button
} from '../../atoms';

const SearchInput = ({ state, getData }) => {
  const [search, setSearch] = state;

  return (
    <Container styleParams={{flexDirection: 'row'}}>
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        onChangeText={setSearch}
      />
      <Button text="Buscar" onPress={getData} stylesParams={{width: 80}} />
    </Container>
  )
}

export default SearchInput