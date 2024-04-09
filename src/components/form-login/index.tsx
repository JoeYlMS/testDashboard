import { ChangeEvent, FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { InputText } from './input-text';
import './style.scss';
import { routers } from '../../constants/routers';

export const FormLogin = () => {
  const [initialValue, setInitialValue] = useState({
    login: '',
    password: '',
  });

  const navigation = useNavigate();

  const handelChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { name, value } = event.target;
    setInitialValue((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(initialValue);
    navigation(routers.admin);
  };

  return (
    <form className='form-sing-in' onSubmit={handleFormSubmit}>
      <h2>Sing-in</h2>
      <InputText type='text' name='login' placeholder='your Login' handelChange={handelChange} />

      <InputText
        name='password'
        type='password'
        handelChange={handelChange}
        placeholder='your password'
      />

      <button type='submit'>Sing-In</button>
    </form>
  );
};
