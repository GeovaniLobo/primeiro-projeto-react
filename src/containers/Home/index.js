import React, { useState, useRef } from 'react';
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'
import axios from 'axios';

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Input,
  InputLabel,
  Button,

} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users",
     { name: inputName.current.value, 
      age: inputAge.current.value })

    setUsers([...users, newUser]);



  }
  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />
        <Button onClick={addNewUser}>Cadastrar
          <img alt="seta" src={Arrow}></img>
        </Button>

      
      </ContainerItens>
    </Container>
  );
}

export default App;
