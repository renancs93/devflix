import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

// import { Container } from './styles';

function CadastroCategoria() {
  // Dados padroes
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategorias] = useState([]);
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

  // Aciona determminada função quando determinada ação ocorre
  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (response) => {
      const itens = await response.json();
      setCategorias([...itens]);
    });

    // setTimeout(() => {
    //   setCategorias([
    //     {
    //       id: 1,
    //       nome: 'Front-end',
    //       descricao: 'Categoria de Front-end',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back-end',
    //       descricao: 'Categoria de Back-end',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 3000);
    
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          // Salva na lista a nova categoria
          setCategorias([...categorias, values]);
          // Reseta o form
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>

        {categorias.length === 0 && <div>Carregando...</div>}

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.nome}`}>{categoria.nome}</li>
          ))}
        </ul>
      </form>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
