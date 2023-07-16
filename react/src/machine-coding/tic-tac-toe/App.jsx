// Status: {!winner ? 'Pending' : winner + " Won"}
import { useEffect, useState } from 'react';
import style from './tictactoe.module.css';
import { initialArray, winningCombos } from './constant';

const App = () => {
    const [squares, setSquares] = useState(initialArray);
    const [isX, setIsX] = useState(false);
    const [winner, setWinner] = useState(null);
    const [[xWins, oWins, draw], setPlayerWins] = useState([0, 0, 0]);

    useEffect(() => {
        computeWin();
    }, [squares]);

    useEffect(() => {
        if (winner === 'X') {
            setPlayerWins([xWins + 1, oWins, draw]);
        } else if (winner === 'O') {
            setPlayerWins([xWins, oWins + 1, draw]);
        } else if (winner === null && squares.filter(square => square === null).length === 0) {
            setPlayerWins([xWins, oWins, draw + 1]);
        }
    }, [winner, squares]);

    const computeWin = () => {
        setIsX(!isX);
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a] === 1 ? 'X' : 'O');
                return;
            }
        }
    };

    const onEntry = (iTh) => {
        if (squares[iTh] === null && winner === null) {
            setSquares(prevSquares => {
                const _prevSquares = [...prevSquares];
                _prevSquares[iTh] = isX ? 1 : 0;
                return _prevSquares;
            });
        }
    };

    const rematch = () => {
        setSquares(initialArray);
        setWinner(null);
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
                        <Squares
                            key={i}
                            iTh={i}
                            value={square}
                            onEntry={onEntry}
                        />
                    ))}
                </div>
                <button onClick={rematch}>Rematch</button>
            </div>
        </div>
    );
};

const Squares = ({ value, iTh, onEntry }) => {
    useEffect(() => {
        console.log({ value });
    }, []);

    const handleClick = () => {
        onEntry(iTh);
    };

    return (
        <div className={style["grid-item"]} onClick={handleClick}>
            <div style={{ opacity: value !== null ? 1 : 0, transition: 'all .1s ease-in-out' }}>
                {value !== null ? (value === 1 ? 'X' : 'O') : 'X'}
            </div>
        </div>
    );
};

export default App;
