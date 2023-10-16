import { z } from "zod";

export const createProductSchema = z.object({
  title: z
    .string()
    .nonempty("Preencha a descrição do produto")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join("");
    }),
  quantity: z
    .string()
    .nonempty("Preencha a quantidade que deseja cadastrar")
    .transform((value) => Number(parseInt(value))),
  originalPrice: z
    .string()
    .nonempty("Preencha o valor original do produto")
    .transform((value) => Number(parseFloat(value))),
  discount: z
    .string()
    .nonempty("Preencha o valor do desconto")
    .transform((value) => Number(parseInt(value))),
});
