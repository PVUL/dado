import { FC, ReactNode } from 'react';
import { Container } from '@chakra-ui/react';
import { Header } from 'components/modules';
import Head from 'next/head';

const Default: FC<{ children: ReactNode; pageName: string; width: number; height: number }> = ({
  children,
  pageName,
  width,
  height,
}) => (
  <>
    <Head>
      <title>{`${pageName} | ETH Boilerplate`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />

    <Container
      maxW={width}
      minW={width}
      justifyContent={'center'}
      alignItems={'center'}
      height={height}
      maxH={height}
      as="main"
    >
      {children}
    </Container>
  </>
);

export default Default;
