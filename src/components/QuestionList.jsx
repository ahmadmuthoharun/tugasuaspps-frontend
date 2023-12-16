import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {  useSelector } from "react-redux";


const QuestionList = () => {
    const [questions, setQuestions] = useState([]);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {
        const response = await axios.get("http://localhost:5000/questions");
        setQuestions(response.data);
    };

    const deleteQuestion = async (questionId) => {
        await axios.delete(`http://localhost:5000/questions/${questionId}`);
        getQuestions();
    };

    return (
        <div>
        <h1 className="title">Questions</h1>
        <h2 className="subtitle">List of Question</h2>
        {user && user.role === "admin" && (
        <Link to="/questions/add" className="button is-success mb-2">
            Add New
        </Link>
        )}
        <table className="table is-bordered is-fullwidth">
            <thead>
            <tr>
                <th>No</th>
                <th>Question Text</th>
                <th>Topic</th>
                <th>Difficulty</th>
                <th>Answer 1 (Correct)</th>
                <th>Answer 2</th>
                <th>Answer 3</th>
                <th>Answer 4</th>
                <th>Answer 5</th>
                <th>Created By</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {questions.map((question, index) => (
                <tr key={question.uuid}>
                <td>{index + 1}</td>
                <td>{question.question_text}</td>
                <td>{question.topic}</td>
                <td>{question.difficulty}</td>
                <td>{question.answer_text_1}</td>
                <td>{question.answer_text_2}</td>
                <td>{question.answer_text_3}</td>
                <td>{question.answer_text_4}</td>
                <td>{question.answer_text_5}</td>
                <td>{question.user.name}</td>
                <td>
                    <Link
                        to={`/questions`}
                        className="button is-warning mb-2"
                        >
                        View
                    </Link>
                    
                    {user && user.role === "admin" && (
                    <Link
                        to={`/questions/edit/${question.uuid}`}
                        className="button is-info mb-2"
                        >
                        Edit
                    </Link>
                    )}

                    {user && user.role === "admin" && (
                    <button
                        onClick={() => deleteQuestion(question.uuid)}
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

export default QuestionList;