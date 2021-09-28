import React from 'react';

const Input = ({ onChange, ...restProps }) => {

  const onChangeLocal = (event) => {
    if (!onChange) {
      return;
    }

    onChange(event.target.value);
  }

  return (
    <input
      {...restProps}
      onChange={onChangeLocal}
    />
  );
};

export default Input;
export { Input };
