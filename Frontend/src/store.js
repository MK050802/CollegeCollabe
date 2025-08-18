// import { configureStore } from "@reduxjs/toolkit" ;
// import rootReducer from "./reducers/rootReducer" ;
// import { applyMiddleware } from "@reduxjs/toolkit" ;
// import { thunk } from "redux-thunk" ;
// import { composeWithDevTools } from "redux-devtools-extension" ;

// const middleware = [thunk];

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// };

// const store = configureStore(
//   {
//     reducer: rootReducer,
//   },
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store ; 


import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { thunk } from "redux-thunk";
  // default import, not { thunk }

// Load user info from localStorage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const preloadedState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), //  add thunk
  preloadedState, // replaces your initialState
  devTools: true, //  built-in Redux DevTools
});

export default store;
