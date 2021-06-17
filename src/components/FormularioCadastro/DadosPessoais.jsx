import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";   // instalar no npm o material-ui
import TextField from "@material-ui/core/TextField";   // instalar no npm o material-ui
import Switch from "@material-ui/core/Switch"; // instalar no npm o material-ui
import FormControlLabel from "@material-ui/core/FormControlLabel"; // instalar no npm o material-ui
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";



function DadosPessoais({onSubmit}) {        // uma function component tem que sempre ter a primeira letra maiscula
  
  const [ nome, setNome ] = useState("");            // useState está criando uma variavel que é o nome e quando for alterar essa variavel ele chama a função setNome
  const [ sobrenome, setSobrenome ] = useState("");
  const [ cpf, setCpf ] = useState("");
  const [ promocoes, setPromocoes ] = useState(true); // usar true para que deixe ativo a notificação de promoções
  const [ novidades, setNovidades ] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [ erros, validarCampos, possoEnviar ] = useErros(validacoes);

  return (
    <form 
      onSubmit={(event) => {        // onSubmit quando clicar no botao, ele envia os dados que foi preenchido no campo
        event.preventDefault();     // preventDefault faz com que a pagina pare de recarregar quando clico no botao Cadastrar
        if(possoEnviar()) {
          onSubmit({nome, sobrenome, cpf, promocoes, novidades});
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {           // prop onChange, criar uma arrow function dentro dela. 
          setNome(event.target.value);   // O "event.target.value" pega o valor que eu escrevo dentro do campo
        }}
        
        id="nome"
        label="Nome"
        name="nome"
        required
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {           
          setSobrenome(event.target.value);   
        }}

        id="sobrenome"
        label="Sobrenome"
        name="sobrenome"
        required
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <TextField 
        value={cpf}
        onChange={(event) => {           
          setCpf(event.target.value);   
        }}


        onBlur={validarCampos}                
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        label="CPF"
        required
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {           
              setPromocoes(event.target.checked);     // por ser um switch tem que atribuir .checked e não .value
            }}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {           
              setNovidades(event.target.checked);   // por ser um switch tem que atribuir .checked e não .value
            }}
            name="novidades"
            color="primary"
          />
        }
      />
      
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;