import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 7,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    fontSize: 16,
    color: '#000',
  }
  ,
  existencias: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    backgroundColor: PRIMARY_COLOR,
    padding: 5,
    borderRadius: 5,
    minWidth: 50,
  }
});