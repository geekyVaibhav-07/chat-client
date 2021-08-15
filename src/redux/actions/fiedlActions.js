const updateFormField = (payload) => {
    return {
        ...payload,
        type: 'UPDATE_FORM_FIELD',
    }
}

const fieldActions = {
    updateFormField
}

export default fieldActions;