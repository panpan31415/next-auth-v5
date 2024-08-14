"use server";

import { LoginFormValues } from "@/lib/types";
import { LoginSchema } from "@/schemas";

export async function login(values: LoginFormValues) {
    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }
    return {
        success: "login succeeded",
    };
}
