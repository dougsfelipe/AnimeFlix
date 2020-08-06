import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Video Padrao',
    url: 'https://www.youtube.com/watch?v=5t2gq3xJZ9o',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  console.log(categorias);
  return (
    <PageDefault>

      <h1> Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscohida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscohida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do Video"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadasrtar Categoria
      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;
