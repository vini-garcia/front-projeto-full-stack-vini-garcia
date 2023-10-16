import { z } from "zod";

export const registerSchema = z
  .object({
    address: z.object({
      post_code: z.string().nonempty("Cep é obrigatório."),
      state: z.string().nonempty("Estado é obrigatório"),
      city: z.string().nonempty("Cidade é obrigatório"),
      street_name: z.string().nonempty("Rua é obrigatório."),
      street_number: z.string().nonempty("Número é obrigatório."),
      complement: z.string().optional(),
    }),
    name: z.string().nonempty("Nome é obrigatório."),
    email: z.string().nonempty("Email é obrigatório.").email("Formato de email inválido."),
    type_of_account: z.string(),
    cpf: z.string(),
    phone_number: z.string(),
    dob: z.string(),
    description: z.string(),
    password: z.string().nonempty("Senha é obrigatória."),
    confirm: z.string().nonempty("Repita a senha."),
  })
  .refine((data) => data.password === data.confirm, {
    message: "As senhas não coincidem",
    path: ["confirm"],
  });

export const registerSchemaRequest = z.object({
  address: z.object({
    post_code: z.string().nonempty("Cep é obrigatório."),
    state: z.string().nonempty("Estado é obrigatório"),
    city: z.string().nonempty("Cidade é obrigatório"),
    street_name: z.string().nonempty("Rua é obrigatório."),
    street_number: z.string().nonempty("Número é obrigatório."),
    complement: z.string().optional(),
  }),
  name: z.string().nonempty("Nome é obrigatório."),
  email: z.string().nonempty("Email é obrigatório.").email("Formato de email inválido."),
  type_of_account: z.string(),
  cpf: z.string(),
  phone_number: z.string(),
  dob: z.string(),
  description: z.string(),
  password: z.string().nonempty("Senha é obrigatória."),
});

export const editSchemaRequest = registerSchemaRequest.partial();

export type TRegister = z.infer<typeof registerSchema>;
export type TRegisterReq = z.infer<typeof registerSchemaRequest>;
