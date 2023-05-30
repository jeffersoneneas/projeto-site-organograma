import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form >
                <h2>Preencha os dados para criar o card do Filme</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome" />
                <CampoTexto label="Gênero" placeholder="Digite o gênero do filme" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario