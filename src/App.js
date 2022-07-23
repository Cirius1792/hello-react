import React, { Suspense } from "react";
import Layout from "./layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Greetings from "./pages/Greetings";
//import AboutMe from './pages/AboutMe';
const AboutMe = React.lazy(() => import("./pages/AboutMe"));
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/greetings" replace />} />
        <Route path="/greetings" element={<Greetings />} />
        <Route
          path="/about-me"
          element={
            <Suspense fallback={<p>Loadng...</p>}>
              <AboutMe />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
