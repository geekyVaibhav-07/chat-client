import React from 'react';
import InputText from '../atoms/inputText';

const FormElement = (props) => {
    const { label } = props;

    return (
        <>
            <label>{label}</label>
            <InputText {...props} />
        </>
    )
}

export default FormElement;
