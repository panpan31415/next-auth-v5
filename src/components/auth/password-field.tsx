import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues } from "react-hook-form";
import { LoginFormValues } from "@/lib/types";

type PasswordFieldProps = {
    control?: Control<LoginFormValues>;
    disabled?: boolean;
};
export default function PasswordField({ control, disabled = false }: PasswordFieldProps) {
    return (
        <FormField
            control={control}
            name='password'
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input
                            {...field}
                            placeholder='******'
                            type='password'
                            disabled={disabled}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
