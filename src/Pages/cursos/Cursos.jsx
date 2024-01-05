// import React from 'react'

import Text from "../../components/infoCursos/text";
import Inf from "../../components/infoCursos/Inf";
// import Subtitle from '../../components/infoCursos/SubTitle'
// import Card from '../../components/infoCursos/Card'
import CursoSaludMental from "../../components/infoCursos/CursoSaludMental";
import CursoVidaSana from "../../components/infoCursos/CursoVidaSana";
import CursoFinanzas from "../../components/infoCursos/CursoFinanzas";
import FooterCursos from "../../components/infoCursos/FooterCursos";
import Header from "../../components/Nav/Header";

const Cursos = () => {
  return (
    <>
      <Header />
      <Inf />
      <Text />
      {/* <Subtitle/> */}
      {/* <Card/> */}
      <CursoSaludMental />
      <CursoVidaSana />
      <CursoFinanzas />
      <FooterCursos />
    </>
  );
};

export default Cursos;
