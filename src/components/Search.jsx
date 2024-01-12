import React, { useState } from "react"
import {XIcon, SearchIcon} from "@heroicons/react/solid"
import { mockSearchResults } from "../constants/mock"
import SearchResults from "./SearchResults"
import { searchSymbol } from "../api/stockAPI"
const Search = () => {
    const [selected, setSelected] = useState("") // Input, SetInput
    const [bestMatches, setBestMatches] = useState([]) // Input, SetInput

    const clear = () => {
        setSelected("")
        setBestMatches([])
    }

    const updateBestMatches = async () => {
        try {
            if (selected) {
                const searchResults = await searchSymbol(selected)
                const result = searchResults.result
                setBestMatches(result)
            }
        }
        catch(error) {
            setBestMatches([])
            console.log(error)
        }
    }

    return <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200 ">
        <input 
        type="text" 
        value={selected} 
        className="w-full px-4 py-2 focus:outline-none rounded-md" 
        placeholder="Search Stock Symbols"
        onChange={(event) => {
            setSelected(event.target.value)
        }}
        onKeyPress={(event) => {
           if (event.key === "Enter") {
            updateBestMatches();
           } 
        }}
        />

        {/* add input functionality */}
        {selected && (
                  <button onClick={clear} className="m-1">
                  <XIcon className="h-4 w-4 fill-gray-500" />
              </button>
        )}
  

        <button onClick={updateBestMatches} className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2" >
            <SearchIcon className="h-4 w-4 fill-gray-100"/>
        </button>

        {selected && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} /> 
        ) : null }


    </div>
}

export default Search