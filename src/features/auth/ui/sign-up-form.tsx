import { ROUTES } from '@/shared/api/constants/routes';
import { UiButton } from '@/shared/ui/ui-button';
import { UiLink } from '@/shared/ui/ui-link';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { useSignUpForm } from '../model/use-sign-up-form';

export function SignUpForm() {
    
    const {errorMessage, handleSubmit, isPending, register} = useSignUpForm()

    return (
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <UiTextField
                label="Email"
                inputProps={{ ...register('email'), required: true }}
            />

            <UiTextField
                label="Password"
                inputProps={{ ...register('password'), required: true }}
            />

            <UiButton disabled={isPending} variant='primary'>Sign Up</UiButton>

            <UiLink className="text-center" href={ROUTES.SIGN_IN}>Sign In</UiLink>


            {errorMessage && <div className="text-rose-500">{errorMessage}</div>}

        </form>
    );
}
