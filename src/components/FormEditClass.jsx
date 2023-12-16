import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditClass = () => {
    const [classname, setClassname] = useState("");
    const [description, setDescription] = useState("");
    const [visibility, setVisibility] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

  useEffect(() => {
        const getClassById = async () => {
        try {
            const response = await axios.get(
            `http://localhost:5000/classes/${id}`
            );
            setClassname(response.data.classname);
            setDescription(response.data.description);
            setVisibility(response.data.visibility);
        } catch (error) {
            if (error.response) {
            setMsg(error.response.data.msg);
            }
        }
        };
        getClassById();
    }, [id]);

    const updateClass = async (e) => {
        e.preventDefault();
        try {
        await axios.patch(`http://localhost:5000/classes/${id}`, {
            classname: classname,
            description: description,
            visibility: visibility,
        });
        navigate("/classes");
        } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
        }
    };

    return (
        <div>
        <h1 className="title">Classes</h1>
        <h2 className="subtitle">Edit Class</h2>
        <div className="card is-shadowless">
            <div className="card-content">
            <div className="content">
                <form onSubmit={updateClass}>
                <p className="has-text-centered">{msg}</p>
                <div className="field">
                    <label className="label">Class Name</label>
                    <div className="control">
                    <input
                        type="text"
                        className="input"
                        value={classname}
                        onChange={(e) => setClassname(e.target.value)}
                        placeholder="Class Name"
                    />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                    <textarea
                        type="text"
                        className="textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Visibility</label>
                    <div className="control">
                    <div className="select is-fullwidth">
                        <select
                        value={visibility}
                        onChange={(e) => setVisibility(e.target.value)}
                        >
                        <option value="Show">Show</option>
                        <option value="Hide">Hide</option>
                        </select>
                    </div>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                    <button type="submit" className="button is-success">
                        Update
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default FormEditClass;