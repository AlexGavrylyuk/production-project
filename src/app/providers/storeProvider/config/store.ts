import { configureStore, EnhancedStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
): EnhancedStore<StateSchema> {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

// export type ReducerManager = ReturnType<typeof createReducerManager>;

// export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
//   reducerManager: ReducerManager;
// }

// export function createReduxStore(initialState?: StateSchema): ReduxStoreWithManager {
//   const rootReducer: ReducersMapObject<StateSchema> = {
//     counter: counterReducer,
//     user: userReducer,
//   };

//   const reducerManager = createReducerManager(rootReducer);

//   const store = configureStore<StateSchema>({
//     reducer: rootReducer,
//     devTools: __IS_DEV__,
//     preloadedState: initialState,
//   }) as ReduxStoreWithManager;

//   store.reducerManager = reducerManager;
//   return store;
// }
