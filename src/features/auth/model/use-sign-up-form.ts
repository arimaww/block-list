import { ROUTES } from "@/shared/api/constants/routes";
import { authControllerSignUp } from "@/shared/api/generated";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";


export function useSignUpForm () {
    
    const router = useRouter()

    const {register, handleSubmit} = useForm<{
        email: string,
        password: string
    }>()

    const signUpMutation = useMutation({
        mutationFn: authControllerSignUp,
        onSuccess(){
            router.push(ROUTES.HOME)
        }
    })

    const errorMessage = signUpMutation.error ? 'Sign Up failed' : undefined

    return {
        register,
        handleSubmit: handleSubmit(data => signUpMutation.mutate(data)),
        errorMessage,
        isPending: signUpMutation.isPending
    }
}