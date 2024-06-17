import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles/index.jsx";
import Cabecera from "./components/Cabecera/Cabecera.jsx";
import BarraLateral from "./components/BarraLateral/BarraLateral.jsx";
import Banner from "./components/Banner/Banner.jsx";
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria/Galeria.jsx";
import fotos from './fotos.json'
import {useState} from "react";
import ModalZoom from "./components/ModalZoom/ModalZoom.jsx";

const FondoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`
const AppContainer = styled.div`
    width: 1440px;
    max-width: 100%;
    margin: 0 auto;
`
const MainContainer = styled.div`
    display: flex;
    gap: 24px;
`
const ContenidoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

const App = () => {
    const [fotosDeGaleria,setfotosDeGaleria]=useState(fotos)
    const [fotoSeleccionada,setFotoSeleccionada]=useState(null)

    return (
        <>
            <FondoGradiente>F
                <GlobalStyles/>
                <AppContainer>
                    <Cabecera/>
                    <MainContainer>
                        <BarraLateral/>
                        <ContenidoGaleria>
                            <Banner texto="La galería más completa de fotos del espacio" backgroundImage={banner}/>
                            <Galeria alSeleccionarFoto={foto=>setFotoSeleccionada(foto)} fotos={fotosDeGaleria}/>
                        </ContenidoGaleria>
                    </MainContainer>
                </AppContainer>
                <ModalZoom foto={fotoSeleccionada}/>
            </FondoGradiente>
        </>
    )
}

export default App
