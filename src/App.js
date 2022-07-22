import Layout from "./layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Greetings from "./pages/Greetings";
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to='/greetings' replace />} />
        <Route path="/greetings" element={<Greetings />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </Layout>
  );
}

export default App;
