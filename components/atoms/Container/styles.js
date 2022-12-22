import { StyleSheet } from 'react-native';
export const createStyles = (styleParams = {}) => {
  const {
    padding = 5,
    margin = 5,
    flexDirection = 'column',
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    width = 'auto',
    height = 'auto',
    borderColor = 'transparent',
    borderWidth = 0,
    flex = 0,
    borderRadius = 5,
  } = styleParams;
  return StyleSheet.create({
    container: {
      flex: flex,
      margin: margin,
      width: width,
      height: height,
      padding: padding,
      flexDirection: flexDirection,
      justifyContent,
      alignItems,
      borderColor: borderColor,
      borderWidth: borderWidth,
      borderRadius: borderRadius,
    },
    scrollView: {
      flex: flex,
      margin: margin,
      width: width,
      height: height,
      padding: padding,
      flexDirection: flexDirection,
      // justifyContent,
      borderColor: borderColor,
      borderWidth: borderWidth,
      borderRadius: borderRadius,
    }
  });
};