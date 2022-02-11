import { Box, Button, Divider, Flex, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import { SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header/index";
import { HeadingForm } from "../../components/HeadingForm";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;    
    password_confirmation: string;
}

const createFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório').min(3, 'Mínimo de 3 caracteres'),
    email: yup.string().required('E-mail obrigatório').email('Email-inválido'),
    password: yup.string().required('Senha obrigatória'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'Senhas não conferem')
})

export default function CreateUser() {
    const [inputNameValue, setInputNameValue] = useState('');
    const [inputEmailValue, setInputEmailValue] = useState('');
    const [inputPasswordValue, setInputPasswordValue] = useState('');
    const [inputPasswordConfirmationValue, setInputPasswordConfirmationValue] = useState('');

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createFormSchema)
    });

    const handleCreate: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    const handleNameInput = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInputNameValue(e.target.value);
    };

    const handleEmailInput = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInputEmailValue(e.target.value);
    };

    const handlePasswordInput = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInputPasswordValue(e.target.value);
    };

    const handlePasswordConfirmationInput = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInputPasswordConfirmationValue(e.target.value);
    };

    function submitHandleField() {
        console.log(inputNameValue);
        console.log(inputEmailValue);
        console.log(inputPasswordValue);
        console.log(inputPasswordConfirmationValue);
    }

    function resetInputField() {
        setInputNameValue("");
        setInputEmailValue("");
        setInputPasswordValue("");
        setInputPasswordConfirmationValue("");
    };

    return (
        <Box>
            <Header />
                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />

                    <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit(handleCreate)} >
                        <HeadingForm title="Criar usuário" />

                        <Divider my="6" borderColor="gray.700" />

                        <VStack spacing="8">
                            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                                <Input name="name" label="Nome completo" value={inputNameValue} onChange={handleNameInput}  />
                                <Input name="email" label="Email" value={inputEmailValue} onChange={handleEmailInput} />  
                                
                            </SimpleGrid>
                            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                                <Input name="password" type="password" label="Senha" value={inputPasswordValue} onChange={handlePasswordInput} />
                                <Input name="password_confirmation" type="password" label="Confirmação de senha" value={inputPasswordConfirmationValue} onChange={handlePasswordConfirmationInput} />
                            </SimpleGrid>
                        </VStack>
                        <Flex mt="8" justify="flex-end">
                            <HStack spacing="4">
                                <Button colorScheme="whiteAlpha" onClick={resetInputField} width="100px">Cancelar</Button>
                                <Button type="submit" colorScheme="pink" width="100px" onClick={submitHandleField} isLoading={formState.isSubmitting}>Gravar</Button>
                            </HStack>

                        </Flex>
                    </Box>
                </Flex>
        </Box>
    )
}