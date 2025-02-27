import React, {createContext, useReducer} from 'react';
import LocationReducer, {
  initialState as LocationInitialState,
} from '../reducer/LocationReducer';
import {DELETE_LOCATION, INSERT_LOCATION} from '../type';

export const LocationContext = createContext();

export default function LocationProvider({children}) {
  const [state, dispatch] = useReducer(LocationReducer, LocationInitialState);
  return (
    <LocationContext.Provider
      value={{
        ...state,
        insertLocation: async value => {
          dispatch({type: INSERT_LOCATION, value});
        },
        deleteLocation: async value => {
          dispatch({type: DELETE_LOCATION, value});
        },
      }}>
      {children}
    </LocationContext.Provider>
  );
}
