import "./App.css";
import NavMenu from "./components/RequestForm/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import TelfordRequestForm from "./components/RequestForm/TelfordRequestForm";
import Header from "./components/RequestForm/Header";
import Selectdropdown from "./components/RequestForm/RequestDropdown";

function App() {
  return (
    <div className="d-grid gap-">
      <NavMenu></NavMenu>
     <TelfordRequestForm></TelfordRequestForm>
     
    </div>
  );
}

export default App;
