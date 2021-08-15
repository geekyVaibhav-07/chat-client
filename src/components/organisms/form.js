import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormElement from '../molecules/formElement';
import fieldActions from '../../redux/actions/fiedlActions';

const Form = (props) => {
    const { fields = [] } = props;
    const dispatch = useDispatch();
    const getValue = (name) => useSelector(state => state.formField)[name];

    const updateValue = (e) => {
        const payload = {
            name: e.target.name,
            value: e.target.updateValue,
        }
        dispatch(fieldActions.updateFormField(payload));
    }

    const formElement = (field) => {
        const { name } = field;
        return <FormElement {...field} value = {getValue(name)} setValue = {updateValue} />
    }

    return (
        <div>
            {
                fields.map(field => {
                    formElement(field)
                })
            }
        </div>
    )
}

export default Form;