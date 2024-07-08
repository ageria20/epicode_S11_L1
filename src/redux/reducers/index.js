const initialState = {
  favouriteJobs: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FAV_JOB":
      return {
        ...state,
        favouriteJobs: {
          ...state.favouriteJobs,
          content: state.favouriteJobs.content.concat(action.payload),
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
