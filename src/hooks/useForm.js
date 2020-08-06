import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState([valoresIniciais]);

  function setValue(chave, valor) {
    // chave: nome, descricao
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infoEvento) {
    setValue(infoEvento.target.getAttribute('name'), infoEvento.target.value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
