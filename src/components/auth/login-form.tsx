"use client";
import CardWrapper from "@/components/auth/card-wrapper";
import { LoginFormValues } from "@/lib/types";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import EmailField from "@/components/auth/email-field";
import PasswordField from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import FormError from "@/components/form-error";
import FormSuccess from "../form-success";

export default function LoginForm() {
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: LoginFormValues) => {};

    return (
        <CardWrapper
            headerLabel='Welcome back'
            backButtonLabel="Don't have an account?"
            backButtonHerf='/auth/register'
            showSocial>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(() => {
                        console.log("form submit function");
                    })}
                    className='space-y-6'>
                    <div className='space-y-4'>
                        <EmailField control={form.control} />
                        <PasswordField control={form.control} />
                    </div>
                    <FormError message='this is an error' />
                    <FormSuccess message='success' />
                    <Button
                        type='submit'
                        className='w-full'>
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
