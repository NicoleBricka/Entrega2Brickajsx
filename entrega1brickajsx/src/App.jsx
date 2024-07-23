
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./componentes/NavBar"; 
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import CategoryContainer from "./componentes/CategoryContainer/CategoryContainer";


function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenidos" />} />
                <Route path="/category/:categoryId" element={<CategoryContainer />} />
                <Route path="/product/:productId" element={<ItemDetailContainer />} />
            </Routes>
        </Router>
        );
        
}

export default App;


