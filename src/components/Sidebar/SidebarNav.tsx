import { Stack } from "@chakra-ui/react";
import { RiContrastLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine, RiUserAddLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">           
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon={RiContrastLine} href="/users">Usuários</NavLink>                
                <NavLink icon={RiUserAddLine} href="/users/create">Novo usuário</NavLink>                
            </NavSection>
            <NavSection title="AUTOMAÇÃO">
                <NavLink icon={RiInputMethodLine} href="/">Formulários</NavLink>
                <NavLink icon={RiGitMergeLine} href="/">Automação</NavLink>                
            </NavSection>            
        </Stack>
    );
}