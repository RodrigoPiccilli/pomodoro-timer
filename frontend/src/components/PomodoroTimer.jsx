import React, {useState, useEffect, useCallback} from 'react';

import { getFormattedTime } from '../utils/formattedTime.js';

import doneSound from './audio/done.mp3';

import pauseSound from './audio/pause.mp3';

import forwardSound from './audio/forward.mp3';

const PomodoroTimer = ({pomodoroDuration, sbDuration, lbDuration, lbInterval, theme}) => {

    const [time, setTime] = useState(pomodoroDuration);

    const [paused, setPause] = useState(true);

    const [stage, setStage] = useState(1);

    const [cycleCount, setCycleCount] = useState(1);

    const [skipped, setSkipped] = useState(false);

    useEffect(() => {
        if (stage === 1) {
            setTime(pomodoroDuration);
        } else if (stage === 2) {
            setTime(sbDuration);
        } else if (stage === 3) {
            setTime(lbDuration);
        }
    }, [pomodoroDuration, sbDuration, lbDuration, stage]);

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

    const changeStage = useCallback((stage) => {
        setPause(true);
        setStage(stage);

        if (stage === 1) {
            setTime(pomodoroDuration);
        } else if (stage === 2) {
            setTime(sbDuration);
        } else if (stage === 3) {
            setTime(lbDuration);
        }
    }, [setPause, setStage, setTime, pomodoroDuration, sbDuration, lbDuration]);


    useEffect(() => {

        if(time === 0) {

            if(!skipped) new Audio(doneSound).play();

            let newStage = 0;

            if(stage === 1 && (cycleCount % lbInterval === 0)) {
                newStage = 3;
            } else if(stage === 1) {
                newStage = 2;
            } else if(stage === 2 || stage === 3) {
                newStage = 1;
            }

            changeStage(newStage);

            if(newStage === 1) setCycleCount(prevCount => prevCount + 1);

        }

        setSkipped(false);



    }, [time, stage, cycleCount, skipped, lbInterval, changeStage])

    // const changeStage = (stage) => {

    //     setPause(true);
    //     setStage(stage);

    //     if(stage === 1) {
    //         setTime(pomodoroDuration);
    //     } else if(stage === 2) {
    //         setTime(sbDuration);
    //     } else if(stage === 3) {
    //         setTime(lbDuration);
    //     }

    // }

    

    

    return (

        <div id="pomodoro-content" className={`${theme}${stage}`}>
            
            <div id="functions-container" className={`${theme}${stage}`}>

                <div id="stages" >
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
                    <p className='merriweather-sans'>{getFormattedTime(time)}</p>
                </div>

                <div id="timer-actions">
                    <button className={`${theme}${stage} font bebas`} id="pause" onClick={() => {
                        setPause(!paused);
                        new Audio(pauseSound).play();
                    }}>
                        {!paused ? 'Pause' : 'Start'}
                    </button>
                    <button 
                        className={paused ? "collapse" : `${theme}${stage}`}
                        id="fast-forward" 
                        onClick={() => {
                            new Audio(forwardSound).play();
                            setSkipped(true);
                            setTime(0);
                    }}>
                    <i id="fast-forward-icon" class={`fa-solid fa-forward ${theme}${stage} font`}></i>

                    
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