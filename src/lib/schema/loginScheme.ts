import {z} from "zod";

export const loginSchema=z.object({
    email:z.string().min(1, "Email is required").email("Invalid Email"),
    password:z.string().min(8, "Minimum 8 characters").regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
        "Password must include uppercase, lowercase, number, and special character"
      )
      
})

export type loginSchema=z.infer<typeof loginSchema>
export type LoginSchemaType = z.infer<typeof loginSchema>;