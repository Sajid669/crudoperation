import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/pages/user/User"
import AddUser from "./components/pages/user/AddUser";
import Edit from "./components/pages/user/Edit";
import toast, { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="app">
      <div>
        <Toaster />
      </div>

      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
