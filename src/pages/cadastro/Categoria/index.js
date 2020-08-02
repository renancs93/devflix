import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  // Dados padroes
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  // Chamando o CustomHook
  const { values, handleChange, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  // Aciona determminada função quando determinada ação ocorre
  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categ) => {
        //console.log(categ);
        setCategorias(categ);
      })
      .catch((err) => {
        console.log(err.Message);
      });
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
          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
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
            <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
          ))}
        </ul>
      </form>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
