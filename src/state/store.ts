import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as mapReducer } from "../map/infra/state";
import { middleware as mapMiddleware } from "../map/infra/state/middleware";
import { key as mapKey } from "../map/infra/state/constants";

const rootReducer = combineReducers({
  [mapKey]: mapReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mapMiddleware),
});
