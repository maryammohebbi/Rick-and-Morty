import { useEffect, useState } from 'react'
import Navbar, { Favorites, Search, SearchResult } from './components/Navbar'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
import { Toaster } from 'react-hot-toast'
import useCharacters from './hooks/useCharacters'

function App() {

  const [query, setQuery] = useState("")
  const {characters, isLoading} = useCharacters("https://rickandmortyapi.com/api/character/?name",query)
  const [selectedId, setSelectedId] = useState(null)
  const [favorites, setFavorites] = useState(()=> JSON.parse(localStorage.getItem("FAVORITES")) || [])




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
