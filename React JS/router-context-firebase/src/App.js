import React from 'react';
import Routes from './configs/routes';
import ContextProvider from './context/context';
import StudentProvider from './context/student-context';
function App() {
  return (
    <StudentProvider>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </StudentProvider>
  );
}

export default App;
