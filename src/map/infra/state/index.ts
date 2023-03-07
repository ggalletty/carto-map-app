import { combineReducers } from "@reduxjs/toolkit";
import * as deck from "../../components/Deck/state";
import * as layer from "../../components/Layer/state";
import * as settings from "../../components/Settings/state";

export const reducer = combineReducers({
  [deck.name]: deck.reducer,
  [layer.name]: layer.reducer,
  [settings.name]: settings.reducer,
});

export type MapState = ReturnType<typeof reducer>;

export default reducer;
