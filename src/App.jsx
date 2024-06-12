import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles/index.jsx";
import Cabecera from "./components/Cabecera/Cabecera.jsx";
import BarraLateral from "./components/BarraLateral/BarraLateral.jsx";
import Banner from "./components/Banner/Banner.jsx";
import banner from "./assets/banner.png"

const FondoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`

function App() {

    return (
        <>
            <FondoGradiente>
                <GlobalStyles/>
                <Cabecera/>
                <BarraLateral/>
                <Banner texto="La galería más completa de fotos del espacio" backgroundImage={banner}/>
            </FondoGradiente>
        </>
    )
}

export default App
