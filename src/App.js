import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SubmissionForm from "./pages/SubmissionForm";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<SubmissionForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
