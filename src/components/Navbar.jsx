import {HeartIcon, TrashIcon} from "@heroicons/react/24/outline"
import { useState } from "react"
import Modal from "./Modal"
import { Character } from "./CharacterList"

function Navbar({children}) {
  return (
        
        <nav className="bg-slate-700 flex justify-between p-3 rounded-lg mb-5">
            <div className="hidden md:block text-slate-300 font-bold">LOGO😍</div>
            {children}
        </nav> 
    
  )
}

export default Navbar

export function Search({ query, setQuery }){
    return(
            <input 
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            type="text" placeholder="Search..."
            className="w-40 p-1 rounded-md bg-slate-500" />
    )
}

export function SearchResult({numOfSearchResult}){
    return(
        <div className="hidden md:block text-slate-400 text-sm">Found {numOfSearchResult} Characters</div>
    )
}

export function Favorites({favorites}){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <Modal onOpen={setIsOpen} open={isOpen} title="This is the modal title">
                {
                    favorites.map(item => (
                        <Character key={item.id} item={item}>
                            <button>
                                <TrashIcon className="w-6 h-6 text-red-400"/>
                            </button>
                        </Character> 
                    ))}
            </Modal>
            <button 
                onClick={()=> setIsOpen((is)=> !is)}
                className="relative w-8 h-8">
                    <HeartIcon className="w-full h-full text-red-600"/>
                    <span 
                    className="absolute w-5 h-5 bg-red-700 rounded-full -top-1 -right-2 text-xs text-slate-300 flex items-center justify-center font-bold">
                        {favorites.length}
                    </span>
            </button>
        </>
    )
}