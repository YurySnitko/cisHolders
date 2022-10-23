import { createTheme } from '@rneui/themed';

export const theme = createTheme({
  darkColors: {
    // primary: '#678eb5',
    primary: '#4e8098',
    // secondary: '#7bcace',
    secondary: '#00a9a5',
  },
  mode: 'dark',
  components: {
    Button: {
      titleStyle: {
        fontFamily: 'Montserrat-SemiBold',
      },
    },
  },
});
