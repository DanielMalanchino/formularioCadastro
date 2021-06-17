import React, { useState, useContext } from 'react';                     // atalho Shift + alt + down ele joga o que vc copiou na linha de baixo
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from '../../hooks/useErros';


function DadosUsuario({ onSubmit }) {

    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] = useState("");
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar ] = useErros(validacoes);

    return(
        <form onSubmit={(event) =>{
            event.preventDefault();
            if(possoEnviar()){
                onSubmit({ email, senha });
            }
        }}>
            <TextField
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                id="email"
                name="email"
                label="email"
                type="email"
                required
                variant="outlined"
                margin="dense"
                fullWidth
            />

            <TextField
                value={senha}
                onChange={(event) => {setSenha(event.target.value)}}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                required
                variant="outlined"
                margin="dense"
                fullWidth
            />

            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;