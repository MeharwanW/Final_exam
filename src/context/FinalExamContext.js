import React, {createContext, useContext, useState} from 'react';
import './finalexamcontext.css'
const MyExamContext = createContext();

export const MyExamInformationProvider = ({children}) => {
    const [state, setState] = useState('')

    // states
    return (
        <MyExamContext.Provider value={{
            state, setState
        }}>
            {children}
        </MyExamContext.Provider>
    );
};

export const useExamContext = () => {
    const context = useContext(MyExamContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};
