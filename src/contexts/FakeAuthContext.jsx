import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuththenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        // even if we only have 2 initial state and we changed all of them we have to add ...state to  make it fucture proof
        ...state,
        user: action.payload,
        isAuththenticated: true,
      };

    case "logout":
      return { ...state, user: null, isAuththenticated: false };

    default:
      throw new Error("UnKnow action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuththenticated, dispatch }] = useReducer(
    reducer,
    initialState
  );
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ user, isAuththenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext is used outside auth provider");
  return;
}

export { AuthProvider, useAuth };
