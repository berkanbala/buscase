const initialState = {};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: any) => {
  if (action.type === "SEARCH_BUS") {
    return { ...state, ...action.search };
  }
  return state;
};
