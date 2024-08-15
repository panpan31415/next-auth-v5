"use server";
import { getUserByEmail } from "@/lib/data";
import prisma from "@/lib/db";
import { RegisterFormValues } from "@/lib/types";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";

export async function register(values: RegisterFormValues) {
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }
    const { email, password, name } = validatedFields.data;

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        return {
            error: "Email is already in use!",
        };
    }

    const pswHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: { email, name, pswHash },
    });

    // TODO: Send verification token email

    return {
        success: "User created!",
    };
}
