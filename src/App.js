
import React, {useState} from 'react';
import { Formulario, Label,  Conditions, CenterButton, Button, SuccesMessege, ErrorMessege } from './elementos/formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import InputComponent from './componentes/Input';


const App = () => {
  const [usuario, cambiarUsuario] = useState({campo:"", valido: null});
  const [nombre, cambiarNombre] = useState({campo:"", valido: null});
  const [password, cambiarPassword] = useState({campo:"", valido: null});
  const [password2, cambiarPassword2] = useState({campo:"", valido: null});
  const [correo, cambiarCorreo] = useState({campo:"", valido: null});
  const [telefono, cambiarTelefono] = useState({campo:"", valido: null});
  const [terminos, cambiarTerminos] = useState(false);
  const expresiones = {
    usuario: /^[a-zA-Z0-9]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  };
  const passwordValidation2 = () => {
      if (password.campo.length > 0) {
          if(password.campo !== password2.campo) {
            cambiarPassword2 ((prevState) => {
                return{...prevState, valido:'false'}
            });
          } else {
            cambiarPassword2 ((prevState) => {
              return{...prevState, valido:'true'}
          });
          }
      }
  };

  const onChangeTerminos = (e) => {
      cambiarTerminos(e.target.checked)
  };

  return ( 
    <main>
      <Formulario action ="">
        <InputComponent 
          estado={usuario}
          cambiarEstado={cambiarUsuario}
          tipo="text"
          label="Usuario"
          placeholder="Ej: nico1003"
          name="user"
          errorMessege="El usuario tiene que ser de 4 a 16 caracteres y solo puede contener números, letras y guion bajo."
          RegularExpression={expresiones.usuario}
        />

        <InputComponent
            estado={nombre} 
            cambiarEstado={cambiarNombre}
            tipo="text"
            label="Nombre"
            placeholder="Ej: Nicolás Otero"
            name="nombre"
            errorMessege="El usuario tiene que ser de 4 a 16 caracteres y solo puede contener números, letras y guion bajo."
            RegularExpression={expresiones.nombre}
        />


       

        <InputComponent
            estado={password}
            cambiarEstado={cambiarPassword}
            label="Contraseña"
            placeholder="Escribe aqui tu contraseña"
            name="password"
            tipo="password"
            errorMessege="La contraseña no debe tener ni puntos ni guiones"
            RegularExpression={expresiones.password}
        />

        <InputComponent
            estado={password2}
            cambiarEstado={cambiarPassword2}
            label="Contraseña"
            placeholder="Vuelve a escribir tu contraseña"
            name="password2"
            tipo="password"
            errorMessege="Ambas contraseñas deben ser iguales"
            funcion={passwordValidation2}
        />

        <InputComponent
            estado={correo}
            cambiarEstado={cambiarCorreo}
            label="Correo Eléctronico"
            placeholder="correo@example.com"
            name="usuario"
            tipo="email"
            errorMessege="Este correo ya está en uso"
            RegularExpression={expresiones.correo}
        />

        <InputComponent
            estado={telefono}
            cambiarEstado={cambiarTelefono}
            label="Telefono"
            placeholder="Ej: 095863458 "
            name="telefono"
            tipo="num"
            errorMessege="Solo se acepta números"
            RegularExpression={expresiones.telefono}
        />
     
        <Conditions>
          <Label>
            <input 
              type="checkbox"
              name='terminos'
              id='terminos'
              checked={terminos}
              onChange={onChangeTerminos}
             ></input>
            Acepto los terminos y condiciones
          </Label>
        </Conditions>
        {false && <ErrorMessege>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}> </FontAwesomeIcon>
            <b>Error:</b> Por favor rellene el formulario correctamente.
          </p>
        </ErrorMessege>}
        <CenterButton>
          <Button type='submit'>Enviar</Button>
          <SuccesMessege>Formulario enviado exitosamente!</SuccesMessege>
        </CenterButton>

      </Formulario>
    </main>
   );
};
export default App;
