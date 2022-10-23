import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0a1527',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 120,
    alignItems: 'center',
  },
  submitButton: {
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
