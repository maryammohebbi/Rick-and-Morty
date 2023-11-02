import {ArrowDownCircleIcon} from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "./Loader"
import toast from "react-hot-toast"

function CharacterDetail({selectedId, onAddFavorite, isAddedToFavorites}) {
    const [character, setCharacter] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [episodes, setEpisodes] = useState([])

    useEffect(()=>{
        async function fetchCharacter(){
                try {
                    setIsLoading(true)
                    const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${selectedId}`)
                    setCharacter(data)

                    const episodesId = data.episode.map((e) => e.split("/").at(-1))
                    const {data: episodeData} = await axios.get(`https://rickandmortyapi.com/api/episode/${episodesId}`)
                    setEpisodes([episodeData].flat().slice(0, 6))

                } catch (err) {
                    toast.error(err.response.data.error)
                }
                finally{
                    setIsLoading(false)
                }
        }
        if(selectedId) fetchCharacter();

    }, [selectedId])

    if(isLoading){
        return(
            <div className='w-full lg:w-[60%]'>
                <Loader/>
            </div>
        )
    }

    if(!character || !selectedId) {
        return (
            <div className='w-full lg:w-[60%]'>
                <p className="text-slate-300 font-bold text-lg">Please search and select a character</p>
            </div>            
        )
    }


  return (
    <div className='w-full lg:w-[60%]'>
        <CharacterSubInfo character={character} onAddFavorite={onAddFavorite} isAddedToFavorites={isAddedToFavorites}/>
        <EpisodeList episodes={episodes}/>
    </div>
  )
}

export default CharacterDetail

function CharacterSubInfo({character, onAddFavorite, isAddedToFavorites}){
    return(
        <div className="bg-slate-800 flex rounded-lg gap-x-2 p-1 mb-8">
            <img src={character.image} alt={character.name} 
            className="w-36 h-auto md:w-52 rounded-lg"/>
            <div className="flex flex-col gap-y-3">
                <h3>
                    <span> 👨🏻‍🦰 </span>
                    <span className="text-slate-200 font-bold"> {character.name}</span>
                </h3>
                <div className="text-slate-200 text-sm flex items-center gap-x-1">
                    <span className={`w-3 h-3 rounded-full ${character.status === "Dead" ? "bg-red-500" : "bg-green-500"}`}></span>
                    <span> {character.status}</span>
                    <span> - {character.species}</span>
                </div>
                <div>
                    <p className="text-sm text-slate-400">Last known location:</p>
                    <p className="text-sm font-bold text-slate-300">{character.location.name}</p>
                </div>
                {
                    isAddedToFavorites ? (<p className="text-slate-400 font-bold">Already added to your favorites!✔ </p>)
                    :
                    (
                        <button 
                            onClick={()=> onAddFavorite(character)}
                            className="w-auto h-10 p-2 bg-slate-400 rounded-lg text-sm md:text-base">
                                Add To Favorites
                        </button>
                    )
                }
            </div>
        </div>
    )
}

function EpisodeList({episodes}){
    return(
        <div className="bg-slate-800 rounded-lg p-2">
            <div className="flex justify-between mb-3">
                <h2 className="text-slate-300 font-bold text-lg">List Of Episodes</h2>
                <button className="w-6 h-6 text-slate-300">
                   <ArrowDownCircleIcon/> 
                </button>
            </div>
            <ul>
                {
                    episodes.map((item, index) => (
                        <li key={item.id} className="flex justify-between text-slate-400 mb-2">
                            <div>{String(index + 1).padStart(2, "0")} - {item.episode}: <strong>{item.name}</strong></div>
                            <div className="bg-slate-500 text-slate-200 rounded-2xl text-xs p-1">{item.air_date}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}