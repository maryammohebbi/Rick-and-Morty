import { useEffect, useState } from 'react'
import Navbar, { SearchResult } from './components/Navbar'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
import { allCharacters } from '../data/data'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
      .then((res)=> res.json())
      .then((data) => setCharacters(data.results.slice(0,5)))
  }, [])

  return (
    <div className='container mx-auto max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-5xl p-5'>
      <Navbar>
        <SearchResult numOfSearchResult={characters.length}/>
      </Navbar>
      
        <Main>
          <CharacterList characters={characters}/>
          <CharacterDetail/>
        </Main>
      
    </div>
  )
}

export default App

function Main({children}){
  return(
    <div className='flex flex-col lg:flex-row justify-between gap-2 h-auto w-full'>
      {children}
    </div>
  )
}
