"use client";
import CardWrapper from "@/components/auth/card-wrapper";
import { LoginFormValues } from "@/lib/types";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { Form } from "../ui/form";
import EmailField from "./email-field";
import PasswordField from "./password-field";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import { Button } from "../ui/button";

export default function LoginForm() {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string>();
    const [success, setSuccess] = useState<string>();

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: any) => {
        // values: LoginFormValues
        setError("");
        setSuccess("");
        startTransition(() => {
            login(values).then((data) => {
                setSuccess(data.success);
                setError(data.error);
            });
        });
    };

    return (
        <CardWrapper
            headerLabel='Welcome back'
            backButtonLabel="Don't have an account?"
            backButtonHerf='/auth/register'
            showSocial>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'>
                    <div className='space-y-4'>
                        <EmailField
                            control={form.control}
                            disabled={isPending}
                        />
                        <PasswordField
                            control={form.control}
                            disabled={isPending}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type='submit'
                        className='w-full'>
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
