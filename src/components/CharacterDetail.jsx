import {ArrowDownCircleIcon} from "@heroicons/react/24/outline"
function CharacterDetail() {
  return (
    <div className='w-full lg:w-[60%]'>
        <CharacterSubInfo/>
        <EpisodeList/>
    </div>
  )
}

export default CharacterDetail

function CharacterSubInfo(){
    return(
        <div className="bg-slate-800 flex rounded-lg gap-x-2 p-1 mb-8">
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" 
            className="w-36 h-36 md:w-52 md:h-52 rounded-lg"/>
            <div className="flex flex-col gap-y-3">
                <h3>
                    <span>👨🏻‍🦰</span>
                    <span className="text-slate-200 font-bold"> Character name</span>
                </h3>
                <div className="text-slate-200 text-sm">
                    <span>👨🏻‍🦰</span>
                    <span> Dead</span>
                    <span> - Human</span>
                </div>
                <button className="w-auto h-10 p-2 bg-slate-400 rounded-lg text-sm md:text-base">Add To Favorites</button>
            </div>
        </div>
    )
}

function EpisodeList(){
    return(
        <div className="bg-slate-800 rounded-lg p-2">
            <div className="flex justify-between mb-3">
                <h2 className="text-slate-300 font-bold text-lg">List Of Episodes</h2>
                <button className="w-6 h-6 text-slate-300">
                   <ArrowDownCircleIcon/> 
                </button>
            </div>
            <ul>
                <li className="flex justify-between text-slate-400 mb-2">
                    <div>00 - S01E01: <strong>Pilot</strong></div>
                    <div className="bg-slate-500 text-slate-200 rounded-2xl text-xs p-1">December 9, 2013</div>
                </li>
                <li className="flex justify-between text-slate-400">
                    <div>00 - S01E01: <strong>Pilot</strong></div>
                    <div className="bg-slate-500 text-slate-200 rounded-2xl text-xs p-1">December 9, 2013</div>
                </li>
            </ul>
        </div>
    )
}