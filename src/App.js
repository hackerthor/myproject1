import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Add from "./components/Add";
import EditPeople from "./components/EditPeople";
import ProtectedRoute from "./components/ProtectedRoute";
import Inactivepeople from "./components/Inactivepeople";
import Adminpanel from "./components/Adminpanel";
import "./App.css";
import Changepassword from "./components/Changepassword";

function App() {

  const [user, setUser] = useState(null);

  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard user={user} setUser={setUser}/></ProtectedRoute>} />
        <Route path="/add" element={<Add /> }/>
        <Route path="/edit/:id" element={<EditPeople />} />
        <Route path="/iap" element={<Inactivepeople />} />
        <Route path="/adminusrs" element={<Adminpanel />} />
        <Route path="/cp/:id" element={<Changepassword />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;