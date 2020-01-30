const reducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGINUSER":
      return { ...state };
    case "LOADUSER":
      return { ...state, data: action.data };

    default:
      return state;
  }
};

export default reducer;
