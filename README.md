# Pomodoro Timer
A simple productivity timer that follows the Pomodoro Technique — 25 minutes of focused work followed by a 5-minute break. The app lets users start, pause, and reset a countdown timer, and visually tracks the current session (work or break).

## Key Features
- User's can change theme of app.
- User's can change the duration of work, short break, and long break timers.
- Sound alerts for start, pause, fast-forward, and time expiration.
- Shared state is managed by lifting state up to a common parent component, allowing child components (like the timer and settings) to communicate.
- Built using React functional components with useState, useEffect, and useCallback hooks.
- Timer countdown is managed using setInterval inside a useEffect.
