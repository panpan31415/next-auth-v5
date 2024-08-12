import { LoginSchema } from "@/schemas";
import { z } from "zod";

export type LoginFormValues = z.infer<typeof LoginSchema>;
