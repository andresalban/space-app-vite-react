import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles/GlobalStyles.jsx"
import Cabecera from "./components/Cabecera/Cabecera.jsx"
import BarraLateral from "./components/BarraLateral/BarraLateral.jsx"
import Banner from "./components/Banner/Banner.jsx"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria/Galeria.jsx"
import fotos from "./fotos.json"
import {useEffect, useState} from "react"
import ModalZoom from "./components/ModalZoom/ModalZoom.jsx"
import Pie from "./components/Pie/Pie.jsx";

const FondoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`
const AppContainer = styled.div`
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
`
const MainContainer = styled.main`
    display: flex;
    gap: 24px;
`
const ContenidoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`


const App = () => {
    const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
    const [filtro, setFiltro] = useState('')
    const [tag, setTag] = useState(0)
    const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

    //Este fragmento de código utiliza el hook useEffect para filtrar las fotos en la galería según dos criterios: la etiqueta (tag) y el título (filtro).
    // Permíteme explicarte cómo funciona:
    // useEffect se ejecuta cada vez que cambian los valores de filtro o tag.
    // Dentro de la función, se filtran las fotos utilizando dos condiciones:
    // Filtrado por etiqueta (filtroPorTag): Si no hay una etiqueta seleccionada (!tag) o si la etiqueta de la foto coincide con la etiqueta seleccionada (foto.tagId === tag), se considera válida.
    // Filtrado por título (filtroPorTitulo): Si no hay un filtro de título o si el título de la foto contiene el filtro (ignorando mayúsculas y minúsculas), se considera válida.
    // Finalmente, se actualiza el estado de fotosDeGaleria con las fotos filtradas.
    // En resumen, este código asegura que la galería muestre solo las fotos que coinciden con la etiqueta seleccionada y cuyos títulos contienen el filtro especificado.

    //filtroPorTag es una variable booleana que se calcula de la siguiente manera:
    // Si no hay una etiqueta seleccionada (!tag), filtroPorTag es verdadero (ya que no se aplica ningún filtro por etiqueta).
    // Si hay una etiqueta seleccionada y la etiqueta de la foto coincide con la etiqueta seleccionada (foto.tagId === tag), también se considera verdadero.
    // En resumen, filtroPorTag es verdadero si no hay etiqueta o si la etiqueta de la foto coincide con la etiqueta seleccionada.

    //filtroPorTitulo es una variable booleana que se calcula de la siguiente manera:
    // Si no hay un filtro de título (!filtro), filtroPorTitulo es verdadero (ya que no se aplica ningún filtro por título).
    // Si hay un filtro de título y el título de la foto contiene el filtro (ignorando mayúsculas y minúsculas) (foto.titulo.toLowerCase().includes(filtro.toLowerCase())), también se considera verdadero.
    // En resumen, filtroPorTitulo es verdadero si no hay filtro de título o si el título de la foto coincide con el filtro especificado.

    useEffect(() => {
        const fotosFiltradas = fotos.filter(foto => {
            const filtroPorTag = !tag || foto.tagId === tag;
            const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
            return filtroPorTag && filtroPorTitulo
        })
        setFotosDeGaleria(fotosFiltradas)
    }, [filtro, tag])

    const alAlternarFavorito = (foto) => {
        if (foto.id === fotoSeleccionada?.id) {
            setFotoSeleccionada({
                ...fotoSeleccionada,
                favorita: !fotoSeleccionada.favorita
            })
        }
        setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
            return {
                ...fotoDeGaleria,
                favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
            }
        }))
    }

    return (
        <>
            <FondoGradiente>
                <GlobalStyles/>
                <AppContainer>
                    <Cabecera
                        filtro={filtro}
                        setFiltro={setFiltro}
                    /> <MainContainer>
                    <BarraLateral/>
                    <ContenidoGaleria>
                        <Banner texto="La galería más completa de fotos del espacio" backgroundImage={banner}/>

                        <Galeria
                            fotos={fotosDeGaleria}
                            alSeleccionarFoto={foto => setFotoSeleccionada(foto)}
                            alAlternarFavorito={alAlternarFavorito}
                            setTag={setTag}
                        />
                    </ContenidoGaleria>
                </MainContainer>
                </AppContainer>
                <ModalZoom
                    foto={fotoSeleccionada}
                    alCerrar={() => setFotoSeleccionada(null)}
                    alAlternarFavorito={alAlternarFavorito}/>
                <Pie/>
            </FondoGradiente>

        </>
    )
}

export default App
