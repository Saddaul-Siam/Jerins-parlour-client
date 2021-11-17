import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="expenses" element />
          <Route path="invoices" elements />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
