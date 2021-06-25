import React, { useState, createContext } from 'react';

export const FormContext = createContext()

export function FormProvider(props) {
    const [step, setStep] = useState(1)
    const [nameInput, setNameInput] = useState('')
    const [ageInput, setAgeInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const changeInput = (value, key) => {
        switch (key) {
            case 'name':
                setNameInput(value)
                return;
            case 'age':
                setAgeInput(value)
                return;
            case 'email':
                setEmailInput(value)
                return;
            case 'password':
                setPasswordInput(value)
                return;
            default:
                return;
        }
    }

    const changeStep = (action) => {
        switch (action) {
            case 'up':
                setStep(step + 1)
                return;
            case 'down':
                setStep(step - 1)
                return;
            default:
                setStep(step)
                return;
        }
    }

    return (
        <FormContext.Provider value={{
            step,
            nameInput,
            ageInput,
            emailInput,
            passwordInput,
            changeStep,
            changeInput,
        }}>
            {props.children}
        </FormContext.Provider>
    )
}
