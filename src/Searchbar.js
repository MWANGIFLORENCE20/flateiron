import React from "react";

function Searchbar (){
    return(
        <div className="Searchbar">
            
            <input type="text" id="searchbar" placeholder="Search your recent transations"></input>
            <link rel="manifest"
             href="%PUBLIC_URL%/manifest.json" />
             <span className="material-symbols-outlined">search
            </span>
        </div>
    )
}

export default Searchbar