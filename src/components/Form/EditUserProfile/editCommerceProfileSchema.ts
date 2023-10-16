import { z } from "zod";

export const editUserProfileSchema = z
  .object({
    userName: z
      .string()
      .nonempty("Confirme o nome do estabelecimento")
      .transform((name) => {
        return name.trim().split("").join("");
      }),
    email: z.string().email("E-mail inválido").nonempty("Confirme o e-mail"),
    password: z.string().nonempty("Sua senha"),
    confirmPassword: z.string().nonempty("Confirme sua senha"),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: "As senhas não correspondem. Por favor, tente novamente.",
    path: ["confirmPassword"],
  });
