import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto"       // para instalar a fonte ---> npm install fontsource-roboto
import { validarCPF, validarSenha } from "./models/cadastro"
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" component="h1" align="center" >Formulário de cadastro</Typography>
        <ValidacoesCadastro.Provider value={{ cpf:validarCPF, senha:validarSenha }}>
          <FormularioCadastro onSubmit={onSubmitForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function onSubmitForm(dados) {
  console.log(dados);
}

export default App;
