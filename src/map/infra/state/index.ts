import { combineReducers } from "@reduxjs/toolkit";
import * as deck from "../../components/Deck/state";

export const reducer = combineReducers({
  [deck.name]: deck.reducer,
});

export type MapState = ReturnType<typeof reducer>;

export default reducer;
