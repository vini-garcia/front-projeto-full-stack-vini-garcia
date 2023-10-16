import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { editUserProfileSchema } from './editCommerceProfileSchema';
import { Input } from '../Input';
import { IRegisterUserFormData } from '../RegisterCommerceForm';
import { useContext } from 'react';
import { StyledEditUserProfileModal } from './style';
import { UserContext } from '../../../providers/UserContext/UserContext';

export const EditUserProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserFormData>({
    resolver: zodResolver(editUserProfileSchema),
  });

  const { editUserProfile, setIsEditUserProfileModalOpen } =
    useContext(UserContext);
  const userName = localStorage.getItem('@EatSmart:userName');
  const emailUser = localStorage.getItem('@EatSmart:userEmail');

  const editUserProfileSubmit: SubmitHandler<IRegisterUserFormData> = (
    newUserProfileData
  ) => {
    editUserProfile(newUserProfileData);
    setIsEditUserProfileModalOpen(false);
  };

  return (
    <StyledEditUserProfileModal role='dialog'>
      <div className='container_editProfile'>
        <nav>
          <button onClick={() => setIsEditUserProfileModalOpen(false)}>
            X
          </button>
        </nav>
        <form onSubmit={handleSubmit(editUserProfileSubmit)}>
          <h3>Edite seu perfil</h3>
          <Input
            type='text'
            label='Nome'
            placeholder={userName?.toString()}
            id='userName'
            {...register('userName')}
            error={errors.userName}
          />
          <Input
            type='email'
            label='Email'
            placeholder={emailUser?.toString()}
            id='email'
            {...register('email')}
            error={errors.email}
          />
          <Input
            type='password'
            label='Senha'
            placeholder='Sua senha'
            id='password'
            {...register('password')}
            error={errors.password}
          />
          <Input
            type='password'
            label='Confirmar Senha'
            placeholder='Confirmar alteração de senha'
            id='confirmPassword'
            {...register('confirmPassword')}
            error={errors.confirmPassword}
          />
          <button type='submit'>Salvar alterações</button>
        </form>
        <button>Voltar para o perfil</button>
      </div>
    </StyledEditUserProfileModal>
  );
};
