import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().min(1, "O e-mail é obrigatório"),
  password: z.string().min(1, "A senha é obrigatória"),
});

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>;
