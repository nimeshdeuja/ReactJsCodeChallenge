import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Show from "./components/show";
import Detail from "./components/episode/detail";
import GlobalStyle from "./shared/globalStyle";
import Theme from "./shared/theme";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/episode/:id" element={<Detail />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
