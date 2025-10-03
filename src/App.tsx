import { BrowserRouter as Router, Routes, Route } from "react-router";
import ContextProvider from "./context/ContextProvider";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import Layout from "./layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router basename="/portfolio">
      <ContextProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </ContextProvider>
    </Router>
  );
};

export default App;
