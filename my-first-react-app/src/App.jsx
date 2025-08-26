import { useState } from 'react'
import Search from './components/Search.jsx'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (

    <main>

      <div className="pattern"></div>

      <div className="wrapper">
        
        <header>
          <img src="./hero.png" alt="Hero-Banner"/>
          <h1>Busque por <span className="text-gradient">Filmes</span> De Todo Lugar!</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        <h1>{searchTerm}</h1>

      </div>
    </main>

  )

}

export default App