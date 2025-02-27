import React, {createContext, useReducer} from 'react';
import ThemeReducer, {
  initialState as ThemeInitialState,
} from '../reducer/ThemeReducer';

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
  const [state] = useReducer(ThemeReducer, ThemeInitialState);
  return (
    <ThemeContext.Provider
      value={{
        ...state,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
