import "./App.css";

import { useReducer, useRef, useState } from "react";
import reducer, { initialState } from "./components/TodoList/recuder";
import Input from "./components/Input";
import Task from "./components/Task";
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { job, jobs } = state;
    const [visible, setVisible] = useState({
        all: true,
        active: false,
        completed: false,
    });
    const inputRef = useRef();
    const handleOnchange = (e) => {
        dispatch({ type: "SET_JOB", payload: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (job === "") {
            return null;
        }
        dispatch({
            type: "ADD_JOB",
            payload: { isEdit: false, value: job, isCompleted: false },
        });

        dispatch({ type: "SET_JOB", payload: "" });
        inputRef.current.focus();
    };

    const handleDelete = (index) => {
        dispatch({ type: "DELETE_JOB", payload: index });
    };
    const toggleCompleted = (index) => {
        dispatch({ type: "TOGGLE_COMPLETED", payload: index });
    };

    const deleteAll = (e) => {
        e.preventDefault();
        dispatch({ type: "DELETE_ALL" });
    };
    console.log(jobs);
    return (
        <div className="App">
            <h2>#Todo</h2>

            <div className="category mb-10">
                <a
                    className={`${visible.all ? "active" : ""}`}
                    onClick={() => {
                        setVisible({
                            all: true,
                            active: false,
                            completed: false,
                        });
                    }}
                >
                    All
                </a>
                <a
                    className={`${visible.active ? "active" : ""}`}
                    onClick={() => {
                        setVisible({
                            all: false,
                            active: true,
                            completed: false,
                        });
                    }}
                >
                    Active
                </a>
                <a
                    className={`${visible.completed ? "active" : ""}`}
                    onClick={() => {
                        setVisible({
                            all: false,
                            active: false,
                            completed: true,
                        });
                    }}
                >
                    Completed
                </a>
            </div>
            {!visible.completed && (
                <Input
                    value={job}
                    onChange={handleOnchange}
                    onClick={handleSubmit}
                    inputRef={inputRef}
                />
            )}
            {visible.all && (
                <Task jobs={jobs} toggleCompleted={toggleCompleted} />
            )}
            {visible.active && (
                <Task jobs={jobs.filter((job) => job.isCompleted === false)} />
            )}
            {visible.completed && (
                <Task
                    jobs={jobs.filter((job) => job.isCompleted === true)}
                    toggleCompleted={toggleCompleted}
                    isCompleted
                    handleDelete={handleDelete}
                    deleteAll={deleteAll}
                />
            )}
        </div>
    );
}

export default App;
