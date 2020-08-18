import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosInicias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosInicias(categoriasComVideos);
      }).catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>

      {dadosIniciais.length === 0 && (
        <div>
          Loading
        </div>
      )}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Neon Genesis Evangelion é uma série de ação pós-apocalíptica que gira em torno de uma organização paramilitar chamada NERV, criada para combater seres monstruosos chamados Anjos, utilizando seres gigantes chamados Unidades Evangelion (ou EVAs)"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={categoria.key}
            category={categoria}
          />
        );
      })}
    

    </PageDefault>
  );
}

export default Home;
