import React, { useReducer, useContext, createContext } from 'react';

export const model = {
	name: '',
	content: '',
	complete: false,
}

export const initialState = {
    todos: [
    	Object.assign({}, model, { name: 'Test 1', content: 'lol kek'}),
    	Object.assign({}, model, { name: 'Test 2', content: 'lol kek 2'}),
    	Object.assign({}, model, { name: 'Test 3', content: 'lol kek 3'}),
    ],
    selected: Object.assign({}, model, { name: 'Test 1', content: 'lol kek'}),
    isNew: false,
    search: '',
}

export function reducer(state, action) {
    switch(action.type) {
        case 'AddToList': {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload,
                ],
            };
        }
        case 'Select': {
            const { isNew = false, item = null } = action.payload || { isNew: false, item: null };
            const selected = isNew ? Object.assign({}, model) : item
            return {
                ...state,
                selected,
                isNew,
            };
        }
        case 'ChangeSelectProp': {
            const { prop, value } = action.payload;
            return {
                ...state,
                selected: {
                    ...state.selected,
                    [prop]: value,
                }
            }
        }
        case 'Search': {
            return {
                ...state,
                search: action.payload
            }
        }
        case 'Toggle': {
            const { index, value } = action.payload;

            const nextTodos = [...state.todos];
            nextTodos[index].complete = value;

            return {
                ...state,
                todos: nextTodos
            }
        }
        default:
            return state;
    }
}

export const StateContext = createContext(null);
const Provider = StateContext.Provider;

export const useGlobalState = () => useContext(StateContext);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={[state, dispatch]}>{children}</Provider>
}
