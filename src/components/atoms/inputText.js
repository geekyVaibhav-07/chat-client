import React from 'react';

const InputText = (props) => {
    const { id, name, setValue, value } = props;
    const updateValue = (e) => {
        setValue(e.target.value);
    }

    return (
        <input id={id} name={name} value={value} onChange={updateValue}/>
    )
}

export default InputText;