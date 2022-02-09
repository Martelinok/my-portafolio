import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Page/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </BrowserRouter>

  );
}

export default App
