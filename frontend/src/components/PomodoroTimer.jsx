import React, {useState, useEffect} from 'react';

import doneSound from './audio/done.mp3';

import pauseSound from './audio/pause.mp3';

import forwardSound from './audio/forward.mp3';

import fastForward from './images/fast-forward.png'

const PomodoroTimer = ({duration}) => {

    const [time, setTime] = useState(duration);

    const [paused, setPause] = useState(true);

    const [stage, setStage] = useState(1);

    const [cycleCount, setCycleCount] = useState(1);

    const [skipped, setSkipped] = useState(false);

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

            if(!skipped) new Audio(doneSound).play();

            let newStage = 0;

            if(stage === 1 && (cycleCount % 4 === 0)) {
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



    }, [time, stage, cycleCount, skipped])

    const getFormattedTime = () => {

        let total_seconds = parseInt(Math.floor(time / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);

        let minutesDisplay = (minutes < 10) ? `0${minutes}` : `${minutes}`;

        let secondsDisplay =  (seconds < 10) ? `0${seconds}` : `${seconds}`;

        return minutesDisplay + ":" + secondsDisplay;
  
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

        <div id="pomodoro-content" className="rc1">
            
            <div id="functions-container" className="rc2">

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
                    <p className='merriweather-sans'>{getFormattedTime()}</p>
                </div>

                <div id="timer-actions">
                    <button className="rc2 font bebas" id="pause" onClick={() => {
                        setPause(!paused);
                        new Audio(pauseSound).play();
                    }}>
                        {!paused ? 'Pause' : 'Start'}
                    </button>
                    <button 
                        className={paused ? "collapse" : "rc2"}
                        id="fast-forward" 
                        onClick={() => {
                            new Audio(forwardSound).play();
                            setSkipped(true);
                            setTime(0);
                    }}><img alt="Fast Forward Button" src={fastForward}/></button>
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