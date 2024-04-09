import { ChangeEvent, FC } from 'react';

interface IInputTextProps {
  name: string;
  type: string;
  className?: string;
  placeholder: string;
  handelChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: FC<IInputTextProps> = ({
  name,
  type,
  handelChange,
  placeholder,
  className,
}) => {
  return (
    <label title={name}>
      <span>{placeholder}</span>
      <input
        type={type}
        name={name}
        onChange={handelChange}
        className={className}
        placeholder={placeholder}
      />
    </label>
  );
};
