import "bootstrap/dist/css/bootstrap.css"
import Navbar from './components/Navbar';
import Main from './components/Main';
import Advertisment from "./components/Advertisment";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Advertisment/>
    </>
  );
}

export default App;
