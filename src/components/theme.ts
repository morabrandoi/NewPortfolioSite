import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};

const styles = {
  global: {
    body: {
      transitionProperty: 'all',
      transitionDuration: 'normal',
    },
  },
};

const theme = extendTheme({ config, styles });

export default theme;
