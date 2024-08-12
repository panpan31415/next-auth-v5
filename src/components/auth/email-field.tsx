import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues } from "react-hook-form";
import { LoginFormValues } from "@/lib/types";

type EmailFieldProps = {
    control?: Control<LoginFormValues>;
};
export default function EmailField({ control }: EmailFieldProps) {
    return (
        <FormField
            control={control}
            name='email'
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input
                            {...field}
                            placeholder='john@example.com'
                            type='email'
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
