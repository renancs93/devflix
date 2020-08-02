import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  // Adiciona o novo item na lista
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  // Funcao de alterações nos inputs
  function handleChange(info) {
    const { value } = info.target;

    setValue(
      // getAttribute('name'),
      info.target.getAttribute('name'),
      value
    );
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
