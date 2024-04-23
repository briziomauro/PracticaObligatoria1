import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Login = () => {

    const [inputText, setInputText] = useState("");

    const handleInputText = (e) => {
        setInputText(e.target.value)
        if (inputText.toLowerCase().includes('o')){
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
        }
        
    }

    const handleRegister = () => {
        if (inputText === "" || inputText.toLowerCase().includes('o')) {
            alert("Usuario inválido para registrarse");
        } else {
            alert("¡Usuario registrado correctamente!")
        }
    }

    return (
        <>
            <input type="text" placeholder='Ingrese su Username' value={inputText} onChange={handleInputText} />
            <div className='m-3'>
                <Button variant="light" onClick={handleRegister}>Registrarse</Button>
            </div>
            <p className='text-light'>{inputText}</p>
        </>

    )
}

export default Login