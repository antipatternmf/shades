import React from 'react';
import styled from './index.module.pcss';

type FormButtonProps = {
  btnText: string;
};

function FormButton({ btnText }: FormButtonProps) {
  return (
    <button type="submit" className={styled.formButton}>
      {btnText}
    </button>
  );
}

export default FormButton;
