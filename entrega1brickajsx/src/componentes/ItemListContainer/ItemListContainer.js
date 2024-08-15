import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Context";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"; 

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(docs);
        };

        getProducts();
    }, []);

    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;