import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header/index";
import { Sidebar } from "../components/Sidebar";
const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const state = {
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
            show: false,
        },            
        forecolor: theme.colors.gray[500]
      },
      grid: {
            show: false
        },              
      xaxis: {
        x: {
            type: "category" as const,
          },
        axisBorder: {
                    color: theme.colors.gray[600]
                },
                axisTicks: {
                    color: theme.colors.gray[600]
                },
        categories: [
            '03-18',
            '03-19',
            '03-20',
            '03-21',
            '03-22',
            '03-23',
            '03-24',
        ]
      },      
    },
    series: [
      {
        name: "series-1",
        data: [31, 40, 23, 89, 90, 87, 89]
      }
    ]
};    

const series = [
    { name: 'serie1', data: [31, 40, 23, 89, 90, 87, 89 ]}
]

export default function Dashboard() {
    return (
        <Flex
            direction="column" h="100vh"
        >
            <Header />

            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">Inscritos na semana</Text>
                        <Chart options={state.options} series={state.series} type="area" height={160} />
                    </Box>
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart options={state.options} series={state.series} type="area" height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
        
    )
}