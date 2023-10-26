import { StyledSectionBackGround } from "./style";
import closeBtn from "../../../assets/x_button.svg";
import { Input } from "../../Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TAdCreate, adCreateSchema } from "./adCreateSchema";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartProvider";

export const CreateAdModal = () => {
  const { setIsCreateAdModalOpen, createNewAd } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdCreate>({
    resolver: zodResolver(adCreateSchema),
  });
  return (
    <>
      <StyledSectionBackGround>
        <dialog>
          <div>
            <h1>Criar anúncio</h1>
            <img onClick={() => setIsCreateAdModalOpen(false)} src={closeBtn} alt="Close Button" />
          </div>
          <h2>Informações do veículo</h2>
          <form onSubmit={handleSubmit(createNewAd)}>
            <Input
              id="car_brand"
              placeholder="Ex: BMW"
              type="text"
              label={"Marca"}
              error={errors.car_brand?.message}
              {...register("car_brand")}
            />
            <Input
              id="model_car"
              placeholder="Ex: M2"
              type="text"
              label={"Modelo"}
              error={errors.model_car?.message}
              {...register("model_car")}
            />
            <div>
              <Input
                id="year_built"
                placeholder="Ex: 2011"
                type="number"
                label={"Ano"}
                error={errors.year_built?.message}
                {...register("year_built", {
                  setValueAs: (v) => Number(v),
                })}
              />
              <Input
                id="type_of_fuel"
                placeholder="Ex: gasolina"
                type="text"
                label={"Combustível"}
                error={errors.type_of_fuel?.message}
                {...register("type_of_fuel")}
              />
            </div>
            <div>
              <Input
                id="mileage"
                placeholder="Ex: 15.000"
                type="number"
                label={"Quilometragem"}
                error={errors.mileage?.message}
                {...register("mileage", {
                  setValueAs: (v) => Number(v),
                })}
              />
              <Input
                id="color"
                placeholder="Ex: preta"
                type="text"
                label={"Cor"}
                error={errors.color?.message}
                {...register("color")}
              />
            </div>
            <div>
              <Input
                id="fipe_price"
                placeholder="Ex: R$95.000,00"
                type="number"
                label={"Preço tabela FIPE"}
                error={errors.fipe_price?.message}
                {...register("fipe_price", {
                  setValueAs: (v) => Number(v),
                })}
              />
              <Input
                id="price"
                placeholder="Ex: R$90.000,00"
                type="number"
                label={"Preço"}
                error={errors.price?.message}
                {...register("price", {
                  setValueAs: (v) => Number(v),
                })}
              />
            </div>
            <Input
              id="description"
              placeholder="Ex: Carro muito bem cuidado"
              type="text"
              label={"Descrição"}
              error={errors.description?.message}
              {...register("description")}
            />
            <Input
              id="gallery_image_url1"
              placeholder="Ex: www.foto.com.br"
              type="text"
              label={"Imagem da capa"}
              error={errors.images?.gallery_image_url1?.message}
              {...register("images.gallery_image_url1")}
            />
            <Input
              id="gallery_image_url2"
              placeholder="Ex: www.foto.com.br"
              type="text"
              label={"1ª imagem da galeria"}
              error={errors.images?.gallery_image_url2?.message}
              {...register("images.gallery_image_url2")}
            />
            <Input
              id="gallery_image_url3"
              placeholder="Ex: www.foto.com.br"
              type="text"
              label={"2ª imagem da galeria"}
              error={errors.images?.gallery_image_url3?.message}
              {...register("images.gallery_image_url3")}
            />
            <div>
              <button onClick={() => setIsCreateAdModalOpen(false)}>Cancelar</button>
              <button>Criar anúncio</button>
            </div>
          </form>
        </dialog>
      </StyledSectionBackGround>
    </>
  );
};
