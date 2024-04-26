import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Grid, theme, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function App() {
  const [responsiveIPs, setResponsiveIPs] = useState([]);

  // Fetch responsive IPs on component mount
  useEffect(() => {
    // Fetch the responsive IPs from the exposed server URL
    fetch('https://ip-outage-tracker-kmcrtumk.devinapps.com/responsive_ips.txt')
      .then(response => response.text())
      .then(text => {
        const ips = text.split('\n').map(ip => ({ ip, status: 'Active', location: 'Unknown' })); // Assuming all IPs are active for now
        setResponsiveIPs(ips);
      });
  }, []);

  // Mock data for time series visualization
  const timeSeriesData = [
    { time: '2024-04-26 01:00', activeIPs: 120 },
    { time: '2024-04-26 05:00', activeIPs: 110 },
    { time: '2024-04-26 09:00', activeIPs: 100 },
    { time: '2024-04-26 13:00', activeIPs: 130 },
    // ... more data
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
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
                {responsiveIPs.map((data, index) => (
                  <Tr key={index}>
                    <Td>{data.ip}</Td>
                    <Td>{data.status}</Td>
                    <Td>{data.location}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            {/* Time series visualization */}
            <ResponsiveContainer width="95%" height={400}>
              <LineChart
                width={500}
                height={300}
                data={timeSeriesData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="activeIPs" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
