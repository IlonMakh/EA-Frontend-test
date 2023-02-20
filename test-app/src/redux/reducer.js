import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { SET_BLOCK_STATE, SET_POPUP_STATE, SET_RESPONSE_STATUS } from "./actions";
import { storeInitialValue } from "../constants/constants";

export const reducer = createReducer(storeInitialValue, (builder) => {
  builder.addCase(SET_POPUP_STATE, (state, action) => {
    state.isPopupOpen = action.payload;
  });
  builder.addCase(SET_RESPONSE_STATUS, (state, action) => {
    state.isResponseOk = action.payload;
  });
  builder.addCase(SET_BLOCK_STATE, (state, action) => {
    state.isBlockOpen = action.payload;
  });
});

export const rootReducer = combineReducers({
  rootReducer: reducer,
});
