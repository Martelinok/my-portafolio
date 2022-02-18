import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TranslatorProvider } from "react-translate";

import Home from "./Page/Home/Home";
function App() {
  return (
    <TranslatorProvider
      translations={require('./Assets/Lang/en.json')}
    >
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/"
            element={<Home />} />
        </Routes>
      </BrowserRouter>
    </TranslatorProvider>

  );
}

export default App
