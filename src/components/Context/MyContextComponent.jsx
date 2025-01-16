import {AuthContext, ThemeContext} from "./MyContext";

export default function MyContext({ children , themeState, userNameState}) {


  return (
    <ThemeContext.Provider value={{ ...themeState }}>
      <AuthContext.Provider value={{...userNameState }}>
        {children}
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
