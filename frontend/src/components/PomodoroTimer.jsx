import React, {useState, useEffect} from 'react';


const PomodoroTimer = ({duration}) => {

    const [time, setTime] = useState(duration);

    const [paused, setPause] = useState(true);

    const [stage, setStage] = useState(1);

    const [cycleCount, setCycleCount] = useState(1);

    useEffect(() => {

        let interval = null;

        if (!paused) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1000);
            }, 1000);

        } else if (paused && interval !== null) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [paused]);

    useEffect(() => {

        if(time === 0) {

            const newStage = (stage % 3) + 1;

            changeStage(newStage); // THIS IS WRONG. WE DO NOT GO FROM SB to LB.

            if(newStage === 1) setCycleCount(prevCount => prevCount + 1);

        }

    }, [time])

    const getFormattedTime = () => {

        let total_seconds = parseInt(Math.floor(time / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);

        return (seconds < 10) ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  
    }

    const changeStage = (stage) => {

        setPause(true);
        setStage(stage);

        if(stage === 1) {
            setTime(25 * 60 * 1000);
        } else if(stage === 2) {
            setTime(5 * 60 * 1000);
        } else if(stage === 3) {
            setTime(15 * 60 * 1000);
        }

    }

    

    return (
        <div id="pomodoro-content" className="ncsu">
            
            <div id="functions-container" className="ncsu-light">

                <div id="stages">
                    <button id="pomodoro" className={stage === 1 ? "active" : ""} onClick={() => {
                        changeStage(1);
                    }}>Pomodoro</button>
                    <button id="sb" className={stage === 2 ? "active" : ""} onClick={() => {
                        changeStage(2);
                    }}>Short Break</button>
                    <button id="lb" className={stage === 3 ? "active" : ""} onClick={() => {
                        changeStage(3);
                    }}>Long Break</button>
                </div>

                <div id="timer-display">
                    <p className='merriweather-sans'>{getFormattedTime()}</p>
                </div>

                <div id="timer-actions">
                    <button className="ncsu-light-font" id="pause" onClick={() => setPause(!paused)}>
                        {!paused ? 'Pause' : 'Start'}
                    </button>
                </div>

            </div>

            <div id="cycle-info">
                <h3>#{cycleCount}</h3>
                <p>{stage === 1 ? "Focus" : "Break"} Time!</p>
            </div>
            

        </div>
    );
};

export default PomodoroTimer;