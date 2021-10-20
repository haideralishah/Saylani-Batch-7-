import React, { createContext, useReducer } from 'react';
import { data, studentReducer } from "./students-reducer";

export const StudentContext = createContext('Student Context');

function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(studentReducer, data);
    return (
        <StudentContext.Provider value={{ state, dispatch }}>
            {children}
        </StudentContext.Provider>
    )
}

export default ContextProvider;