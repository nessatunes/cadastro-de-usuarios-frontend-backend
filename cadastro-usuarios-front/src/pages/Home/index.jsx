import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import api from "../../services/api";

import {
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title,
} from "./styles";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    const data = await api.post("/usuarios", {
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: Number.parseInt(inputAge.current.value),
    });
  }

  return (
    <Container>
      <TopBackground />
      <Form>
        <Title>Cadastrar Usuário</Title>
        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> * </span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade<span> * </span>
            </InputLabel>
            <Input
              type="number"
              placeholder="idade do usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>
        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> * </span>
          </InputLabel>
          <Input
            type="email"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          />
        </div>
        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>
      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
        Ver Lista Usuário
      </Button>
    </Container>
  );
}

export default Home;
