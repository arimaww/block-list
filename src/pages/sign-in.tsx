import { SignInForm } from '@/features/auth/ui/sign-in-form';
import { UiFormPageLayout } from '@/shared/ui/layouts/ui-form-page-layout';
import { UiHeader } from '@/shared/ui/ui-header';

export function SignIn() {
    return (
        <UiFormPageLayout
            title="Sign In"
            form={<SignInForm />}
            header={<UiHeader />}
        />
    );
}
