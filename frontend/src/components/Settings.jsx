import React, {useState} from 'react'

const Settings = () => {


    const [openMenu, setOpenMenu] = useState(false);


    return (

        <div>

            <button className="settings" onClick={() => {setOpenMenu(true);}}><i className="fas fa-cog"></i></button>

            <div className=
                {openMenu ? "settings-outline open" : "settings-outline"}>

                <div className="settings-menu">
                    
                    <div id="menu-header">
                        <h2 className="bebas rc2 font">SETTINGS</h2>
                        <button onClick={() => setOpenMenu(false)}>X</button>
                    </div>
                    
                    <div id="timer-settings" className="merriweather-sans">
                        <div className="vertical-stack">
                            <label for="pomodoro-setting">Pomodoro</label>
                            <input id="pomodoro-setting" type="number" min="1" max="999"></input>
                        </div>

                        <div className="vertical-stack">
                            <label for="sb-setting">Short Break</label>
                            <input id="sb-setting" type="number" min="1" max="999"></input>
                        </div>

                        <div className="vertical-stack">
                            <label for="lb-setting">Long Break</label>
                            <input id="lb-setting" type="number" min="1" max="999"></input>
                        </div>
                      
                    </div>

                    <div className="horizontal-stack merriweather-sans">
                        <label for="lb-interval">Long Break Interval</label>
                        <input type="number" id="lb-interval"></input>
                    </div>

                    <button id="exit-settings" className="bebas rc2 font" onClick={() => setOpenMenu(false)}>OK</button>

        
                
                </div>
            </div>









        </div>




    );


};

export default Settings;