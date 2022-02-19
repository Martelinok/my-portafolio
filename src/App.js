import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TranslatorProvider } from "react-translate";
import { Provider } from "react-redux";
import { Cookies } from "react-cookie";
import { AuthContext } from "./Components/Context/auth";

/* ------------------------------- Import Page ------------------------------ */
import Start from "./Page/Start/Start";
import configureStore from './Redux/Store/Store';

const store = configureStore();
function App() {
  const cookies = new Cookies();
  const [user, setUser] = useState(cookies.get("language") || "En");

  return (
    <Provider store={store}>
      <AuthContext.Provider
        value={{ user, setUser }}
      >
        <TranslatorProvider
          translations={require(`./Assets/Lang/${user}.json`)}
        >
          <BrowserRouter>
            <Routes>
              <Route
                exact path="/"
                element={<Start />} />
            </Routes>
          </BrowserRouter>
        </TranslatorProvider>
      </AuthContext.Provider>
    </Provider>

  );
}

export default App
