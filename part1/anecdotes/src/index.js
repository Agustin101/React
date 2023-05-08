import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [points, setPoint] = useState(new Uint8Array(anecdotes.length));

    const handleNextClick = () => {
        let next;
        do {
            next = getRandomInt();
        } while (next === selected);
        setSelected(next);
    };

    const handleVoteClick = () => {
        const newPoints = points.map((p, i) => {
            if (i === selected) {
                return p + 1;
            }
            return p;
        });
        setPoint(newPoints);
    };

    const getRandomInt = () => Math.floor(Math.random() * anecdotes.length);

    const getMostVotedAnecdote = () => {
        let temp = 0;
        let index = 0;
        const res = points.forEach((c, i) => {
            if (temp < c) {
                temp = c;
                index = i;
            }
        });

        return { points: temp, index };
    };
    const mostVoted = getMostVotedAnecdote();

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{props.anecdotes[selected]}</p>
            <h2>Has {points[selected]} votes</h2>
            <button onClick={handleNextClick}>Next anecdote</button>
            <button onClick={handleVoteClick}>Vote</button>
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[mostVoted.index]}</p>
            <p>Has {mostVoted.points}</p>
        </div>
    );
};

const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
