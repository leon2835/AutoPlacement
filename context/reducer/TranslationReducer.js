import enUS from '../../assets/language/en-US';
import msMY from '../../assets/language/ms-MY';
import zhCN from '../../assets/language/zh-CN';
import {CHANGE_LANGUAGE} from '../type';

const languageList = {
  enUS: enUS,
  msMY: msMY,
  zhCN: zhCN,
};

export const initialState = {
  languageIndex: 0,
  translations: languageList[Object.keys(languageList)[0]],
};

const TranslationReducer = (state = initialState, action) => {
  const data = action.value;
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        languageIndex: data,
        translations: languageList[Object.keys(languageList)[data]],
      };
    default:
      return state;
  }
};

export default TranslationReducer;
