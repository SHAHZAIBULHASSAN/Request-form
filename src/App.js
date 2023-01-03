import "./App.css";
import NavMenu from "./components/RequestForm/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import TelfordRequestForm from "./components/RequestForm/TelfordRequestForm";
import Header from "./components/RequestForm/Header";


function App() {
  return (
    <div className="d-grid gap-">
      <NavMenu></NavMenu>
     <TelfordRequestForm></TelfordRequestForm>
     
    </div>
  );
}

export default App;
