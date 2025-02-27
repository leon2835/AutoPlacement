import React, {createContext, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TranslationReducer, {
  initialState as TranslationInitialState,
} from '../reducer/TranslationReducer';
import {CHANGE_LANGUAGE} from '../type';
import {SYSTEM_LANGUAGE} from '../../constant/String';

export const TranslationContext = createContext();

export default function TranslationProvider({children}) {
  const [state, dispatch] = useReducer(
    TranslationReducer,
    TranslationInitialState,
  );
  return (
    <TranslationContext.Provider
      value={{
        ...state,
        changeLanguage: async value => {
          try {
            await AsyncStorage.setItem(
              SYSTEM_LANGUAGE,
              JSON.stringify({
                languageIndex: value,
              }),
            );
          } catch (e) {}
          dispatch({type: CHANGE_LANGUAGE, value});
        },
      }}>
      {children}
    </TranslationContext.Provider>
  );
}
