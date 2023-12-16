import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {  useSelector } from "react-redux";


const ClassList = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        getClasses();
    }, []);

    const getClasses = async () => {
        const response = await axios.get("http://localhost:5000/classes");
        setClasses(response.data);
    };

    const deleteClass = async (classId) => {
        await axios.delete(`http://localhost:5000/classes/${classId}`);
        getClasses();
    };

    return (
        <div>
        <h1 className="title">Classes</h1>
        <h2 className="subtitle">List of Class</h2>
        {user && user.role === "admin" && (
        <Link to="/classes/add" className="button is-success mb-2">
            Add New
        </Link>
        )}
        <table className="table is-bordered is-fullwidth">
            <thead>
            <tr>
                <th>No</th>
                <th>Class Name</th>
                <th>Description</th>
                <th>Visibility</th>
                <th>Dosen</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {classes.map((myClass, index) => (
                <tr key={myClass.uuid}>
                <td>{index + 1}</td>
                <td>{myClass.classname}</td>
                <td>{myClass.description}</td>
                <td>{myClass.visibility}</td>
                <td>{myClass.user.name}</td>
                <td>
                    <Link
                        to={`/questions`}
                        className="button is-warning mb-2"
                        >
                        View
                    </Link>
                    
                    {user && user.role === "admin" && (
                    <Link
                        to={`/classes/edit/${myClass.uuid}`}
                        className="button is-info mb-2"
                        >
                        Edit
                    </Link>
                    )}

                    {user && user.role === "admin" && (
                    <button
                        onClick={() => deleteClass(myClass.uuid)}
                        className="button is-danger"
                        >
                        Delete
                    </button>
                    )}

                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default ClassList;