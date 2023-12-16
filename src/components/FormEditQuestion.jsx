import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditQuestion = () => {
    const [question_text, setQuestion_text] = useState("");
    const [topic, setTopic] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [answer_text_1, setAnswer_text_1] = useState("");
    const [answer_text_2, setAnswer_text_2] = useState("");
    const [answer_text_3, setAnswer_text_3] = useState("");
    const [answer_text_4, setAnswer_text_4] = useState("");
    const [answer_text_5, setAnswer_text_5] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

  useEffect(() => {
        const getQuestionById = async () => {
        try {
            const response = await axios.get(
            `http://localhost:5000/questions/${id}`
            );
            setQuestion_text(response.data.question_text);
            setTopic(response.data.topic);
            setDifficulty(response.data.difficulty);
            setAnswer_text_1(response.data.answer_text_1);
            setAnswer_text_2(response.data.answer_text_2);
            setAnswer_text_3(response.data.answer_text_3);
            setAnswer_text_4(response.data.answer_text_4);
            setAnswer_text_5(response.data.answer_text_5);

        } catch (error) {
            if (error.response) {
            setMsg(error.response.data.msg);
            }
        }
        };
        getQuestionById();
    }, [id]);

    const updateQuestion = async (e) => {
        e.preventDefault();
        try {
        await axios.patch(`http://localhost:5000/questions/${id}`, {
            question_text: question_text,
            topic: topic,
            difficulty: difficulty,
            answer_text_1: answer_text_1,
            answer_text_2: answer_text_2,
            answer_text_3: answer_text_3,
            answer_text_4: answer_text_4,
            answer_text_5: answer_text_5,
        });
        navigate("/questions");
        } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
        }
    };

    return (
        <div>
        <h1 className="title">Questions</h1>
        <h2 className="subtitle">Edit Question</h2>
        <div className="card is-shadowless">
            <div className="card-content">
            <div className="content">
                <form onSubmit={updateQuestion}>
                <p className="has-text-centered">{msg}</p>
                
                <div className="field">
                    <label className="label">Question Text</label>
                    <div className="control">
                    <input
                        type="text"
                        className="input"
                        value={question_text}
                        onChange={(e) => setQuestion_text(e.target.value)}
                        placeholder="Question Text"
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Topic</label>
                    <div className="control">
                    <input
                        type="text"
                        className="input"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="Topic"
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Difficulty</label>
                    <div className="control">
                    <div className="select is-fullwidth">
                        <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        >
                        <option value="Mudah">Mudah</option>
                        <option value="Sedang">Sedang</option>
                        <option value="Sulit">Sulit</option>
                        </select>
                    </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Answer 1 (Correct)</label>
                    <div className="control">
                    <input
                        type="text"
                        className="input"
                        value={answer_text_1}
                        onChange={(e) => setAnswer_text_1(e.target.value)}
                        placeholder="Answer 1 (Correct)"
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Answer 2</label>
                    <div className="control">
                    <input
                        type="text"
                        className="input"
                        value={answer_text_2}
                        onChange={(e) => setAnswer_text_2(e.target.value)}
                        placeholder="Answer 2"
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Answer 3</label>
                    <div className="control">
                    <input
                        type="text"
                        className="input"
                        value={answer_text_3}
                        onChange={(e) => setAnswer_text_3(e.target.value)}
                        placeholder="Answer 3"
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Answer 4</label>
                    <div className="control">
                    <input
                        type="text"
                        className="input"
                        value={answer_text_4}
                        onChange={(e) => setAnswer_text_4(e.target.value)}
                        placeholder="Answer 4"
                    />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Answer 5</label>
                    <div className="control">
                    <input
                        type="text"
                        className="input"
                        value={answer_text_5}
                        onChange={(e) => setAnswer_text_5(e.target.value)}
                        placeholder="Answer 5"
                    />
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

export default FormEditQuestion;