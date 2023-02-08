import { createContext, useReducer } from "react"

const AppReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            if(action.payload.amount >= 0){
                state.income += action.payload.amount;
            }
            else {
                state.expense += action.payload.amount;
            }
            state.balance = state.income + state.expense;
            return {
                ...state,
                history: [...state.history, action.payload.history]
            };

        default:
            return state;
    }
}

const initialState = {
    balance: 0,
    income: 0,
    expense: 0,
    history: []
}

export const StateContext = createContext();

export const StateProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const data = localStorage.getItem('data');
        return data ? JSON.parse(data) : initialState;
    });

    return (
        <StateContext.Provider
            value={{
                balance: state.balance,
                income: state.income,
                expense: state.expense,
                history: state.history,
                dispatch,
            }}>
                {props.children}
        </StateContext.Provider>
    );
}