import { StyledSectionBackGround } from "./style";
import closeBtn from "../../../assets/x_button.svg";
import { Input } from "../../Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TAdEdit, editAdSchema } from "./editAdSchema";
import { CartContext } from "../../../providers/CartProvider";

export const EditAdModal = () => {
  const { currentAd, setIsEditAdModalOpen, editAd, setIsDeleteAdModalOpen } =
    useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdEdit>({
    resolver: zodResolver(editAdSchema),
  });

  const handleEditAdSubmit = (data: TAdEdit) => {
    const parsedData = editAdSchema.parse(data);

    editAd(parsedData, currentAd!.id);
  };

  const handleButton = () => {
    setIsEditAdModalOpen(false);
    setIsDeleteAdModalOpen(true);
  };
  return (
    <>
      <StyledSectionBackGround>
        <dialog>
          <div>
            <h1>Editar endereço</h1>
            <img onClick={() => setIsEditAdModalOpen(false)} src={closeBtn} alt="Close Button" />
          </div>
          <h2>Informações de endereço</h2>
          <form onSubmit={handleSubmit(handleEditAdSubmit)}>
            <Input
              id="car_brand"
              placeholder={currentAd?.car_brand}
              type="text"
              label={"Marca"}
              error={errors.car_brand?.message}
              {...register("car_brand")}
            />
            <Input
              id="model_car"
              placeholder={currentAd?.model_car}
              type="text"
              label={"Modelo"}
              error={errors.model_car?.message}
              {...register("model_car")}
            />
            <div>
              <Input
                id="year_built"
                placeholder={String(currentAd?.year_built)}
                type="number"
                label={"Ano"}
                error={errors.year_built?.message}
                {...register("year_built", {
                  setValueAs: (v) => Number(v),
                })}
              />
              <Input
                id="type_of_fuel"
                placeholder={currentAd?.type_of_fuel}
                type="text"
                label={"Combustível"}
                error={errors.type_of_fuel?.message}
                {...register("type_of_fuel")}
              />
            </div>
            <div>
              <Input
                id="mileage"
                placeholder={String(currentAd?.mileage)}
                type="number"
                label={"Quilometragem"}
                error={errors.mileage?.message}
                {...register("mileage", {
                  setValueAs: (v) => Number(v),
                })}
              />
              <Input
                id="color"
                placeholder={currentAd?.color}
                type="text"
                label={"Cor"}
                error={errors.color?.message}
                {...register("color")}
              />
            </div>
            <div>
              <Input
                id="fipe_price"
                placeholder={String(currentAd?.fipe_price)}
                type="number"
                label={"Preço tabela FIPE"}
                error={errors.fipe_price?.message}
                {...register("fipe_price", {
                  setValueAs: (v) => Number(v),
                })}
              />
              <Input
                id="price"
                placeholder={String(currentAd?.price)}
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
              placeholder={currentAd?.description}
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

            <button>Salvar alterações</button>
          </form>
          <button onClick={() => handleButton()}>Excluir anúncio</button>
        </dialog>
      </StyledSectionBackGround>
    </>
  );
};
