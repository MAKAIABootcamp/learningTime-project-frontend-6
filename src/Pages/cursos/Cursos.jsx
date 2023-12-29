// import React from 'react'
import Header from '../../components/Nav/Header'
import Text from '../../components/infoCursos/text'
import Inf from '../../components/infoCursos/Inf'
// import Subtitle from '../../components/infoCursos/SubTitle'
// import Card from '../../components/infoCursos/Card'
import CursoSaludMental from '../../components/infoCursos/CursoSaludMental'
import CursoVidaSana from '../../components/infoCursos/CursoVidaSana'
import CursoFinanzas from '../../components/infoCursos/CursoFinanzas'
import FooterCursos from '../../components/infoCursos/FooterCursos'



const Cursos = () => {
  return (
    <div>
      <Header/>
      <Inf/>
      <Text/>
      {/* <Subtitle/> */}
      {/* <Card/> */}
      <CursoSaludMental />
      <CursoVidaSana />
      <CursoFinanzas />
      <FooterCursos />
    </div>
  )
}

export default Cursos

