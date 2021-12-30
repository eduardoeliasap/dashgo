import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    const isWrireVersion = useBreakpointValue({
        base: true,
        lg: false,
    });
    return (
        <Stack
            direction={ isWrireVersion ? "column" : "row"}
            mt="8"
            justify="space-between"
            spacing="6"
            align="center"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationItem isCurrent pageNumber={1} />
                <PaginationItem pageNumber={2} />
                <PaginationItem pageNumber={3} />
                <PaginationItem pageNumber={4} />
                <PaginationItem pageNumber={5} />
                <PaginationItem pageNumber={6} />
                <PaginationItem pageNumber={7} />
                <PaginationItem pageNumber={8} />
                <PaginationItem pageNumber={9} />
            </Stack>
        </Stack>
    )
}