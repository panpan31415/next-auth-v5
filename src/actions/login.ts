"use server";

import { getUserByEmail } from "@/lib/data";
import prisma from "@/lib/db";
import { LoginFormValues } from "@/lib/types";
import { LoginSchema } from "@/schemas";
import bcrypt from "bcryptjs";

export async function login(values: LoginFormValues) {
    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }
    const { email, password } = validatedFields.data;
    const user = await getUserByEmail(email);
    if (!user) {
        return {
            error: "email is not found",
        };
    }
    const isPasswordMatch = await bcrypt.compare(password, user.pswHash);
    if (isPasswordMatch) {
        return {
            success: "login succeeded",
        };
    }

    return {
        error: "password is not correct",
    };
}
