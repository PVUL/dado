import { Heading, VStack } from '@chakra-ui/react';
import { Window, Launcher } from '@relaycc/receiver';


const DAO = (props:any) => {
  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        Dado
      </Heading>
      <div className="App">
      // The `wallet` props here come from whatever wallet connect system you are already using.
      <Window />
      <Launcher peerAddress={props.address} />
    </div>
    </VStack>
  );
};

export default DAO;
