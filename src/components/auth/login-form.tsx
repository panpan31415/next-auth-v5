import CardWrapper from "@/components/auth/card-wrapper";

export default function LoginForm() {
    return (
        <CardWrapper
            headerLabel='Welcome back'
            backButtonLabel="Don't have an account?"
            backButtonHerf='/auth/register'
            showSocial>
            Login form
        </CardWrapper>
    );
}
