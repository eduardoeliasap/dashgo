import { Icon, Link as ChackraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface navLinkProps extends ChakraLinkProps {
    icon: ElementType,
    children: string,
    href: string,
}

export function NavLink({ icon, children, href, ...rest }: navLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChackraLink display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="mediun">{children}</Text>
            </ChackraLink>
        </ActiveLink>
    );
}