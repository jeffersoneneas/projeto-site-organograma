import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const generos = [
        "Ação",
        "Aventura",
        "Animação",
        "Comédia",
        "Drama",
        "Ficção ",
        "Terror",
        "Romance",
        "Suspense",
        "Documentário",
        "fantasia",
        "musical",
        "guerra",
        "histórico"
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Filme</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Gênero" itens={generos} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario