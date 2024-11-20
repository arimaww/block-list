import { ROUTES } from '@/shared/api/constants/routes';
import { authControllerSignIn } from '@/shared/api/generated';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export function useSignInForm() {
    const router = useRouter();

    const { register, handleSubmit } = useForm<{
        email: string;
        password: string;
    }>();

    const signInMutation = useMutation({
        mutationFn: authControllerSignIn,
        onSuccess() {
            router.push(ROUTES.HOME);
        },
    });

    const errorMessage = signInMutation.error ? 'Sign in failed' : undefined;

    return {
        register,
        handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
        errorMessage,
        isPending: signInMutation.isPending,
    };
}
