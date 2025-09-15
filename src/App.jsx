import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Conditional from "./component/Conditional";
import Stcomp from "./component/Stcomp";
import Home from "./component/Home";
import Procomp from "./component/Procomp";
import LocalStorageDemo from "./LocalStorageDemo";
import Twowaybind from "./component/Twowaybind";
import Apiinteg from "./component/Apiinteg";
import Idcard from "./component/Idcard"; 

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/Home">Home || </Link>
        <Link to="/conditional">Conditional || </Link>
        <Link to="/stcomp">Stcomp || </Link>
        <Link to="/props">Props || </Link>
        <Link to="/local">Local || </Link>
        <Link to="/twoway">Twoway || </Link>
        <Link to="/idcard">ID Card || </Link> 
        <Link to="/api">API || </Link>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/conditional" element={<Conditional isloggedin={true} />} />
        <Route path="/stcomp" element={<Stcomp />} />
        <Route path="/props" element={<Procomp name="welcome" messa="login" />} />
        <Route path="/local" element={<LocalStorageDemo />} />
        <Route path="/twoway" element={<Twowaybind />} />
        <Route path="/idcard" element={<Idcard />} />  
        <Route path="/api" element={<Apiinteg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
