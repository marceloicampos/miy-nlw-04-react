// ESTADO RETORNA A VARIÁVEL COM O VALOR DO ESTADO ATUAL

import { useState } from 'react'; 

//PROPRIEDADES DOS COMPONENTES

interface ButtonProps {
    color: string;
    children: string;
}

//COMPONENTS ON REACT

export function Button (props: ButtonProps) {
    const [counter, setCounter] = useState(1)

    function increment () {
        setCounter(counter +1);
    }

    return (
        <button 
        type="button" 
        style={{ backgroundColor: props.color }}
        onClick={ increment }
        >
            {props.children}
            <strong> {counter}</strong>
        </button>
    );
}
