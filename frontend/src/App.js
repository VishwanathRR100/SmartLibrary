import './App.css';
import { Routes, Route} from "react-router-dom"
import Homepage from './Homepage/Homepage';
import Topbar from './Homepage/Topbar';
import Managestudents from './Homepage/Managestudents';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/manage" element = {<Managestudents />}/>
      </Routes>
    </div>
  );
}

export default App;
