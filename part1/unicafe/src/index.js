import React, { useState } from "react";
import ReactDOM from "react-dom";

const StatisticLine = ({ amount, text }) => (
    <tr>
        <td>{text}</td>
        <td>{amount}</td>
    </tr>
);

const Statistics = ({ good, bad, neutral, total }) => {
    const average = total > 0 ? (good - bad) / total : 0;
    const positives = total > 0 ? (good / total) * 100 : 0;

    return (
        <>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <StatisticLine amount={good} text="Good" />
                    <StatisticLine amount={neutral} text="Neutral" />
                    <StatisticLine amount={bad} text="Bad" />
                    <StatisticLine amount={total} text="All" />
                    <StatisticLine amount={average} text="Average" />
                    <StatisticLine amount={positives} text="Positive" />
                </tbody>
            </table>
        </>
    );
};

const NoFeedBackPlaceholder = () => <h2>No feedback given.</h2>;

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const total = good + neutral + bad;

    const handleGood = () => setGood(good + 1);
    const handleNeutral = () => setNeutral(neutral + 1);
    const handleBad = () => setBad(bad + 1);

    return (
        <div>
            <h1>Give feedback</h1>
            <Button text="Good" handler={handleGood} />
            <Button text="Neutral" handler={handleNeutral} />
            <Button text="Bad" handler={handleBad} />
            {total === 0 ? (
                <NoFeedBackPlaceholder />
            ) : (
                <Statistics
                    good={good}
                    bad={bad}
                    neutral={neutral}
                    total={total}
                />
            )}
        </div>
    );
};

const Button = ({ text, handler }) => {
    return <button onClick={handler}>{text}</button>;
};

ReactDOM.render(<App />, document.getElementById("root"));
