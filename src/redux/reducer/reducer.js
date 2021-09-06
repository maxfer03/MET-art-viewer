import {
  GET_ART,
  GET_DEPTS,
  SET_CATEGORY,
  VIEW_DETAIL,
  GET_DETAIL,
} from "../actions/actions";

const initialState = {
  categorySelected: 1,
  artLoaded: [],
  depts: [],
  displayDetail: false,
  artDetail: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, categorySelected: action.payload };
    case GET_ART:
      return { ...state, artLoaded: action.payload };
    case GET_DEPTS:
      return { ...state, depts: action.payload };
    case VIEW_DETAIL:
      return { ...state, displayDetail: action.payload };
    case GET_DETAIL:
      return { ...state, artDetail: action.payload };
    default:
      return state;
  }
};
