import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainDetailPage from "./pages/MainDetailPage";
import Donepage from "./pages/DonePage";
import InputPage from "./pages/InputPage";
import Title from "./components/Title/Title";
import DoneDetail from "./components/DoneDetail/DoneDetail";

const App = () => {
  return (
    <>
      <Title />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/maindetail/:id" element={<MainDetailPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/donepage" element={<Donepage />} />
        <Route path="/donedetail/:id" element={<DoneDetail />} />
      </Routes>
    </>
  );
};

export default App;
