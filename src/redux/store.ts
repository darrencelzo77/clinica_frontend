import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import appRootReducer, { RootState } from './reducer';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    whitelist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, appRootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware({
            serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] }
        }).concat(thunk)
        if (import.meta.env.VITE_NODE_ENV == 'development') {
            middleware.push(logger)
        }
        return middleware
    },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
const persistor = persistStore(store)
export { persistor, store }
