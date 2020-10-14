import React, { ChangeEvent, FC } from 'react';

interface Props {
  name?: string,
  type?: string,
  placeholder?: string,
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void),
  className?: string,
  value?: any,
  error?: string,
  label?: string,
}

const FormInput: FC<Props> = (props) => {

  const { name, type, placeholder, onChange, className, value, error, label, ...otherProps } = props;
  
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        {...otherProps}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}    
      />
      { error && <p>{ error }</p>}
    </React.Fragment>
  )
}

export default FormInput;