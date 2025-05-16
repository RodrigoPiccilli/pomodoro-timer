import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PomodoroTimer from "./components/PomodoroTimer.jsx"

import Settings from "./components/Settings.jsx"

const AppContent = () => {

    return (
        <div className="app-container be">

            <header id="pomodoro-header" className="rc1">
                <h1 className="bebas">Pomodoro Timer</h1>
                {<Settings></Settings>}
            </header>

            <Routes> 
                <Route path='/' element= {<PomodoroTimer duration={25 * 60 * 1000}/> }> </Route>
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
