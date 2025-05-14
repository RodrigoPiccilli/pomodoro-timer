import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PomodoroTimer from "./components/PomodoroTimer.jsx"

const AppContent = () => {

    return (
        <div className="app-container">

            <header id="pomodoro-header" className="ncsu">
                <h1>Pomodoro Timer</h1>
                <button className="settings">Settings</button>
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
