// Status: {!winner ? 'Pending' : winner + " Won"}
import { useEffect, useState } from 'react';
import style from './tictactoe.module.css';
import { initialArray, winningCombos } from './constant';

const App = () => {
    const [squares, setSquares] = useState(initialArray);
    const [isX, setIsX] = useState(false);
    const [winner, setWinner] = useState(null);
    const [[xWins, oWins, draw], setPlayerWins] = useState([0, 0, 0]);

    const onEntry = (iTh) => {
    };

    const rematch = () => {

    };

    return (
        <div className={style["container"]}>
            <div>
                Status:  {((winner) ? `Winner ${winner}` : 'Playing')}
                <div className={style["container"]}>
                    <div className={style["mx-5"]}>
                        <div>X</div>
                        <div>{xWins} Wins</div>
                    </div>
                    <div className={style["mx-5"]}>
                        <div>O</div>
                        <div>{oWins} Wins</div>
                    </div>
                    <div>
                        <div>=</div>
                        <div>{draw} Draws</div>
                    </div>
                </div>
                <div className={style["grid-container"]}>
                    {squares.map((square, i) => (
                        <Squares />
                    ))}
                </div>
                <button onClick={rematch}>Rematch</button>
            </div>
        </div>
    );
};

const Squares = ({ value, iTh, onEntry }) => {

    return (
        <div className={style["grid-item"]} >
            <div >
                {value !== null ? (value === 1 ? 'X' : 'O') : 'X'}
            </div>
        </div>
    );
};

export default App;
