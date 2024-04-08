import { ChangeEvent, FC } from 'react';

interface IInputTextProps {
  name: string;
  type: string;
  handelChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const InputText: FC<IInputTextProps> = ({ name, type, handelChange, placeholder }) => {
  return (
    <label title={name}>
      <input type={type} name={name} onChange={handelChange} placeholder={placeholder} />
    </label>
  );
};
