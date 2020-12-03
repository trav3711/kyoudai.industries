import { theme } from '@chakra-ui/react';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      50: '#fff6da',
      100: '#ffe4ad',
      200: '#ffd27d',
      300: '#ffc04b',
      400: '#ffae1a',
      500: '#e69500',
      600: '#b37300',
      700: '#815300',
      800: '#4e3200',
      900: '#1e1000',
    },
  },
};

export default customTheme;
