import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import './style.css';

const Form = styled.div`
padding: 5%;
`;

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const history = useHistory();
  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState(['']);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://appreactflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>

      <Form>
        <h1>
          Página de Cadastro de Categoria
      </h1>

        <form onSubmit={function handleSubmit(infosEvento) {
          infosEvento.preventDefault();

          setCategorias([
            ...categorias,
            values,
          ]);

          categoriasRepository.create({
            titulo: values.nome,
            descricao: values.descricao,
            cor: values.cor,
          })
            .then(() => {

              history.push('/cadastro/video');
            });





          clearForm();
        }}
        >

          <div>

            <FormField
              label="Nome da Categoria"
              type="text"
              name="nome"
              value={values.nome}
              onChange={handleChange}

            />
          </div>
          <div>
            <FormField
              label="Descrição"
              type="textarea"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}

            />
          </div>
          <div>
            <FormField
              label="Cor"
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}

            />
          </div>
          <Button>
            Cadastrar
        </Button>
        </form>




        <table border="1" className="tabelaCategorias">
          <tr className="firstRow">
            <td>Nome</td>
            <td>Descrição</td>
            <td className="delete">Remover</td>
          </tr>


          {categorias.map((categoria, indice) => (

            <tr>

              <td key={`${categoria.titulo}`}>
                {categoria.titulo}
              </td>
              <td key={`${categoria.descricao}${indice}`}>
                {categoria.descricao}
              </td>
              <td className="delete">
                <Button className="buttonDelete">
                  Remover
                </Button>

              </td>
            </tr>

          ))}

        </table>

      </Form>
    </PageDefault>
  );
}

export default CadastroCategoria;
