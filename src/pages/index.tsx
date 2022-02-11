import { Button, Flex, InputGroup, InputRightElement, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input';
import React from 'react';

type SignInFormData = {
    email: string;
    password: string;
}

const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('Email-inválido'),
    password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signInFormSchema)
    });

    const { errors } = formState;

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(values);  
    }

    return (
        <Flex 
            w="100vh" 
            h="100vh" 
            alignItems="center" 
            justifyContent="center"
        >
            <Flex 
                as="form" 
                w="100%" 
                maxWidth={360} 
                bg="gray.800" 
                p="8" // rem
                borderRadius={8} // pixels
                flexDir="column"
                onSubmit={handleSubmit(handleSignIn)}
            >
                <Stack spacing="4">    
                    {/* <FormLabel htmlFor="email"></FormLabel>                 */}                    
                        <Input 
                            name="email" 
                            type="email" 
                            label="E-mail" 
                            error={errors.email}
                            {...register('email')} 
                        />
                        <InputGroup size='md'>
                            <Input 
                                name="password" 
                                type={show ? 'text' : 'password'} 
                                label="Senha" 
                                error={errors.password} 
                                {...register('password')} 
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' mt={55} size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                </Stack>

                <Button  type='submit' mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting} >Entrar</Button>
            </Flex>
        </Flex>
    )
}