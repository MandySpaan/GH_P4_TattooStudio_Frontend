import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <AppRoutes />
        </div>
        <Footer className="footer" />
      </BrowserRouter>
    </div>
  );
}

export default App;
