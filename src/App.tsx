import { Route, Routes } from "react-router-dom";

import Show from "./components/show";
import Detail from "./components/episode/detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Show />} />
      <Route path="/episode/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
