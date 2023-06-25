import React from "react";

function Header({onDarkModeClick, currentMode}){
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {currentMode}
            </button>
        </header>
    )    
}

export default Header;