import { Route, Routes, BrowserRouter } from "react-router-dom";
import DetailUserPage from "./pages/DetailUserPage";
import Home from "./pages/Home";
import SubmissionForm from "./pages/SubmissionForm";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-b from-tosca to-blue">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<SubmissionForm />} />
          <Route path="/users/:id" element={<DetailUserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
