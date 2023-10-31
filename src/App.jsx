import { useEffect, useState } from 'react'
import Navbar, { SearchResult } from './components/Navbar'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

function App() {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    async function fetchData(){    
      try{
        setIsLoading(true)
        const {data} = await axios.get("https://rickandmortyapi.com/api/characterss")
        setCharacters(data.results.slice(0,5))
      }
      catch(err){
        // console.log(err.message);
        // console.log(err.response.data.error)
        toast.error(err.response.data.error)
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchData()
  }, []);

  return (
    <div className='container mx-auto max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-5xl p-5'>
      <Toaster/>
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
