import { ChangeEvent, useState } from 'react';
import { InputText } from './input-text';

export const FormLogin = () => {
  const [initialValue, setInitialValue] = useState({
    name: '',
    password: '',
  });
  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <form className=''>
      <InputText
        name='login'
        type='text'
        handelChange={handelChange}
        placeholder='your First Name'
      />

      <label id='login'>
        <input type='text' id='login' onChange={handelChange} placeholder='your First Name' />
      </label>
      <label id='password'>
        <input type='password' id='password' placeholder='your Password' />
      </label>
      <button type='submit'>Sing-In</button>
    </form>
  );
};
