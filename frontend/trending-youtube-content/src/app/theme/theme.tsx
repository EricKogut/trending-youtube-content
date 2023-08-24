import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      gradientStart: {
        default: '#9e5ffc',
      },
      gradientEnd: {
        default: '#1ae5fc',
      },
    },
  },
});

export default theme;
