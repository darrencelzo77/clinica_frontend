// import { AnyAction, combineReducers, Reducer } from "redux";
// import storage from "redux-persist/lib/storage";
// import login from "./api/login";
// import userListSlice from "./api/users-list";
// import updateUserStatusSlice from "./api/update-user-status";
// import getTransactionsSlice from "./api/transactions-list";

// const rootReducer = combineReducers({
//     login,
//     userListSlice,
//     updateUserStatusSlice,
//     getTransactionsSlice
// });

// export type RootState = ReturnType<typeof rootReducer>;

// const appRootReducer: Reducer = (state: RootState | undefined, action: AnyAction) => {
//     if (action.type === "login/logout") {
//         storage.removeItem("persist:root");
//         return rootReducer(undefined, action as never);
//     }
//     return rootReducer(state, action as never);
// };

// export default appRootReducer;
