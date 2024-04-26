import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  // Mock data for IP outage display
  const mockData = [
    { ip: '192.168.1.1', status: 'Active', location: '12345' },
    { ip: '192.168.1.2', status: 'Inactive', location: '12345' },
    { ip: '192.168.1.3', status: 'Active', location: '12345' },
    // ... more data
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Box>
              <p>IP Outage Tracker</p>
            </Box>
            {/* Main content area for IP outage data */}
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>IP Address</Th>
                  <Th>Status</Th>
                  <Th>Location (Zip Code)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {mockData.map((data, index) => (
                  <Tr key={index}>
                    <Td>{data.ip}</Td>
                    <Td>{data.status}</Td>
                    <Td>{data.location}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
