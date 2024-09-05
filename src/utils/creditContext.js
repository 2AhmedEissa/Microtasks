import React, { createContext, useState, useContext } from 'react';

const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
    const [credits, setCredits] = useState(0);

    return (
        <CreditContext.Provider value={{ credits, setCredits }}>
            {children}
        </CreditContext.Provider>
    );
};

export const useCredits = () => useContext(CreditContext);