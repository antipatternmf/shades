import React, { FC } from "react";

import styled from "./FormButton.module.css";

type FormButtonProps = {
    btnText: string;
};

const FormButton: FC<FormButtonProps> = ({ btnText }) => {
    
    return (
        <button className={styled.formButton}>
            {btnText}
        </button>
    );
};

export default FormButton;
