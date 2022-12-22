import React from 'react';
import { TextInput, ToastAndroid } from 'react-native';
import { Button, Container } from '../../atoms';
import styles from './styles';

const Input = ({ max = 10, min = 0, cantidad, handleChangeCantArticulos, articuloId }) => {
  const handleInputChange = (type, setValue, value) => {
    if (type === 'increment') {
      if (value + 1 <= max) {
        // setValue(value + 1);
        setValue(articuloId, value + 1);
      } else {
        ToastAndroid.showWithGravityAndOffset(
          'No hay mas existencias',
          1000,
          ToastAndroid.BOTTOM,
          0,
          200
        );
      }
    } else if (type === 'decrement') {
      if (value - 1 >= min) {
        // setValue(value - 1);
        setValue(articuloId, value - 1);
      }
    }
  };

  const changeValueInput = (value) => {
    if (value > max) {
      setValue(max);
    } else if (value < min) {
      setValue(min);
    } else {
      setValue(value);
    };
  };

  return (
    <Container
      styleParams={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Button
        stylesParams={{ width: 40, height: 40, marginVertical: 0, marginHorizontal: 2 }}
        text='-'
        onPress={() => handleInputChange('decrement', handleChangeCantArticulos, cantidad)}
      />
      <TextInput
        value={isNaN(cantidad) ? '' : cantidad.toString()}
        onChangeText={text => changeValueInput(parseInt(text))}
        keyboardType='number-pad'
        dataDetectorTypes={'phoneNumber'}
        textContentType='telephoneNumber'
        style={styles.input}
      />
      <Button
        stylesParams={{ width: 40, height: 40, marginHorizontal: 2, marginVertical: 0 }}
        text='+'
        onPress={() => handleInputChange('increment', handleChangeCantArticulos, cantidad)}
      />
    </Container>
  )
}

export default Input;