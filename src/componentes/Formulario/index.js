import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [genero, setGenero] = useState('')

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
        "Fantasia",
        "Musical",
        "Guerra",
        "Histórico"
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoFilmeCadastrado({
            nome,
            imagem,
            genero
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Filme</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Gênero"
                    itens={generos}
                    valor={genero}
                    aoAlterado={valor => setGenero(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario