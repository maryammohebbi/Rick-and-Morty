import { useEffect, useState } from 'react'
import Navbar, { SearchResult } from './components/Navbar'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
import { allCharacters } from '../data/data'
import Loader from './components/Loader'

function App() {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    async function fetchData(){    
      setIsLoading(true)
      const res = await fetch("https://rickandmortyapi.com/api/character")
      const data = await res.json()
      setCharacters(data.results.slice(0,5))
      setIsLoading(false)
    }
    fetchData()
  }, []);

  return (
    <div className='container mx-auto max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-5xl p-5'>
      <Navbar>
        <SearchResult numOfSearchResult={characters.length}/>
      </Navbar>     
      <Main>
        <CharacterList characters={characters} isLoading={isLoading}/>
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
