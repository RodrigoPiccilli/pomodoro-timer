import './App.css';

import React, {useState} from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PomodoroTimer from "./components/PomodoroTimer.jsx"

import Settings from "./components/Settings.jsx"

const AppContent = () => {

    const [pomodoroDuration, setPomodoroDuration] = useState(25 * 60 * 1000);

    const [sbDuration, setSbDuration] = useState(5 * 60 * 1000);

    const [lbDuration, setLbDuration] = useState(15 * 60 * 1000);

    const [lbInterval, setLbInterval] = useState(4);

    const [theme, setTheme] = useState("rc");


    return (
        <div className="app-container">

            <header id="pomodoro-header" className={`${theme}1`}>
                <h1 className="bebas">Pomodoro Timer</h1>
                {<Settings 
                    pomodoroDuration={pomodoroDuration} 
                    sbDuration={sbDuration}
                    lbDuration={lbDuration}
                    lbInterval={lbInterval}
                    setPomodoroDuration={setPomodoroDuration}
                    setSbDuration={setSbDuration}
                    setLbDuration={setLbDuration}
                    setLbInterval={setLbInterval}
                    setTheme={setTheme}
                    >
                </Settings>}
            </header>

            <Routes> 
                <Route path='/' element= {<PomodoroTimer 
                    pomodoroDuration={pomodoroDuration} 
                    sbDuration={sbDuration}
                    lbDuration={lbDuration}
                    lbInterval={lbInterval}
                    theme={theme}
                /> }> </Route>
            </Routes>
        </div>
    )
    


}

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <AppContent />
         </BrowserRouter>
        
    </div>
  );
}

export default App;
