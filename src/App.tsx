import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./domain/planner/page/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
