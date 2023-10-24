import {EyeIcon} from "@heroicons/react/24/outline"
function CharacterList({allCharacters}) {
  return (
    <div className="w-full lg:w-[40%]">
        {
            allCharacters.map(item => (
                <Character key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default CharacterList

function Character({item}){
    return(
        <div className="w-full bg-slate-800 rounded-xl flex justify-between items-center p-2 mb-4">
            <img src={item.image} alt={item.name}
            className="w-20 h-20 rounded-xl" />
            <div>
                <h3>
                    <span>👨🏻‍🦰</span>
                    <span className="text-slate-200 font-bold"> {item.name} </span>
                </h3>
                <div className="text-slate-200 text-sm flex items-center gap-x-1">
                    <span className={`w-3 h-3  rounded-full ${item.status === "Dead" ? "bg-red-500" : "bg-green-500"}`}></span>
                    <span> {item.status}</span>
                    <span> - {item.species}</span>
                </div>
            </div>
            <button className="w-6 h-6 sm:w-8 sm:h-8 text-red-500"><EyeIcon /></button>
        </div>
    )
}