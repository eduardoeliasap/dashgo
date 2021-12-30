import { Button, Icon } from "@chakra-ui/react";
import { ElementType } from "react";

interface EditButtonProps {
    icon: ElementType,
    title?: string;
}

export function EditButton({ icon, title = "Editar" }: EditButtonProps ) {
    return (
        <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="purple"
            leftIcon={<Icon as={icon} fontSize="16" />}
        >{title}</Button>
    );
}