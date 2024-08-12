import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues } from "react-hook-form";
import { LoginFormValues } from "@/lib/types";

type PasswordFieldProps = {
    control?: Control<LoginFormValues>;
};
export default function PasswordField({ control }: PasswordFieldProps) {
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
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
