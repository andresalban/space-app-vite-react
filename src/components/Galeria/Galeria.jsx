import Titulo from "../Titulo/Titulo.jsx";
import Tag from "./Tags/Tags.jsx";
import Populares from "./Populares/Populares.jsx";
import styled from "styled-components";
import Imagen from "./Imagen/Imagen.jsx";


const GaleriaContainer = styled.div`
    display: flex;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({fotos = [], alSeleccionarFoto, alAlternarFavorito, setTag}) => {

    return (
        <>
            <Tag setTag={setTag}/>
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenesContainer>
                        {fotos.map(foto => <Imagen
                            alAlternarFavorito={alAlternarFavorito}
                            alSolicitarZoom={alSeleccionarFoto}
                            key={foto.id}
                            foto={foto}/>)
                        }
                    </ImagenesContainer>
                </SeccionFluida>
                <Populares/>

            </GaleriaContainer>
        </>
    )
}

export default Galeria