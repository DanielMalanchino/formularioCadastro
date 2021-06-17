function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 20) {
    return { valido: false, texto: "Senha deve mais de 4 digitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export {validarCPF, validarSenha};
