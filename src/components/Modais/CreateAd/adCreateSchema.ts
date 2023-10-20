import { z } from "zod";

export const adCreateSchema = z.object({
  images: z.object({
    gallery_image_url: z.string().max(250).nullish().optional(),
    gallery_image_url1: z.string().min(1, "Foto é obrigatória").max(250),
    gallery_image_url2: z.string().max(250).nullish().optional(),
    gallery_image_url3: z.string().max(250).nullish().optional(),
    cover_image_url: z.string().max(250).nullish().optional(),
  }),
  car_brand: z.string().max(15).min(1, "Marca é obrigatória"),
  model_car: z.string().max(15).min(1, "Modelo é obrigatório"),
  fipe_price: z.number().min(1),
  price: z.number().min(1),
  year_built: z.number().min(1),
  mileage: z.number().min(1),
  description: z.string().min(1, "Descrição é obrigatória"),
  color: z.string().max(15).min(1, "Cor é obrigatória"),
  type_of_fuel: z.string().max(15).min(1, "Tipo de combustível é obrigatório"),
});

export type TAdCreate = z.infer<typeof adCreateSchema>;
