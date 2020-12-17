import {BrowserRouter} from "react-router-dom"
import './App.css';
import Site from "./container/Site/Site"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <BrowserRouter>
       <Site/>
    </BrowserRouter>
    
  );
}

export default App;
