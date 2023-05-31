import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [filmes, setFilme] = useState([])
  const aoNovoFilmeAdicionado = (filme) => {
    console.log(filme)
    setFilme([...filmes, filme])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoFilmeCadastrado={filme => aoNovoFilmeAdicionado(filme)} />
    </div>
  );
}

export default App;
