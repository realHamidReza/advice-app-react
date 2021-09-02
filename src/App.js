import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
    const [singleAdvice, setSingleAdvice] = useState("");

    useEffect(() => {
        fetchAdvice();
        // eslint-disable-next-line
    }, []);

    const fetchAdvice = () => {
        axios
            .get("https://api.adviceslip.com/advice")
            .then((response) => {
                const { advice } = response.data.slip;
                setSingleAdvice(advice);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{singleAdvice}</h1>
                <button onClick={fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
            </div>
        </div>
    );
};

export default App;
