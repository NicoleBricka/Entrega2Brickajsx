import React from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';

const products = [
    { id: 1, name: "Manzana", category: "frutas", description: "Una manzana roja super fresca" },
    { id: 2, name: "Naranja", category: "frutas", description: "Una naranja ideal para jugos" },
    { id: 3, name: "Zanahoria", category: "verduras", description: "Una zanahoria por kilos frescas" },
];

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    return (
        <div className="item-detail-container">
            {product ? (
                <>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <button>Añadir al carrito</button>
                </>
            ) : (
                <p>Producto no encontrado</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;