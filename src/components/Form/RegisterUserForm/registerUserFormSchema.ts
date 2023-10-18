import { z } from "zod";

export const registerSchema = z
  .object({
    address: z.object({
      post_code: z.string().min(1, "Cep é obrigatório"),
      state: z.string().min(1, "Estado é obrigatório"),
      city: z.string().min(1, "Cidade é obrigatório"),
      street_name: z.string().min(1, "Rua é obrigatório"),
      street_number: z.string().min(1, "Número é obrigatório"),
      complement: z.string().optional(),
    }),
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().min(1, "Email é obrigatório").email("Formato de email inválido."),
    type_of_account: z.string(),
    cpf: z.string().min(1),
    phone_number: z.string().min(1, "Número de telefone é obrigatório"),
    dob: z.string().min(1, "Data de nascimento é obrigatória"),
    description: z.string().optional(),
    password: z.string().min(1, "Senha é obrigatória"),
    confirm: z.string().min(1, "Repita a senha"),
  })
  .refine((data) => data.password === data.confirm, {
    message: "As senhas não coincidem",
    path: ["confirm"],
  });

export const registerSchemaRequest = z.object({
  address: z.object({
    post_code: z.string().min(1, "Cep é obrigatório"),
    state: z.string().min(1, "Estado é obrigatório"),
    city: z.string().min(1, "Cidade é obrigatório"),
    street_name: z.string().min(1, "Rua é obrigatório"),
    street_number: z.string().min(1, "Número é obrigatório"),
    complement: z.string().optional(),
  }),
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().min(1, "Email é obrigatório").email("Formato de email inválido."),
  type_of_account: z.string(),
  cpf: z.string().min(1),
  phone_number: z.string().min(1, "Número de telefone é obrigatório"),
  dob: z.string().min(1, "Data de nascimento é obrigatória"),
  description: z.string().optional(),
  password: z.string().min(1, "Senha é obrigatória"),
});

export const editSchemaRequest = registerSchemaRequest.partial();

export type TRegister = z.infer<typeof registerSchema>;
export type TRegisterReq = z.infer<typeof registerSchemaRequest>;
