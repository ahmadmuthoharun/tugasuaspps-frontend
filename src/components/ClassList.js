import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
    };

    const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:5000/products/${productId}`);
        getProducts();
    };

    return (
        <div>
        <h1 className="title">Classes</h1>
        <h2 className="subtitle">List of Class</h2>
        <Link to="/products/add" className="button is-success mb-2">
            Add New
        </Link>
        <table className="table is-bordered is-fullwidth">
            <thead>
            <tr>
                <th>No</th>
                <th>Class Name</th>
                <th>Description</th>
                <th>Visibility</th>
                <th>Created By</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => (
                <tr key={product.uuid}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.price}</td>
                <td>{product.user.name}</td>
                <td>
                    <Link
                        to={`/products/edit/${product.uuid}`}
                        className="button is-warning"
                        >
                        View
                    </Link>
                    <Link
                        to={`/products/edit/${product.uuid}`}
                        className="button is-info ml-2"
                        >
                        Edit
                    </Link>
                    <button
                        onClick={() => deleteProduct(product.uuid)}
                        className="button is-danger ml-2"
                        >
                        Delete
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default ProductList;