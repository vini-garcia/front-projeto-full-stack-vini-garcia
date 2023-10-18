import { DeepPartial } from "react-hook-form";
import { z } from "zod";

export const registerSchema = z
  .object({
    address: z.object({
      post_code: z.string().min(1, "Cep é obrigatório"),
      state: z.string().min(1, "Estado é obrigatório"),
      city: z.string().min(1, "Cidade é obrigatório"),
      street_name: z.string().min(1, "Rua é obrigatório"),
      street_number: z.string().min(1, "Número é obrigatório"),
      address_complement: z.string().optional(),
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
    address_complement: z.string().optional(),
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

export const editSchemaRequest = z.object({
  address: z
    .object({
      post_code: z.string().optional(),
      state: z.string().optional(),
      city: z.string().optional(),
      street_name: z.string().optional(),
      street_number: z.string().optional(),
      address_complement: z.string().optional(),
    })
    .optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  type_of_account: z.string().optional(),
  cpf: z.string().optional(),
  phone_number: z.string().optional(),
  dob: z.string().optional(),
  description: z.string().optional(),
  password: z.string().optional(),
});

export type TEditUser = z.infer<typeof editSchemaRequest>;
export type TEditUpdate = DeepPartial<TEditUser>;
export type TRegister = z.infer<typeof registerSchema>;
export type TRegisterReq = z.infer<typeof registerSchemaRequest>;
