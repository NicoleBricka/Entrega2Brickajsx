
import React from "react";
import NavBar from "./componentes/NavBar"; 
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"


function App() {
    return (
        <div >
            <NavBar/>
            <ItemListContainer greeting={"Bienvenidos"}/>
        </div>
    );
}

export default App;


