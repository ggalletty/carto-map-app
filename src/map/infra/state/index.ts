import { combineReducers } from "@reduxjs/toolkit";
import * as deck from "../../components/Deck/state";
import * as layer from "../../components/Layer/state";

export const reducer = combineReducers({
  [deck.name]: deck.reducer,
  [layer.name]: layer.reducer,
});

export type MapState = ReturnType<typeof reducer>;

export default reducer;
