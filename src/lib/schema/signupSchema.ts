import {z} from "zod";

export const signupSchema=z.object({
    email:z.string().min(1, "Email is required").email("Invalid Email"),
    password:z.string().min(8, "Minimum 8 characters").regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
        "Password must include uppercase, lowercase, number, and special character"
      ),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupSchemaType = z.infer<typeof signupSchema>
export type signupSchema = z.infer<typeof signupSchema>