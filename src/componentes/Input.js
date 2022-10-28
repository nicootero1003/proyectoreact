import React from "react";
import {Input, Label, GroupInput, ErrorLegend, ValidationIcon} from './../elementos/formularios';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const InputComponent = ({estado, cambiarEstado, tipo, name, errorMessege, label, placeholder, RegularExpression, funcion}) => {
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }
    const validation = () => {
        if (RegularExpression) {
            if (RegularExpression.test(estado.campo)) {
                cambiarEstado({...estado, valido: 'true'});
            } else {
                cambiarEstado({...estado, valido: 'false'});
            }
        }
        if (funcion) {
            funcion() ;
        }
        
    }
    return (
        <div>
            <Label htmlfor={name} valido={estado.valido}>{label}</Label>
            <GroupInput>
                <Input
                     type={tipo}
                     placeholder={placeholder}
                     id={name}
                     value={estado.campo}
                     onChange={onChange}
                     onKeyUp={validation}
                     onBlur={validation}
                     valido={estado.valido}
                />
               
                <ValidationIcon
                 icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle} 
                 valido={estado.valido}

                 />
                
                 
            </GroupInput>
            <ErrorLegend  valido={estado.valido}>{errorMessege}</ErrorLegend>
        </div>

    );
}
export default InputComponent;