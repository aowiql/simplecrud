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
        <Route path="/maindetail/:id" element={<DetailPage />} />
        <Route path="/donepage" element={<Donepage />} />
        <Route path="/donedetail/:id" element={<Donepage />} />
      </Routes>
    </>
  );
};

export default App;
