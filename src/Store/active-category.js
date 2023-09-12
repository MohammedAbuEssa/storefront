const initialState = null;

const activeCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

export default activeCategoryReducer;

export const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY";

export const setActiveCategory = (category) => ({
  type: SET_ACTIVE_CATEGORY,
  payload: category,
});
