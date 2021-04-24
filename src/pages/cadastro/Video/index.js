import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/videos';
import categoriaRepository from '../../../repositories/categorias';

// import { Container } from './styles';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const [error, setError] = useState('');

  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriaRepository.getAll().then((categorias) => {
      setCategorias(categorias);
    });
  }, []);

  function valida() {
    return values.titulo.trim() != "" && values.url.trim() != "";
  }

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form
        onSubmit={(event) => {
          setError('');
          event.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });

          if (valida() && categoriaEscolhida) {
            videoRepository
              .create({
                titulo: values.titulo,
                url: values.url,
                categoriaId: categoriaEscolhida.id,
              })
              .then(() => {
                history.push('/');
              });
          } else setError('Dados inválidos! Verifique os campos');
        }}
      >
        <FormField
          label='Título'
          type='text'
          name='titulo'
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label='URL'
          type='text'
          name='url'
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label='Categoria'
          type='text'
          name='categoria'
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <div style={{ color: 'red', marginTop: 10, marginBottom: 10 }}>
          {error}
        </div>

        <Button type='submit'>Cadastrar</Button>
      </form>
      <Link
        style={{ display: 'inline-flex', marginTop: 30 }}
        to='/cadastro/categoria'
      >
        Cadastro de Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
