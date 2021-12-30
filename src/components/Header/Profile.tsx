import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({showProfileData}: ProfileProps) {
    return (
        <Flex
            align="center"                    
        >
            {showProfileData && (
                <Box m="4" textAlign="right">
                    <Text>Eduardo Elias</Text>
                    <Text color="gray.300" fontSize="small">eduardo.eliasap@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Eduardo Elias Alves Pereira" src="https://github.com/eduardoeliasap.png" />
        </Flex>
    )
}