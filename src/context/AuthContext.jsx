import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {};
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signim
    // handle succes by updating state
    // handle failure by showing error message
  };
};

const signout = (dispatch) => {
  return () => {
    // sign put
  };
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { isSignedIn: false }
);
