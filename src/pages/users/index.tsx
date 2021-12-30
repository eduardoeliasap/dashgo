import { Box, Button, Checkbox, Flex, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { EditButton } from "../../components/Form/EditButton";
import { Header } from "../../components/Header/index";
import { HeadingForm } from "../../components/HeadingForm";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    const isWrireVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header />
                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />

                    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                        <Flex mb="8" justify="space-between" align="center">                            
                            <HeadingForm title="Usuários" />

                            <Link href="/users/create">
                                <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="pink"
                                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                >Criar usuário</Button>
                            </Link>
                            
                        </Flex>
                        <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                        <Checkbox colorScheme="pink" />
                                    </Th>
                                    <Th>Usuários</Th>
                                    { isWrireVersion && <Th>Data de cadastro</Th> }
                                    <Th width={8}>Editar</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td px={["4", "4", "6"]}>
                                        <Checkbox colorScheme="pink" />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">User name</Text>
                                            <Text fontSize="sm" color="gray.300">User email</Text>
                                        </Box>
                                    </Td>
                                    { isWrireVersion && <Td><Text>28/12/2021</Text></Td> }
                                    <Td>
                                    <EditButton icon={RiPencilLine} />                                    
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>

                        <Pagination />
                    </Box>
                </Flex>
        </Box>
    )
}