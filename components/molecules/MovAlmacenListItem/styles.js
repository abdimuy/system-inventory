import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    height: 50,
    marginBottom: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
  modal: {
    display: 'flex',
    // flex: 1,
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  }
})