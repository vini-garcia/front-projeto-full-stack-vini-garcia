import { z } from "zod";

export const editCommerceProfileSchema = z
  .object({
    userName: z
      .string()
      .nonempty("Confirme o nome do estabelecimento")
      .transform((name) => {
        return name.trim().split("").join("");
      }),
    email: z.string().email("E-mail inválido").nonempty("Confirme o e-mail"),
    password: z
      .string()
      .nonempty("Sua senha")
      .min(7, "Mínimo de 7 caracteres")
      .regex(/(?=.*?[A-Z])/, "Necessário ao menos uma letra maiuscula")
      .regex(/(?=.*?[a-z])/, "Necessário ao menos uma letra minúscula ")
      .regex(/(?=.*?[0-9])/, "Necessário conter ao menos um número")
      .regex(/(?=.*?[\W])/, "Necessário conter ao menos um caracter especial"),
    confirmPassword: z.string().nonempty("Confirme sua senha"),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: "As senhas não correspondem. Por favor, tente novamente.",
    path: ["confirmPassword"],
  });
