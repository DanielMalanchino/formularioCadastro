import { Step, StepLabel , Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";


function FormularioCadastro({ onSubmit }) {
  const [ etapaAtual, setEtapaAtual ] = useState(0);
  const [ dadosColetados, setDados ] = useState({});

  useEffect(() => {
    if(etapaAtual === formularios.length-1);{
      onSubmit(dadosColetados);
    }
  })
  const formularios = [
    <DadosUsuario onSubmit={coletarDados} />,   // esta é a primeira pagina
    <DadosPessoais onSubmit={coletarDados} />,  // esta é a segunda pagina
    <DadosEntrega onSubmit={coletarDados} />,   // esta é a terceira pagina
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>       // esta é a ultima pagina
  ];

  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados});
    proximo();
  }

  function proximo() {             // esta function faz quando clicar no botão, ele passa para a proxima pagina
    setEtapaAtual(etapaAtual + 1); 
  }

  return <> 
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Dados pessoais</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  { formularios[etapaAtual] }
  
  </>;
}

export default FormularioCadastro;