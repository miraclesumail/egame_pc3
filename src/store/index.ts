/**
 * @description redux 入口
 * @time 2020/1/8
 * @author Aiden
 */
import { configureStore } from '@reduxjs/toolkit';
// redux-persist
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { getPersistConfig } from 'redux-deep-persist'
// storage
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
// create persist reducer
const persistConfig = getPersistConfig({
  key: 'root',
  storage,
  whitelist: [
    'auth'
  ],
  rootReducer: reducers
});
const persistedReducer = persistReducer(persistConfig, reducers);
// create store
const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
/**
 * 回调函数是当把storage中的数据写回store中时触发
 */
export const persisStore = persistStore(store,null, () => {
  console.log(store.getState())
})

export type RootState = ReturnType<typeof reducers>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
