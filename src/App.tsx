import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router basename="/portfolio">
      {/* <ContextProvider> */}
      {/* <Header /> */}
      <div className="bg-primary-800 min-h-[90vh]">
        <AppRoutes />
      </div>
      {/* <Footer /> */}
      {/* </ContextProvider> */}
    </Router>
  );
};

export default App;
