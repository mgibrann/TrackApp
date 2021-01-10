import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await tr;
      ackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
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
