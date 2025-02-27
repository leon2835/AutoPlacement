import {INSERT_LOCATION, DELETE_LOCATION} from '../type';

export const initialState = {
  locationList: [],
};

const LocationReducer = (state = initialState, action) => {
  const data = action.value;
  switch (action.type) {
    case INSERT_LOCATION:
      return {
        ...state,
        locationList: state.locationList.concat({...data}),
      };
    case DELETE_LOCATION:
      return {
        ...state,
        locationList: state.locationList.filter((item, index) => index != data),
      };
    default:
      return state;
  }
};

export default LocationReducer;
