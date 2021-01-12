import React, { createContext, useContext, useReducer } from 'react';

// DATA LAYER
export const StateContext = createContext();

//PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//THIS IS HOW WE USE IT INSEIDR OF A COMPONENT
export const useStateValue = () => useContext(StateContext);