import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  outside: {
    flex: 1,
    width: '100%',
  },
  modal: {
    backgroundColor: '#fff',
    height: Dimensions.get('window').height * 0.8,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  filter: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000aa',
    position: 'absolute',
  },
});
