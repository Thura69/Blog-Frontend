import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reduser.tsx";

const INITIALSTATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false
};


export const context = createContext(INITIALSTATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIALSTATE);

    useEffect(() => {
      console.log('1')
      return localStorage.setItem('user', JSON.stringify(state.user));
    },[state.user])

    return (
        <context.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
            
        }}>{children}</context.Provider>
)

}