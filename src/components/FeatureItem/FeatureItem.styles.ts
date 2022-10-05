import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  image: {
    resizeMode: 'contain',
    flex: 0.7,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 0.3,
    paddingHorizontal: 30,
    marginTop: 15,
  },
  title: {
    fontWeight: '300',
    fontSize: 28,
    color: '#493d8a',
    textAlign: 'center',
  },
});
