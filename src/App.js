import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './pages/Login';
import Layout from './pages/Layout';
import ElectricView from "./pages/loggedIn/views/ElectricView";
import ListView from "./pages/loggedIn/views/ListView";
import HomeView from "./pages/loggedIn/views/HomeView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="home" element={<HomeView />} />
          <Route path="electric" element={<ElectricView />} />
          <Route path="list" element={<ListView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
