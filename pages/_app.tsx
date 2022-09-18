import { ChakraProvider } from '@chakra-ui/react';
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { extendTheme } from '@chakra-ui/react';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    let handleResize;
    if (typeof global.window !== 'undefined') {
      handleResize = function () {
        setWindowSize({
          width: global.window.innerWidth,
          height: global.window.innerHeight,
        });
      };

      global.window.addEventListener('resize', handleResize);

      handleResize();
    }
  }, []);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <WagmiConfig client={client}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component width={windowSize.width} height={windowSize.height} {...pageProps} />
        </SessionProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
};

export default MyApp;
