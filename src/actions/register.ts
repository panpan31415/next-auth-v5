import { RegisterFormValues } from "@/lib/types";
import { RegisterSchema } from "@/schemas";

export async function register(values: RegisterFormValues) {
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }
    return {
        success: "Register succeeded",
    };
}
