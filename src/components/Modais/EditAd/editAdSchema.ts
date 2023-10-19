import { z } from "zod";

export const editAdSchema = z.object({
  images: z.object({
    gallery_image_url: z.string().max(250).nullish().optional(),
    gallery_image_url1: z.string().max(250).nullish().optional(),
    gallery_image_url2: z.string().max(250).nullish().optional(),
    gallery_image_url3: z.string().max(250).nullish().optional(),
    cover_image_url: z.string().max(250).nullish().optional(),
  }),
  car_brand: z.string().optional(),
  model_car: z.string().optional(),
  fipe_price: z.number().optional(),
  price: z.number().optional(),
  year_built: z.number().optional(),
  mileage: z.number().optional(),
  description: z.string().optional(),
  color: z.string().optional(),
  type_of_fuel: z.string().optional(),
});

export type TAdEdit = z.infer<typeof editAdSchema>;
