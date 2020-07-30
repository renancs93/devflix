import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

// import { Container } from './styles';

function CadastroCategoria() {
  // Dados padroes
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000000",
  };

  const [categorias, setCategorias] = useState([]);
  
  // Definição dos estados
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
      //getAttribute('name'), 
      info.target.getAttribute('name'),
      value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

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
          type={'textarea'}
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


        {/* <div>
          <label>Nome da Categoria:</label>
          <input
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Descrição:</label>
          <textarea
            type="text"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Cor:</label>
          <input
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
        </div> */}

        <button>Cadastrar</button>

        <ul>
          {categorias.map((categoria, index) => {
            return <li key={`${categoria}${index}`}>{categoria.nome}</li>;
          })}
        </ul>
      </form>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
