import React from "react";
import { useParams } from "react-router-dom";
import './CategoryContainer.css';

const products = [
    { id: 1, name: "Manzana", category: "frutas" },
    { id: 2, name: "Naranja", category: "frutas" },
    { id: 3, name: "Zanahoria", category: "verduras" },
];

const CategoryContainer = () => {
    const { categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
    setFilteredProducts(products.filter(product => product.category === categoryId));
    }, [categoryId]);

    return (
        <div className="category-container">
            <h1>Category: {categoryId}</h1>
            <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}

export default CategoryContainer;