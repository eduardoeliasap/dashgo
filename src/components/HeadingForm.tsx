import { Heading } from "@chakra-ui/react";

interface HeadingFormProps {
    title: string;
    size?: string;
    fontWeight?: string
}

export function HeadingForm({ title, size="lg", fontWeight="normal", ...rest }: HeadingFormProps) {
    return(
        <Heading size={size} fontWeight={fontWeight} {...rest}>{title}</Heading>
    );
}