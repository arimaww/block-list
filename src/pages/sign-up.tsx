import { SignUpForm } from '@/features/auth/ui/sign-up-form';
import { UiFormPageLayout } from '@/shared/ui/layouts/ui-form-page-layout';
import { UiHeader } from '@/shared/ui/ui-header';

export function SignUp() {
    return (
        <UiFormPageLayout
            title="Sign Up"
            form={<SignUpForm />}
            header={<UiHeader />}
        />
    );
}
