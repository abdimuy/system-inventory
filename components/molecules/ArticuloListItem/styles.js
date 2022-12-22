import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  text: {
    maxWidth: '90%',
    fontSize: 16,
    color: '#000',
  },
  existencias: {
    width: 50,
    height: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    // borderWidth: 1,
    // borderColor: PRIMARY_COLOR,
    backgroundColor: '#6146c6cc',
    margin: 5,
    borderRadius: 5,
    color: '#fff',
  },
  selectedItem: {
    // backgroundColor: PRIMARY_COLOR,
    backgroundColor: '#bfb2ed',
  }
});