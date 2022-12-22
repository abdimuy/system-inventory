import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../../styles/colors';

export const createStylesButton = (params = {}) => {
  const {
    backgroundColor = PRIMARY_COLOR,
    borderColor = 'transparent',
    borderRadius = 5,
    borderWidth = 0,
    height = 50,
    width = 200,
    marginHorizontal = 10,
    marginVertical = 7,
    paddingHorizontal = 10,
    paddingVertical = 5,
    textColor = '#fff',
    textSize = 20,
    textAlign = 'center',
    justifyContent = 'center',
    alignItems = 'center',
  } = params;

  return StyleSheet.create({
    button: {
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderRadius: borderRadius,
      borderWidth: borderWidth,
      justifyContent: justifyContent,
      alignItems: alignItems,
      height: height,
      // width: width,
      minWidth: width,
      marginHorizontal: marginHorizontal,
      marginVertical: marginVertical,
      paddingHorizontal: paddingHorizontal,
      paddingVertical: paddingVertical,
      textAlign: textAlign,
    },
    text: {
      color: textColor,
      fontSize: textSize,
      // fontWeight: textWeight,
    }
  });
}