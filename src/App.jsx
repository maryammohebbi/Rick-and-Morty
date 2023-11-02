import { useEffect, useState } from 'react'
import Navbar, { Favorites, Search, SearchResult } from './components/Navbar'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

function App() {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedId, setSelectedId] = useState(null)
  const [favorites, setFavorites] = useState(()=> JSON.parse(localStorage.getItem("FAVORITES")) || [])


  useEffect(()=>{
    const controller = new AbortController()
    const signal = controller.signal

    async function fetchData(){    
      try{
        setIsLoading(true)
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`, {signal})
        setCharacters(data.results.slice(0,5))
      }
      catch(err){
        if(!axios.isCancel()){
          setCharacters([])
          toast.error(err.response.data.error)
        }
      }
      finally{
        setIsLoading(false)
      }
    }

    if(query.length < 3){
      setCharacters([])
      return
    }
    fetchData()

    return ()=>{
      controller.abort()
    }
  }, [query]);

  useEffect(()=>{
    localStorage.setItem("FAVORITES", JSON.stringify(favorites))
  }, [favorites])

const handleSelectedCharacter = (id)=> {
  setSelectedId(prevId => prevId === id ? null : id)
}
// console.log(selectedId)
const handleAddFavorite = (char)=> {
  setFavorites((prevFave)=> [...prevFave, char])
}

const handleDeleteFavorites = (id)=> {
  setFavorites((prevFav)=> prevFav.filter(fav=> fav.id !== id))
}

const isAddedToFavorites = favorites.map(fav => fav.id ).includes(selectedId)


  return (
    <div className='container mx-auto max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-5xl p-5 relative'>
      <Toaster/>
      <Navbar>
        <Search query={query} setQuery={setQuery}/>
        <SearchResult numOfSearchResult={characters.length}/>
        <Favorites favorites={favorites} onDeleteFavorite={handleDeleteFavorites}/>
      </Navbar>     
      <Main>
        <CharacterList characters={characters} isLoading={isLoading} onSelectCharacter={handleSelectedCharacter} selectedId={selectedId}/>
        <CharacterDetail selectedId={selectedId} onAddFavorite={handleAddFavorite} isAddedToFavorites={isAddedToFavorites}/>
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
