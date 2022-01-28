import './App.css';
import '../pages/Dashbord/Dashboard'
import Dashboard from "../pages/Dashbord/Dashboard";
import Homepage from "../pages/Homepage/Homepage"
import {Route ,Routes} from "react-router-dom";
import "../circe.css"

function App() {
  return (
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/home' element={<Homepage/>}/>
      </Routes>
  );
}

export default App;
