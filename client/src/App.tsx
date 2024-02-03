import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Donepage from "./pages/DonePage";
import InputPage from "./pages/InputPage";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <>
      <Title />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/done/:id" element={<Donepage />} />
      </Routes>
    </>
  );
};

export default App;
