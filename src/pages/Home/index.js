import React from "react";

import dadosIniciais from "../../data/dados_iniciais.json";

import Menu from "../../components/Menu";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
// import Footer from "../../components/Footer";
// import PageDefault from "../../components/PageDefault";

function Home() {
  const destaque = dadosIniciais.categorias[0].videos[0];
  const categ = dadosIniciais.categorias;

  return (
    <div style={{background: "#141414"}}>

      <Menu/>

      <BannerMain
        videoTitle={destaque.titulo}
        url={destaque.url}
        videoDescription={
          "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        }
      />

      <Carousel ignoreFirstVideo category={categ[0]} />

      <Carousel category={categ[1]} />

      <Carousel category={categ[2]} />

      <Carousel category={categ[3]} />

      <Carousel category={categ[4]} />

      <Carousel category={categ[5]} />
    </div>
  );
}

export default Home;
