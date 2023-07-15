import style from './stopwatch.module.css'

// Countdown Component
const App = () => {

    return (
        <div className={style['test']}>
            {/* Watch UI */}
            <div className={style['watch-container']}>
                <div className={style['watch']}>
                    <div>
                        Stopwatch
                    </div>
                    <div className={style['watch-timer']}>
                        {/* Display the timer string */}
                        00:00:00
                    </div>
                    <div className={style['watch-btn__container']}>
                        {/* Start button */}
                        <button

                            className={style['watch-btn']}
                        >
                            Start
                        </button>

                        {/* Stop button */}
                        <button
                            className={style['watch-btn']}
                        >
                            Stop
                        </button>

                        {/* Reset button */}
                        <button

                            className={style['watch-btn']}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
