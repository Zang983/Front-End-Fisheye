import photographerObj from "../object/photographerObj.js"

export default function photographerFactory(data,src) {
    if(src === "json"){
        return new photographerObj(data)
    }

    }
   
