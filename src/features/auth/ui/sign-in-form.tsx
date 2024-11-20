import { UiTextField } from '@/shared/ui/ui-text-field';
import { useSignInForm } from '../model/use-sign-in-form';
import { UiButton } from '@/shared/ui/ui-button';
import { UiLink } from '@/shared/ui/ui-link';
import { ROUTES } from '@/shared/api/constants/routes';

export function SignInForm() {
    const { errorMessage, handleSubmit, isPending, register } = useSignInForm();

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <UiTextField
                label="Email"
                inputProps={{ ...register('email'), required: true }}
            />

            <UiTextField
                label="Password"
                inputProps={{ ...register('password'), required: true }}
            />

            <UiButton variant="primary" disabled={isPending}>
                Sign In
            </UiButton>

            <UiLink href={ROUTES.SIGN_UP}>Sign Up</UiLink>

            {errorMessage && (
                <div className="text-rose-400 text-sm">{errorMessage}</div>
            )}
        </form>
    );
}
