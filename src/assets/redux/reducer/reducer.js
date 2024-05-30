const IntState = {
  data: [],
};

export const DataReducer = (state = IntState, action) => {
  switch (action.type) {
    case "setdata":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
