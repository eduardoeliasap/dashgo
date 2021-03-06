import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
    isCurrent?: boolean;
    pageNumber: Number;
}

export function PaginationItem({ isCurrent = false, pageNumber }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button size="sm" fontSize="xs" width="4" bg="pink" disabled
                _disabled={{
                     bg: 'pink.500',
                     cursor: 'default'
                }}
            >{pageNumber}</Button>
        )
    }

    return (
        <Button size="sm" fontSize="xs" width="4" bg="gray.700"
                _hover={{
                 bg: 'gray.500'
                }}
        >{pageNumber}</Button>
    )
}