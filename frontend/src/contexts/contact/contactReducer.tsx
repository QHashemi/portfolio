// contactReducer.ts
import { ContactInitialState, ContactAction, contactInitialState, } from "./contactTypes";

export function contactReducer( state: ContactInitialState = contactInitialState, action: ContactAction ): ContactInitialState {
    
    switch (action.type) {
        case "SEND_START":
            return { ...state, loading: true, success: false, error: null };

        case "SEND_SUCCESS":
            return {
                ...state,
                loading: false,
                success: true,
                error: null,
                msg: action.payload.msg,
            };

        case "SEND_ERROR":
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };

        case "RESET_STATE":
            return {
                ...state,
                loading: false,
                success: false,
                error: null,
            };

        default:
            return state;
    }
}
