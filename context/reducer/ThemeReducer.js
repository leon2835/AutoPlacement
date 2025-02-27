import LightGlobalStyles from '../../assets/styles/LightGlobalStyles';

export const initialState = {
  style: LightGlobalStyles,
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ThemeReducer;
