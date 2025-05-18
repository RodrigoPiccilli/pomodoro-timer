import React, {useState} from 'react'

import { getFormattedTimeSettings } from '../utils/formattedTime.js';


const Settings = ({pomodoroDuration, sbDuration, lbDuration, lbInterval, setPomodoroDuration, setSbDuration, setLbDuration, setLbInterval, setTheme}) => {


    const [openMenu, setOpenMenu] = useState(false);

    const [pomodoroInput, setPomodoroInput] = useState('');

    const [sbInput, setSbInput] = useState('');

    const [lbInput, setLbInput] = useState('');

    const [intervalInput, setIntervalInput] = useState('');

    const [themeInput, setThemeInput] = useState("rc");
    

    const convertToMS = (mins) => {
        return (Number(mins) * 60 * 1000)
    }


    return (

        <div>

            <button className={`settings ${themeInput}`} onClick={() => {setOpenMenu(true);}}>
                <i className="fas fa-cog"></i>
                
                </button>

            <div className=
                {openMenu ? "settings-outline open" : "settings-outline"}>

                <div className="settings-menu">
                    
                    <div id="menu-header">
                        <h2 className="bebas rc2 font">SETTINGS</h2>
                    </div>

                    <h3 className="section-title merriweather-sans">TIMER</h3>
                    
                    <div id="timer-settings" className="merriweather-sans">

                        <div className="vertical-stack">
                            <label for="pomodoro-setting">Pomodoro</label>
                            <input
                                id="pomodoro-setting" 
                                type="number" 
                                className={themeInput}
                                min="1" 
                                max="999" 
                                value={pomodoroInput}
                                placeholder={getFormattedTimeSettings(pomodoroDuration)}
                                onChange={(e) => {
                                    setPomodoroDuration(convertToMS(e.target.value));
                                    setPomodoroInput(e.target.value);
                                }}
                            ></input>
                        </div>

                        <div className="vertical-stack">
                            <label for="sb-setting">Short Break</label>
                            <input 
                                id="sb-setting" 
                                type="number" 
                                min="1" 
                                max="999"
                                className={themeInput}
                                value={sbInput}
                                placeholder={getFormattedTimeSettings(sbDuration)} 
                                onChange={(e) => {
                                    setSbDuration(convertToMS(e.target.value));
                                    setSbInput(e.target.value);
                                }}
                            
                            ></input>
                        </div>

                        <div className="vertical-stack">
                            <label for="lb-setting">Long Break</label>
                            <input 
                                id="lb-setting" 
                                type="number"
                                min="1" 
                                max="999" 
                                value={lbInput}
                                className={themeInput}
                                placeholder={getFormattedTimeSettings(lbDuration)}
                                onChange={(e) => {
                                    setLbDuration(convertToMS(e.target.value));
                                    setLbInput(e.target.event);
                                }}
                            ></input>
                        </div>
                      
                    </div>

                    <div className="horizontal-stack merriweather-sans">
                        <label for="lb-interval">Long Break Interval</label>
                        <input 
                            type="number" 
                            id="lb-interval"
                            value={intervalInput}
                            placeholder={lbInterval}
                            className={themeInput}
                            onChange={(e) => {
                                setLbInterval(e.target.value);
                                setIntervalInput(e.target.event)
                            }}></input>
                    </div>

                    <h3 className="section-title merriweather-sans">THEME</h3>

                    <div className="horizontal-stack merriweather-sans">
                        
                        <div id="color-themes">
                            <label htmlFor="theme-dropdown">Color Themes</label>
                            <select 
                                id="theme-dropdown" 
                                value={themeInput}
                                className={themeInput}
                                onChange={(e) => {
                                    setThemeInput(e.target.value);
                                    setTheme(e.target.value);
                                }}
                            >
                                <option value="" hidden>Select Color Theme</option>
                                <option value="rc">Red</option>
                                <option value="oc">Orange</option>
                                <option value="bc">Blue</option>

                            </select>
                        </div>



                    </div>


                    <button id="exit-settings" className={`bebas ${themeInput}2`} onClick={() => {
                        setOpenMenu(false);  
                        setPomodoroInput("");
                        setSbInput("");
                        setLbInput("");          
                        setIntervalInput("");
                    }}>OK</button>
                </div>
            </div>









        </div>




    );


};

export default Settings;