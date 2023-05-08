import { useState } from "react";
import "./app.css";

// const App = () => {
//     const [count, setCount] = useState(0);
//     // function HandleClick(e) {
//     //     e.preventDefault();
//     //     setCount(count + 1);
//     // }
//     // return (
//     //     <div>
//     //         <h1>{count}</h1>
//     //         <button onClick={HandleClick}>Update count</button>
//     //     </div>
//     // );

//     return (
//         <>
//             <h1>Shared state between components</h1>
//             <h3>Flobal count {count}</h3>
//             <Button count={count} setCount={setCount} title="First button!" />
//             <Button count={count} setCount={setCount} title="Second button!" />
//         </>
//     );
// };

// const Button = ({ count, setCount, title }) => {
//     const [myBtn, setMyBtn] = useState(0);

//     function HandleClick() {
//         setCount(count + 1);
//         setMyBtn(myBtn + 1);
//     }

//     return (
//         <>
//             <h2>{myBtn}</h2>
//             <button onClick={HandleClick}>{title}</button>;
//         </>
//     );
// };

// const App = () => {
//     const [left, setLeft] = useState(0);
//     const [right, setRight] = useState(0);

//     return (
//         <div>
//             {left}
//             <button onClick={() => setLeft(left + 1)}>left</button>
//             <button onClick={() => setRight(right + 1)}>right</button>
//             {right}
//         </div>
//     );
// };

// const MensajeNoClicks = () => <p>Aun no se ha clickeado</p>;

// const CantidadClicks = ({ clicks }) => {
//     return (
//         <>
//             <p>Clicks totales {clicks.length}</p>
//             <p>{clicks}</p>
//         </>
//     );
// };

// const App = () => {
//     const [state, setState] = useState({
//         left: 0,
//         right: 0,
//     });

//     const [clicks, setClicks] = useState([]);

//     function HandleLeftClick() {
//         setState({
//             ...state,
//             left: state.left + 1,
//         });
//         setClicks((prev) => [...prev, "L"]);
//     }

//     function HandleRigthClick() {
//         setState({
//             ...state,
//             right: state.right + 1,
//         });
//         setClicks((prev) => [...prev, "R"]);
//     }

//     return (
//         <div>
//             {state.left}
//             <button onClick={HandleLeftClick}>left</button>
//             <button onClick={HandleRigthClick}>right</button>
//             {state.right}
//             {clicks.length === 0 ? (
//                 <MensajeNoClicks />
//             ) : (
//                 <CantidadClicks clicks={clicks} />
//             )}
//         </div>
//     );
// };

const App = () => {
    const [count, setCount] = useState(1);

    const incrementar = (valor) => () => setCount(count + valor);

    const setToValue = (val) => {
        setCount(val);
    };

    return (
        <>
            <h1>
                Usando funciones que retornan funciones para alterar estados
            </h1>
            <h3>Total actual: {count}</h3>
            <button onClick={incrementar(1500)}>Aumentar </button>
            <button onClick={() => setToValue(3000)}>Aumentar </button>
        </>
    );
};

export default App;
